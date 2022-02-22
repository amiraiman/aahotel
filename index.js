const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 8080;
const leaflet_api_key = process.env.LEAFLET_API_KEY || "some key here pls";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { leaflet_api_key });
});

app.listen(port, () => {
  console.log("Listening on port", port);
});
