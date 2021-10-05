const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

// app.use("/api", require("./routes/players.js"));

module.exports = app;

app.listen(3001, () => {
  console.log("API server listening on port 3001");
});

const mongoHost = "localhost";
const mongoPort = "27017";
const mongoDatabase = "fifaplayersdata";

var uri = "mongodb://" + mongoHost + ":" + mongoPort + "/" + mongoDatabase;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose.connect(uri, options).then(
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
