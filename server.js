const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

//ROUTES
const router = express.Router();

app.get("/api/v1/", (req, res) => {
  res.send("Hallo world");
});

// '============Server Port=======================
app.listen(port, () => {
  console.log("====================================");
  console.log("Server Listening on port " + port);
  console.log("====================================");
});
// =============Server Port=======================
