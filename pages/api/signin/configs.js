const jwt = require("jsonwebtoken");

import UserConfig from "models/userConfig";
import dbConnect from "utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const { method, headers } = req;
  switch (method) {
    case "GET":
      console.log(headers.token);
      jwt.verify(headers.token, "securePasswordHere", (err, decoded) => {
        if (err) {
          console.log("esta vaina no leyo mk");
          return res.status(401).json({
            status: "error",
            error: err,
          });
        }

        var userData = decoded.userData;

        console.log(userData);
        console.log("tamos activos");

        return "si marica si. se verificó.";
      });

      break;

    default:
      res.status(500).json({ success: false });
      break;
  }
};
