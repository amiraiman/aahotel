const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, "localhost", () => {
  console.log("Listening on port", port);
});
