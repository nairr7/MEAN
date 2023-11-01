const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");

 

const schema = mongoose.Schema;

 

const organizationschema = new schema({

  organizationID: String,

  organizationName: String

});

 

const organizationModel = mongoose.model("organizations", organizationschema);

 

router.post("/addneworganization", (req, res) => {

  const neworganization = new organizationModel({

    organizationID: req.body.organizationID,

    organizationName: req.body.organizationName

  });

  neworganization.save(function (err) {

    if (!err) {

      res.send("New organization added successfully");

    } else {

      res.send(err);

    }

  });

});

 

router.get("/getorganizations", (req, res) => {

  organizationModel.find({}, function (err, docs) { // Reversed order of parameters

    if (!err) {

      res.send(docs);

    } else {

      res.send(err);

    }

  });

});

 

router.post("/getorganizationdata", (req, res) => {

  organizationModel.find({ organizationID: req.body.organizationID }, (err, docs) => { // Reversed order of parameters

    if (!err) {

      res.send(docs);

    } else {

      res.send(err);

    }

  });

});

 

router.post("/updatehousesize", (req, res) => {

  organizationModel.findOneAndUpdate(

    { organizationID: req.body.organizationID },

    {

        organizationID: req.body.organizationID,

        organizationName: req.body.organizationIDName

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

  organizationModel.findOneAndDelete({ organizationID: req.body.organizationID }, (err) => {

    if (!err) {

      res.send("content Deleted Successfully");

    } else {

      res.send(err);

    }

  });

});

 

module.exports = router;