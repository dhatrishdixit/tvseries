import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';  
// const handleclick = () => {
        
//   }
const MovieCard = ({ movie }) => {
  const rating = movie.show.rating?.average || 'N/A';
  const navigate = useNavigate();
  return (
    <div className="movie" onClick={()=>navigate(`${movie.show.externals.thetvdb}`)}>
    
      <div>
        <p>{rating}</p>
      </div>
      <div>
        <img
          src={movie.show.image?.medium || 'https://via.placeholder.com/400'}
          alt=""
        />
      </div>
      <div>
        <span>{movie.show.language}</span>
        <h3>{movie.show.name}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
