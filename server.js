const express       = require('express');
const  app          = express();
const yelp          = require('yelp-fusion');
const mongoose      = require("mongoose");
const Parser        = require('rss-parser');
const parser        = new Parser();
const path          = require('path');
const RSSToMongo = require('rss-node-mongo');

const db = require('./config/keys').mongoURI;



const army =
{
    "rss": "https://www.google.com/alerts/feeds/13505578085637347686/3715726507793308443",
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
    "rss": "https://www.google.com/alerts/feeds/13505578085637347686/8082617289749568491",
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
    "rss": "https://www.google.com/alerts/feeds/13505578085637347686/14477008907129064916",
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
    "rss": "https://www.google.com/alerts/feeds/13505578085637347686/4736082232771657021",
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
    "rss": "https://www.google.com/alerts/feeds/13505578085637347686/9509981562367748417",
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
   app.get('/rss/:id', function (req, res){
   
    const URL = `https://www.google.com/alerts/feeds/13505578085637347686/${req.params.id}`;
    parser.parseURL(URL, function (err, parsed){
        if(err){
          console.log("Unable to parse");
        }  else {
            res.json(parsed);
               }
        });
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