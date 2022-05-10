const express = require("express");
const path = require("path");
const packageJson = require("../package.json");

const app = express();
const port = process.env.PORT || 3000;

const appName = "acdi";

app.use(express.static(path.join(__dirname, "../_apps_", appName)));

app.get("/version", (req, res) => {
  res.send(packageJson.version);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
