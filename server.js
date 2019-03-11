const express = require("express");
const path = require("path");
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");
// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routing for HTML files and API outputs respectively
htmlRoutes(app, path);
apiRoutes(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
