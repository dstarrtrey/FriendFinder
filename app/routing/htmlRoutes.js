const htmlRoutes = (app, path) => {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  app.get("/:query?", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};

module.exports = htmlRoutes;
