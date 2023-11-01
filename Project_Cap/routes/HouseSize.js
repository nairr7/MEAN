const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const postschema = new schema({
  houseSizeID: String,
  houseSize: String
});

const PostModel = mongoose.model("HouseSize", postschema);

router.post("/addnewhousesize", (req, res) => {
  const newhousesize = new PostModel({
    houseSizeID: req.body.houseSizeID,
    houseSize: req.body.houseSize
  });
  newhousesize.save(function (err) {
    if (!err) {
      res.send("New house size added successfully");
    } else {
      res.send(err);
    }
  });
});

router.get("/gethousesizes", (req, res) => {
  PostModel.find({}, function (err, docs) { // Reversed order of parameters
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

router.post("/gethousesizedata", (req, res) => {
  PostModel.find({ houseSizeID: req.body.houseSizeID }, (err, docs) => { // Reversed order of parameters
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

router.post("/updatehousesize", (req, res) => {
  PostModel.findOneAndUpdate(
    { houseSizeID: req.body.houseSizeID },
    {
        houseSizeID: req.body.houseSizeID,
        houseSize: req.body.houseSize
    },
    (err) => {
      if (!err) {
        res.send("content Updated Successfully");
      } else {
        res.send(err);
      }
    }
  );
});

router.post("/deletecontent", (req, res) => {
  PostModel.findOneAndDelete({ houseSizeID: req.body.houseSizeID }, (err) => {
    if (!err) {
      res.send("content Deleted Successfully");
    } else {
      res.send(err);
    }
  });
});

module.exports = router;
