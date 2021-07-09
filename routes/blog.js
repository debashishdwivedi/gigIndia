var express = require("express");
var passport = require("passport");
var bcrypt = require("bcrypt");
const jsonwt = require("jsonwebtoken");

var router = express.Router();

var Blog = require("../models/BlogModel");
var key = require("../mysetup/myurl");
const saltRounds = 10;

router.post("/", async (req, res) => {
 var user= await  jsonwt.verify(
        req.query.token,
        key.secret,
       
        (err, res) => {
          if (err) {
            console.log("Error is ", err.message);
          }
          res.json({
            success: true,
            user: res
          });
  var newBlog = new Blog({
    name: req.body.name,
    content: req.body.content,
    userId:user.user.id
  });

  await User.findOne({ name: newUser.userId })
    .then(async profile => {
      if (!profile) {
        await newBlog
        .save()
        .then(() => {
          res.status(200).send(newBlog);
        })
        .catch(err => {
          console.log("Error is ", err.message);
        });
      } else {
        res.send("User already exists...");
      }
    })
    .catch(err => {
      console.log("Error is", err.message);
    });
});


router.get(
  "/", async(req,res)=>{
    var user= await  jsonwt.verify(
        req.query.token,
        key.secret,
       
        (err, res) => {
          if (err) {
            console.log("Error is ", err.message);
          }
          res.json({
            success: true,
            user: res
          });
    await Blog.find({ userId: user.id })
    .then(async blogs => {
      if (!blogs) {
      
          res.send(200).send(blogs);
      
      } else {
        res.send("User already exists...");
      }
    })
    .catch(err => {
      console.log("Error is", err.message);
    });
  }
 
);

module.exports = router;
