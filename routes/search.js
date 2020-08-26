const express = require("express");
const User = require("../models/user");

const router = express.Router();

const {
  isLoggedIn,
} = require("../helpers/middelwares");

router.get("/", (req, res, next) => {
    User.find({username:req.query.username})
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err);
  })
  });

module.exports = router;