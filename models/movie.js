const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  name: {type: String, required: true},
  occupation: String,
  catchphrase: String,
});


const Movie = mongoose.model("Movie", movieSchema);


module.exports = Movie;