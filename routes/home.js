const express = require("express");
const User = require("../models/user");
const Post = require("../models/post");

const router = express.Router();

const {
  isLoggedIn,
} = require("../helpers/middelwares");

router.post(
  "/likes/:id",
  isLoggedIn(),
  (req, res, next) => {
    Post.findByIdAndUpdate(req.params.id, {
      like: like + 1,
    })
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  }
);

//revisar

router.post("/comments/:id",isLoggedIn(), (req, res, next) => {
  Post.findByIdAndUpdate(req.params.id, {
    $push: {
      comment: {
        username: req.session.currentUser.username,
        text: req.body.text,
      },
    },
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post(
  "/superlikes/:id",
  isLoggedIn(),
  (req, res, next) => {
    Post.findByIdAndUpdate(req.params.id, {
      superlike: superlike + 1,
    })
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  }
);

//falta el get para traer el ultimo post de cada usuario
//date??model?
module.exports = router;
