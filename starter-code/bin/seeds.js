const celebrity_list = [
  {
    name: "Brad Pitt",
    occupation: "Actor",
    catchPhrase: "popop"
  },
  {
    name: "Angelina Jolie",
    occupation: "Actrice",
    catchPhrase: "Wat"
  },
  {
    name: "Micheal Jordan",
    occupation: "Basketballer",
    catchPhrase: "Yeah"
  }
];

Celebrity.create(celebrity_list, err => {
  if (err) {
    throw err;
  }
  console.log("Celebrities are created!");
});
