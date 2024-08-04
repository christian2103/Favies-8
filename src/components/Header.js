import React from "react";  
import Search from "./Search";  

const Header = ({ title, onSearch }) => {  
  return (  
    
    <nav className="navBar container-fluid navbar navbar-expand-lg navbar-light">  
      <div className="container d-flex justify-content-between">  
        <a className="navbar-brand text-white" href="App.js">  
          {title}  
        </a>  
        <div className="d-flex justify-content-end align-items-center">  
          <Search search={onSearch} />  
        </div>  
      </div>  
    </nav>  
  );  
};  

export default Header;  