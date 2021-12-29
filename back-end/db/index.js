const mongodb = require('mongodb');

const MongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';

console.log("...........");
console.log(`MONGO_URI = ${process.env.MONGO_URI}`)
console.log("...........");

const MongoClient = new mongodb.MongoClient(MongoURI, { useUnifiedTopology: true, useNewUrlParser: true });

module.exports = MongoClient;