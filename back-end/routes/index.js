var express = require('express');
var router = express.Router();

const MongoClient = require('../db/index');

let database

MongoClient.connect()
  .then(error => {
    console.log("Connected to database successfully!");
    database = MongoClient.db("test").collection("random");
  })
  .catch(error => {
    console.log("Unable to connect to database.");
  })

/* GET home page. */
router.get('/', async function(req, res, next) {
  let doc;

  if (database) {
    doc = await database.find({}).toArray();
  }

  res.send({status: "Things are not the same!!!!", object: doc || "empty"})
});

router.post('/', async function(req, res, next) {
  if (database) {
    database.insertOne(req.body);
  }

  res.send({status: "Things can not be the same!!!"});
})

module.exports = router;
