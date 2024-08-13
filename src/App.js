import React, { useReducer, useEffect } from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";
import "./App.css";

const API_URL = 'https://www.omdbapi.com/?apikey=bb17e3e2';

console.log(API_URL);
const initialState = {
  movies: [],
  searchTerm: "man",
};

const reducer = (state, action) => {
  if (action.type === "SET_MOVIES") {
    return { ...state, movies: action.payload };
  } else if (action.type === "SET_SEARCH_TERM") {
    return { ...state, searchTerm: action.payload };
  } else {
    return state;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchMovies(state.searchTerm);
  }, [state.searchTerm]);

  const fetchMovies = async (query) => {  
  try {  
    const response = await fetch(`${API_URL}&s=${query}`);  
    if (!response.ok) throw new Error('Network response was not ok');  
    const data = await response.json();  
    dispatch({ type: "SET_MOVIES", payload: data.Search || [] });  
  } catch (error) {  
    console.error('Fetch error:', error);  
  }  
};

  const handleSearch = (query) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: query });
    fetchMovies(query);
  };

  return (
    <div className="row bg-gradient">
      <div>
        <Header title="Favies 8" onSearch={handleSearch} />
      </div>
      
      <div className="row bodyWeb">
        {state.movies &&
          state.movies.map((movie) => (
            <div className="col-md-3 d-flex justify-content-center mb-4 p-3"
              key={movie.imdbID}
            >
              <Movie movie={movie} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
