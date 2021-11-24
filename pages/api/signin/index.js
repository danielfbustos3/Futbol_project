const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

import User from "models/user";
import dbConnect from "utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      const email = req.body.email;
      const password = req.body.password;

      var user = await User.findOne({ email: email });

      //if no email
      if (!user) {
        const toSend = {
          status: "error",
          error: "Invalid Credentials",
        };
        return res.status(401).json(toSend);
      }

      //if email and pass ok
      if (bcrypt.compareSync(password, user.password)) {
        user.set("password", undefined, { strict: false });

        const token = jwt.sign({ userData: user }, "securePasswordHere", {
          //expiresIn: 60 * 60 * 24 * 30,
          expiresIn: 30,
        });

        const toSend = {
          status: "success",
          token: token,
          userData: user,
        };

        return res.json(toSend);
      } else {
        const toSend = {
          status: "error",
          error: "Invalid Credentials",
        };
        return res.status(401).json(toSend);
      }
      break;

    default:
      res.status(500).json({ success: false });
      break;
  }
};
