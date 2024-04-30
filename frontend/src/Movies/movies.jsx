import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";

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
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const filterMovies = movies.filter(
    (movie) =>
      movie.movietitle.toLowerCase().includes(search.toLowerCase()) &&
      (languageFilter === "" ||
        movie.movielanguages.includes(languageFilter)) &&
      (countryFilter === "" || movie.moviecountries.includes(countryFilter)) &&
      (genreFilter === "" || movie.moviegenres.includes(genreFilter))
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

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
    "Documentary",
  ];

  return (
    <div>
      
      
      <div className="bg-slate-500">
      <Navbar />
        <div className="flex flex-col md:flex-row items-center ml-8">
          <div className="pb-2 md:mr-4">
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </span>
              <input
                onChange={handleSearch}
                value={search}
                className="placeholder:italic placeholder-text-slate-400 block bg-white w-full sm:w-64 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm"
                placeholder="Search for movie..."
                type="text"
                name="search"
              />
            </label>
          </div>
          <div className="pb-2 md:mr-4">
            <label className="relative block">
              <span className="sr-only">Language</span>
              <select
                value={languageFilter}
                onChange={(e) => setLanguageFilter(e.target.value)}
                className="block bg-white border border-slate-300 rounded-md py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm"
              >
                <option value="">All Languages</option>
                {languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="pb-2 md:mr-4">
            <label className="relative block">
              <span className="sr-only">Country</span>
              <select
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
                className="block bg-white border border-slate-300 rounded-md py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm"
              >
                <option value="">All Countries</option>
                {countries.map((country) => (
                  <option
                   key={country} 
                   value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="pb-2">
            <label className="relative block">
              <span className="sr-only">Genre</span>
              <select
                value={genreFilter}
                onChange={(e) => setGenreFilter(e.target.value)}
                className="block bg-white border border-slate-300 rounded-md py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm"
              >
                <option value="">All Genres</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className=" bg-slate-300  ">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filterMovies.map((movie) => (
            <li key={movie._id}>
              <div className="shadow-2xl bg-white shadow-black border border-4 border-slate-500 rounded-2xl scale-75 cursor-pointer hover:scale-95" >
              <img
                
                src={movie.moviemainphotos[0]}
                alt={movie.movietitle}
                style={{ width: "100%", height: "100%" }}
              />
              
              <h2 className="font-bold text-2xl underline mt-2">{movie.movietitle}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
