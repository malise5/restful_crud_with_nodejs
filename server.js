const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 8000;

// '============Database Connection=======================

mongoose
  .connect(
    "mongodb+srv://malise:malise@cluster1.ulbt2t8.mongodb.net/Node-Api?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("====================================");
    console.log("Connection to the Database is established");
    console.log("====================================");

    // '============Server Port=======================
    app.listen(port, () => {
      console.log("====================================");
      console.log("Server Listening on port " + port);
      console.log("====================================");
    });
    // =============Server Port=======================
  })
  .catch((err) => {
    console.log(err);
  });
// '============Database Connection=======================

//ROUTES
const router = express.Router();

app.get("/api/v1/", (req, res) => {
  res.send("Hallo world");
});
