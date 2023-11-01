const express = require("express");

const router = express.Router();

 

const mongoose = require("mongoose");

 

const schema = mongoose.Schema;

 

const countrieschema = new schema({

  CountryID : String,

  CountryName : String

});

 

const CountryModel = mongoose.model("countries", countrieschema);

 

router.post("/addnewcountry", (req, res) => {

  const newpost = new CountryModel({

    CountryID: req.body.CountryID,

    CountryName: req.body.CountryName

  });

  newpost.save(function(err) {

    if (!err) {

      // res.send("New Country added successfully");

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

  CountryModel.find({ CountryID: req.body.CountryID }, (docs, err) => {

    if (!err) {

      res.send(docs);

    } else {

      res.send(err);

    }

  });

});

 

router.post("/updatecountry", (req, res) => {

  CountryModel.findOneAndUpdate(

    { CountryID: req.body.CountryID },

    {

      CountryID: req.body.CountryID,

      CountryName: req.body.CountryName

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

  CountryModel.findOneAndDelete({ CountryID: req.body.CountryID }, (err) => {

    if (!err) {

      res.send("Country Deleted Successfullyy");

    } else {

      res.send(err);

    }

  });

});

 

module.exports = router;