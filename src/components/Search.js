import React, { useState } from 'react';  

const Search = ({ search }) => {  
  const [query, setQuery] = useState('');  

  const handleInputChange = (e) => {  
    setQuery(e.target.value);  
  };  

  const handleSearch = (e) => {  
    e.preventDefault();  
    search(query);  
    setQuery('');  
  };  
  
  return (  
    <form className="d-flex" onSubmit={handleSearch}>  
      <input  
        className="form-control me-2"  
        type="text"  
        value={query}  
        onChange={handleInputChange}  
        placeholder="Search..."  
      />  
      <button className="btn btn-outline-light bg-black" type="submit">SEARCH</button>  
    </form>  
  );  
};  

export default Search;
