const bcrypt = require("bcrypt");

import User from "models/user";
import dbConnect from "utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const salt = bcrypt.genSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(password, salt);

        const newUser = {
          name: name,
          email: email,
          password: encryptedPassword,
        };

        console.log(newUser);

        var user = await User.create(newUser);

        console.log(user);

        const toSend = {
          status: "success",
        };

        res.status(200).json(toSend);
      } catch (error) {
        console.log("ERROR - REGISTER ENDPOINT");
        console.log(error);

        const toSend = {
          status: "error",
          error: error,
        };

        res.status(500).json(toSend);
      }
      break;

    default:
      res.status(500).json({ success: false });
      break;
  }
};
