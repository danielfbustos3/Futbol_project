//requires
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

//instances
const app = express();

//express config
app.use(morgan("tiny"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

//express routes
app.use("/api2", require("./routes/userconfigs.js"));

module.exports = app;

//listener
app.listen(3001, () => {
  console.log("API server listening on port 3001");
});

//Mongo Connection

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("\n");
      console.log("*******************************");
      console.log("✔ Mongo Successfully Connected!");
      console.log("*******************************");
      console.log("\n");
    },
    (err) => {
      console.log("\n");
      console.log("*******************************");
      console.log("    Mongo Connection Failed    ");
      console.log("*******************************");
      console.log("\n");
      console.log(err);
    }
  );
