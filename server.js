const express       = require('express');
const  app          = express();
const MongoClient = require('mongodb').MongoClient
const Parser        = require('rss-parser');
const parser        = new Parser();
const path          = require('path');
const RSSToMongo = require('rss-node-mongo');
const feedURL = "https://www.google.com/alerts/feeds/13505578085637347686/";

const db = require('./config/keys').mongoURI;
//var sslRedirect = require('heroku-ssl-redirect');

MongoClient.connect(db, { useNewUrlParser: true },function (err, client) {
    if (err) throw err;
mongodb = client.db('military-rss');
console.log("Military db up");
})


// enable ssl redirect
//app.use(sslRedirect());

// constructor to refactor code
// function Branch(rss, collection){
//     this.rss = `${feedURL}${this.rss}`;
//     this.collection = collection;
//     this.db = db;
//     rss = new RSSToMongo(this.collection)
//     rss.work(function (err, success){
//          if(!err) {
//      console.log(success.saved + `${this.collection} related items were saved`)
//      } else {
//          console.error(err)
//      }
    
// })
// }

function getParsed() {
// Branch(3715726507793308443,"army");
const army =
{
    "rss": `${feedURL}3715726507793308443`,
    "db": db,
    "collection": "army"
}

const rssArmy = new RSSToMongo(army)


rssArmy.work(function (err, success) {
    if (!err) {
         console.log(success.saved + " US Army related items were inserted")
    } else {
         console.error(err)
    }
})

const navy =
{
    "rss": `${feedURL}8082617289749568491`,
    "db": db,
    "collection": "navy"
}

const rssNavy = new RSSToMongo(navy)


rssNavy.work(function (err, success) {
    if (!err) {
         console.log(success.saved + " US Navy related items were inserted")
    } else {
         console.error(err)
    }
})

const AF =
{
    "rss": `${feedURL}14477008907129064916`,
    "db": db,
    "collection": "air-force"
}

const rssAF = new RSSToMongo(AF)


rssAF.work(function (err, success) {
    if (!err) {
         console.log(success.saved + " US Air Force related items were inserted")
    } else {
         console.error(err)
    }
})

const coastGuard =
{
    "rss": `${feedURL}4736082232771657021`,
    "db": db,
    "collection": "coast-guard"
}

const rssCoast = new RSSToMongo(coastGuard)


rssCoast.work(function (err, success) {
    if (!err) {
         console.log(success.saved + " US Coast Guard related items were inserted")
    } else {
         console.error(err)
    }
})


    const usmc =
{
    "rss": `${feedURL}9509981562367748417`,
    "db": db,
    "collection": "usmc"
}

const rssUSMC = new RSSToMongo(usmc)


rssUSMC.work(function (err, success) {
    if (!err) {
         console.log(success.saved + " Marine Corps related items were inserted")
    } else {
         console.error(err)
    }
})
console.log("I've been parsed");
};
setInterval(getParsed, 54000)


app.use(express.static(__dirname + '/public'));


const port = process.env.PORT || 5000;

//default route
app.get('/rss', function (req, res){
   
    const URL = 'https://www.google.com/alerts/feeds/13505578085637347686/9509981562367748417';
    parser.parseURL(URL, function (err, parsed){
        if(err){
          console.log("Unable to parse");
        }  else {
            res.json(parsed);
               }
        });
   });
//route with options
//    app.get('/rss/:id', function (req, res){
   
//     const URL = `https://www.google.com/alerts/feeds/13505578085637347686/${req.params.id}`;
//     parser.parseURL(URL, function (err, parsed){
//         if(err){
//           console.log("Unable to parse");
//         }  else {
//             res.json(parsed);
//                }
//         });
//    });

   app.get('/news/:id', (req, res) => {
    mongodb.collection(`${req.params.id}`).find().limit(15).sort({$natural : -1}).toArray((err, result) => {
      if (err) return console.log(err)
      res.json(result);
     })
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