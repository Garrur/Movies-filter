import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const[search, setSearch] = useState('')

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

  const filterMovies = movies.filter(movie => movie.movietitle.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <Navbar />
      <div>
        <h1>Movies</h1>
      </div>

    <div>
    <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

      <div>
        <ul>
          {filterMovies.map((movie) => (
            <li key={movie._id}>
              <h2>{movie.movietitle}</h2>
              <img src={movie.moviemainphotos[0]} alt={movie.movietitle} style={{ width: '200px', height: '300px' }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
