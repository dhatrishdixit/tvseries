import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg'



const API_URL = 'https://api.tvmaze.com/search/shows';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}?q=${title}`);
    const data = await response.json();
    setMovies(data);
  };

  useEffect(() => {
    if (searchTerm) {
      searchMovies(searchTerm);
    }
  }, [searchTerm]);

  return (
    <>
      <div className="app">
        <h1>BingeCentral</h1>
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                searchMovies(searchTerm);
              }
            }}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
