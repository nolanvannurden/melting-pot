import './Header.css'
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav-header">
      <h1>Welcome to, The Melting Pot!</h1>
      <div className="nav-links">
        <div>
          <Link to="/create_recipe">Recipes</Link>
        </div>
        <div>
          <Link to="/feed">Post a Recipe</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;