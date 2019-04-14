const mongoose = require("mongoose");
const celebritySchema = mongoose.celebritySchema;
const Celebrity = require("../models/celebrity");

const Shema = new celebritySchema({
  name: String,
  occupation: String,
  catchPhrase: String
});
const Celebrity = mongoose.model("Celebrity", Celebrity);
module.exports = Celebrity;

celebrity
  .findOne({ _id: req.params.id })
  .then(celebrity => {
    res.render("celebrity-details.hbs", { celebrity });
  })
  .catch(err => {
    console.log(err);
  });
