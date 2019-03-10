const express = require("express");
const path = require("path");
const htmlRoutes = require("./app/routing/htmlRoutes.js");
// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

htmlRoutes(app, path);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
