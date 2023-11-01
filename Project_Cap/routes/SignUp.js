const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const postschema = new schema({
  EmpEmail: String,
  EmpPassword: String
});

const PostModel = mongoose.model("SignUp", postschema);

router.post("/addnewemployee", (req, res) => {
  const newEmpEmail = new PostModel({
    EmpEmail: req.body.EmpEmail,
    EmpPassword: req.body.EmpPassword
  });
  newEmpEmail.save(function (err) {
    if (!err) {
      res.send("New organization added successfully");
    } else {
      res.send(err);
    }
  });
});

router.get("/getemployee", (req, res) => {
  PostModel.find({}, function (err, docs) { // Reversed order of parameters
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

router.post("/getemployeedata", (req, res) => {
  PostModel.find({ EmpEmail: req.body.EmpEmail }, (err, docs) => { // Reversed order of parameters
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

router.post("/updateemployee", (req, res) => {
  PostModel.findOneAndUpdate(
    { EmpEmail: req.body.EmpEmail },
    {
        EmpEmail: req.body.EmpEmail,
        EmpPassword: req.body.EmpPassword
    },
    (err) => {
      if (!err) {
        res.send("Employee Updated Successfully");
      } else {
        res.send(err);
      }
    }
  );
});

router.post("/deleteemployee", (req, res) => {
  PostModel.findOneAndDelete({ EmpEmail: req.body.EmpEmail }, (err) => {
    if (!err) {
      res.send("employee Deleted Successfully");
    } else {
      res.send(err);
    }
  });
});

module.exports = router;
