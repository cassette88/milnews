const express       = require('express');
const  app          = express();
const yelp          = require('yelp-fusion');
const mongoose      = require("mongoose");
const Parser        = require('rss-parser');
const parser        = new Parser();
const path          = require('path');
const RSSToMongo = require('rss-node-mongo');

// //DB Config
// const db = require('./config/keys').mongoURI;
// mongoose
//     .connect(db, {useNewUrlParser: true})
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

    const properties =
{
    "rss": "https://www.google.com/alerts/feeds/13505578085637347686/9509981562367748417",
    "db": "mongodb://dave:1rockstar@ds245772.mlab.com:45772/rss",
    "collection": "usmc"
    
}

const rss = new RSSToMongo(properties)


rss.work(function (err, success) {
    if (!err) {
         console.log(success.saved + " items were inserted")
    } else {
         console.error(err)
    }
})


app.use(express.static(__dirname + '/public'));

const apiKey = require('./config/keys').yelp;
const port = process.env.PORT || 5000;

const searchRequest = {
  term:'Food',
  location: 'Valdosta, ga'
};

const client = yelp.client(apiKey);


// //root route
// app.get('/', function (req, res) {
//     res.send("Hello World");
// });

//root route
app.get('/api', function (req, res) {
    client.search(searchRequest)
  .then(function(response){
      var yelpRes = response;
      res.json(yelpRes);
  }).catch(error => console.log('error is', error));
});

app.get('/rss', function (req, res){
   
    const URL = 'https://www.google.com/alerts/feeds/13505578085637347686/7130462090718037575';
    parser.parseURL(URL, function (err, parsed){
        if(err){
          console.log("Unable to parse");
        }  else {
            res.json(parsed);
               }
        });
   });
// reviews route
   app.get('api/:id', function (req, res){
       client.reviews(req.params.id)
       .then(function(response){
        var yelpRes = response;
        res.json(yelpRes);
    }).catch(error => console.log('error is', error));
  });


// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
  })