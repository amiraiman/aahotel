const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, "localhost", () => {
  console.log("Listening on port", port);
});