const express = require("express");
const router = express.Router();
const passport = require("passport");
 
 
const mongoose = require("mongoose");
 
const schema = mongoose.Schema;
 
const signupschema = new schema({
  username : String,
  email: String,
  password : String,
 // roles : String
});
 
const SignupModel = mongoose.model("signups", signupschema);
 
router.post("/addnewuser", async(req, res) => {
  const newpost = new SignupModel({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    //roles: req.body.roles
  });
  newpost.save(function (err) {
    if (!err) {
      res.send("New User added successfully");
    } else {
      res.send(err);
    }
  });
});
 
// router.get("/getusers", (req, res) => {
//     SignupModel.find({}, function (docs, err) {
//       if (!err) {
//         res.send(docs);
//       } else {
//         res.send(err);
//       }
//     });
//   });

router.get("/getusers", async (req, res) => {
  SignupModel.find({})
    .exec()
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      res.send(err);
    });
});
 
  module.exports = router