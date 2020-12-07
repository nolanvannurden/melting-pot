import './Header.css'
import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import {connect} from "react-redux";
import {logoutUser} from '../../redux/reducer';




const Header = (props) => {
  return (

    
    <nav className="nav-header">
      <h1>Welcome to The Melting Pot!</h1>
      <div className="nav-links">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/create_recipe">Recipes</Link>
        </div>
        <div>
          <Link to="/feed">Post a Recipe</Link>
        </div>
        <div>
           <button className="logout" onClick={ () => {
          props.logoutUser(); //front-end
          axios.post('/auth/logout') //back-end
          .then(() => props.history.push("/"))
        } }>Logout</button>
        </div>
      </div>
    </nav>
  );
};



export default  connect(null, {logoutUser})(withRouter(Header));