import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://movies-filter-zmla.onrender.com/');
        setMovies(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            <h2>{movie.movietitle}</h2>
            <img src={movie.moviemainphotos[0]} alt={movie.movietitle} style={{ width: '200px', height: '300px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
