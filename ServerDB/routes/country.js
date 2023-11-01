const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const schema = mongoose.Schema;

const countrieschema = new schema({
  countryId : String,
  countryName : String
});

const CountryModel = mongoose.model("countries", countrieschema);

router.post("/addnewcountry", (req, res) => {
  const newpost = new CountryModel({
    countryId: req.body.countryId,
    countryName: req.body.countryName
  });
  newpost.save(function (err) {
    if (!err) {
      res.send("New Country added successfully");
    } else {
      res.send(err);
    }
  });
});

router.get("/getcountries", (req, res) => {
  CountryModel.find({}, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

router.post("/getcountrydata", (req, res) => {
  CountryModel.find({ countryId: req.body.countryId }, (docs, err) => {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

router.post("/updatecountry", (req, res) => {
  CountryModel.findOneAndUpdate(
    { countryId: req.body.countryId },
    {
      countryId: req.body.countryId,
      countryName: req.body.countryName
    },
    (err) => {
      if (!err) {
        res.send("Country Updated Successfully");
      } else {
        res.send(err);
      }
    }
  );
});

router.post("/deletecountry", (req, res) => {
  CountryModel.findOneAndDelete({ countryId: req.body.countryId }, (err) => {
    if (!err) {
      res.send("Country Deleted Successfullyy");
    } else {
      res.send(err);
    }
  });
});

module.exports = router;
