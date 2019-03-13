const friends = require("../data/friends");

const apiRoutes = app => {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log("new friend: ", newFriend);
    const differences = [];
    friends.forEach(item => {
      console.log(item.name);
      differences.push(
        item.scores
          .map((x, i) => {
            return Math.abs(x - newFriend.scores[i]);
          })
          .reduce((x, y) => x + y)
      );
    });
    const match = differences.indexOf(Math.min(...differences));
    console.log(differences, match);
    friends.push(newFriend);
    res.json(friends[match]);
  });
};

module.exports = apiRoutes;
