const Movie = require('../model/schema');

exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.find({}).limit(100);
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.addMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
