const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");

// @route    POST api/users
// @desc     Register a user
// @access   Public
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        msg: "User already exists",
      });
    }

    user = await User.create(req.body);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
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
