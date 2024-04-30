import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://movies-filter-zmla.onrender.com/"
        );
        setMovies(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const filterMovies = movies.filter(
    (movie) =>
      movie.movietitle.toLowerCase().includes(search.toLowerCase()) &&
      (languageFilter === "" || movie.movielanguages.includes(languageFilter)) &&
      (countryFilter === "" || movie.moviecountries.includes(countryFilter)) &&
      (genreFilter === "" || movie.moviegenres.includes(genreFilter))
  );

  // Get unique values for language, country, and genre
  const languages = [
    "Hindi",
    "Malayalam",
    "Kannada",
    "Tamil",
    "English",
    "Japanese",
    "Chinese",
    "Spanish",
    "Korean",
    "Telugu",
  ];
  const countries = [
    "Australia",
    "Canada",
    "Germany",
    "France",
    "United Kingdom",
    "Ireland",
    "India",
    "Norway",
    "United States",
  ];
  const genres = [
    "Action", 
    "Adventure", 
    "Fantasy", 
    "Sport", 
    "Comedy",
    "Drama",
    "Romance",
    "Thriller",
    "Horror",
    "Mystery",
    "Animation",
    "Sci-Fi",
    "Crime",
    "Biography",
    "Documentary"
  ];

  return (
    <div>
      <Navbar />
      <div>
        <h1>Movies</h1>
      </div>

      <div className="flex flex-col items-center mb-4 " >
        <div className="justify-center">
          <input
            className="rounded border border-blue-500 "
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="border border-black mb-4 border-4">
      <div className="grid grid-cols-8 gap-2">
        <div className="border mr-2 border-black">
          <label>Language:</label>
          <select
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
          >
            <option value="">All</option>
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
        <div className="border mr-2 border-black">
          <label>Country:</label>
          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
          >
            <option value="">All</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="border mr-2 border-black">
          <label>Genre:</label>
          <select
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
          >
            <option value="">All</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>
      </div>

      

      <div className=" border border-3 border-black rounded">
        <ul>
        <div className="grid grid-cols-4 gap-4">
          {filterMovies.map((movie) => (
            
            <li key={movie._id}>
              
              <img
                className="shadow-2xl border border-4 border-black rounded-xl"
                src={movie.moviemainphotos[0]}
                alt={movie.movietitle}
                style={{ width: "400px", height: "500px" }}
              />
              <h2 className="font-bold underline">{movie.movietitle}</h2>
            </li>
            
          ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Movies;
