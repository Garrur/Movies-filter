const mongoose = require('mongoose');
// Define a schema 
const movieSchema = new mongoose.Schema({
    movietitle: String,
    imdbmovieid: String,
    movielanguages: [String],
    moviecountries: [String],
    moviemainphotos: [String],
    moviegenres: [String]
  });
  
  // Define a model based on the schema
  const Movie = mongoose.model('data', movieSchema);

  module.exports = Movie;