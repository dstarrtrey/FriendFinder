const friends = [
  {
    name: "Ahmed",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
  },
  {
    name: "Jacob Deming",
    photo:
      "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    scores: ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
  },
  {
    name: "Jeremiah Scanlon",
    photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
    scores: ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
  },
  {
    name: "Louis T. Delia",
    photo:
      "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
    scores: ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
  },
  {
    name: "Lou Ritter",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
    scores: ["4", "3", "4", "1", "5", "2", "5", "3", "1", "4"]
  },
  {
    name: "Jordan Biason",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
    scores: ["4", "4", "2", "3", "2", "2", "3", "2", "4", "5"]
  },
  {
    name: "coolkids",
    photo:
      "data:image/jpeg;base64,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",
    scores: ["2", "3", "1", "4", "3", "4", "3", "4", "5", "5"]
  },
  {
    name: "Jim",
    photo:
      "https://static1.squarespace.com/static/570fc81737013b89a2d93a05/t/5b63963daa4a9952cfa18795/1533253216674/Jeff+Goolsby+Preferred.jpg?format=500w",
    scores: ["2", "4", "2", "3", "4", "3", "2", "3", "4", "4"]
  },
  {
    name: "Beldar",
    photo:
      "http://images4.fanpop.com/image/photos/21400000/Beldar-positive-thinking-21405837-225-255.jpg",
    scores: ["5", "1", "3", "4", "1", "2", "2", "3", "3", "4"]
  },
  {
    name: "em",
    photo: "https://giphy.com/gifs/cute-kawaii-FSR9GX4X06Wty",
    scores: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
  },
  {
    name: "oc",
    photo:
      "https://www.jessannkirby.com/wp-content/uploads/2016/12/Jordaan-Amsterdam-Travel-Guide-Photo-Diary-Jess-Ann-Kirby-Craig-Mackay-Photography-10.jpg",
    scores: ["5", "3", "3", "5", "3", "5", "4", "5", "5", "4"]
  }
];

module.exports = friends;
