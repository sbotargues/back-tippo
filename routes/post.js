const express = require("express");
const Post = require("../models/post");
const User = require("../models/user");

const router = express.Router();

const {
    isLoggedIn,
  } = require("../helpers/middelwares");

router.get("/:id",isLoggedIn(), (req, res, next) => {
    Post.findById(req.params.id)
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err);
  })
});

router.post("/edit/:id",isLoggedIn(), (req, res, next) => {
    Post.findByIdAndUpdate(req.params.id,{
      postDescription: req.body.postDescription,
    })
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.json(err);
      });
  });



  router.delete("/delete/:id",isLoggedIn(), (req, res, next) => {
    Post.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Post with ${req.params.id} is removed successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});


router.post("/publish", isLoggedIn(), (req, res, next) => {
    Post.create({
      postPhoto: req.body.postPhoto,
      postDescription: req.body.postDescription,
      user: req.session.currentUser._id
    })
    .then(response => {
        User.findByIdAndUpdate(req.session.currentUser._id, {
          $push: { post: response._id}
        })
      .then(theResponse => {
        res.json(theResponse);
      })
      .catch(err => {
        res.json(err);
      });
  })
  .catch(err => {
    res.json(err);
  });
});

module.exports = router;