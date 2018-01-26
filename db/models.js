const MongoClient = require('mongodb').MongoClient
const DB=require('../config1.json').DB

let user=null;

MongoClient.connect(DB.URI, function (err, db) {
    if (err) throw  err;

    user = db.collection('user')
})