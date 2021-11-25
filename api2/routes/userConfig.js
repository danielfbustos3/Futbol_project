const express = require("express");
const router = express.Router();
const axios = require("axios");
const { checkAuth } = require("../middlewares/authentication.js");

// models

import UserConfig from "../models/userConfig";

//api2

router.get("/userConfig", checkAuth, async (req, res) => {
  try {
    const userId = req.userData._id;

    var configs = await UserConfig.find({ userId: userId });

    configs = JSON.parse(JSON.stringify(devices));

    const toSend = {
      status: "success",
      data: devices,
    };

    return res.status(200).json(toSend);
  } catch (err) {
    console.log("error getting configs", err);
    console.log(err);

    const toSend = {
      status: "error",
      error: err,
    };

    return res.status(500).json(toSend);
  }
});
