const MongoClient = require('mongodb').MongoClient
const DB=require('../config1.json').DB

let user=null;

MongoClient.connect(DB.URI, function (err, database) {
    if (err) throw  err;
    const userdb=database.db('tododb')

    user = userdb.collection('user')
})

const User={
    create: function (user1) {
        return new Promise(function (resolve, reject) {
            user.insertOne(user1, function (err, result) {
                if (err) return reject(err)

                return resolve(result)
            })
        })
    },
    findAll: function (whereArgs) {
        return new Promise(function (resolve, reject) {
            user.find(whereArgs).toArray(function (err, result) {
                if (err) return reject(err)

                return resolve(result)
            })
        })
    },
    findOne:function (user1) {
        return new Promise(function (resolve, reject) {
            user.findOne(user1, function (err, result) {
                if (err) return reject(err)

                return resolve(result)
            })
        })
    },


}

exports.models = {
    User
}
