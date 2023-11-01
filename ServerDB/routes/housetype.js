const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const schema = mongoose.Schema;

const housetypeschema = new schema({
  housetypeId : String,
  housetypeName : String
});

const housetypeModel = mongoose.model("housetypes", housetypeschema);

router.post("/addnewhousetypes", (req, res) => {
  const newhousetype = new housetypeModel({
    housetypeId: req.body.housetypeId,
    housetypeName: req.body.housetypeName
  });
  newhousetype.save(function (err) {
    if (!err) {
      res.send("New House type added successfully");
    } else {
      res.send(err);
    }
  });
});

router.get("/gethousetype", (req, res) => {
  housetypeModel.find({}, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

router.post("/gethousetype", (req, res) => {
  housetypeModel.find({ housetypeId: req.body.housetypeId }, (docs, err) => {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

router.post("/updatehousetype", (req, res) => {
  housetypeModel.findOneAndUpdate(
    { housetypeId: req.body.housetypeId },
    {
      housetypeId: req.body.housetypeId,
      housetypeName: req.body.housetypeName
    },
    (err) => {
      if (!err) {
        res.send("House Type Updated Successfully");
      } else {
        res.send(err);
      }
    }
  );
});

router.post("/deletehousetype", (req, res) => {
  housetypeModel.findOneAndDelete({ housetypeId: req.body.housetypeId }, (err) => {
    if (!err) {
      res.send("House Type Deleted Successfullyy");
    } else {
      res.send(err);
    }
  });
});

module.exports = router;
