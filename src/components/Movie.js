import React from 'react';  
 

const Movie = ({ movie }) => {  
  return (  
    <div className="card movie-card" style={{ width: '250px', margin: '20px' }}>  
      <img  
        src={movie.Poster !== "N/A" ? movie.Poster : "/path/to/default-image.jpg"}  
        alt={movie.Title}  
        className="card-img-top movie-poster"  
      />  
      <div className="card-body">  
        <h5 className="card-title movie-title">{movie.Title}</h5>  
      </div>  
    </div>  
  );  
};  

export default Movie;