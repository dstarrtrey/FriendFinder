const friends = require("../data/friends");

const apiRoutes = app => {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
};

module.exports = apiRoutes;
