const express = require("express");
const User = require("../models/user");

const router = express.Router();

const {
  isLoggedIn,
} = require("../helpers/middelwares");

router.post("/edit", isLoggedIn(), (req, res, next) => {
  User.findByIdAndUpdate(req.session.currentUser._id,{
    profilePhoto: req.body.profilePhoto,
    description: req.body.description,
    link: req.body.link,
    username: req.body.username,
    mail: req.body.mail
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/myprofile", isLoggedIn(), (req, res, next) => {
    User.findById(req.session.currentUser._id)
    .populate('post')
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err);
  })
});

router.get("/users/:id", isLoggedIn(), (req, res, next) => {
  User.findById(req.params.id)
  .populate('post')
.then(response => {
  res.json(response);
})
.catch(err => {
  res.json(err);
})
});

router.post("/follow/:id", isLoggedIn(), (req, res, next) => {
  User.findByIdAndUpdate(req.params.id,{
    followers: followers + 1,
  })
    .then(()=>{
    return  User.findByIdAndUpdate(req.session.currentUser._id,
        {following: following + 1})
    })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;