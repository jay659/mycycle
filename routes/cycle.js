const express = require("express");
const router = express.Router();
const Cycle = require("../models/Cycle");
const jwt = require("jsonwebtoken");
const config = require("config");

// @route    POST api/users
// @desc     Register a user
// @access   Public
router.post("/", async (req, res) => {
  const {
    name,
    image_url,
    three_hour,
    twentyfour_hour,
    second_day,
    three_four_day,
    six_day_more,
  } = req.body;
  try {
    let cycle = await Cycle.findOne({ name });
    if (cycle) {
      return res.status(400).json({
        msg: "cycle already exists",
      });
    }
    cycle = await Cycle.create(req.body);
    await cycle.save();
    res.send(cycle);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server Error");
  }
});

// @route    GET api/users
// @desc     Get a user
// @access   Public
router.get("/", (req, res) => {
  res.send("get a User");
});

module.exports = router;
