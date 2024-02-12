import React, { useState } from "react";
import spotify from "../images/spotify.png";
import { Link } from "react-router-dom";
import './utils.scss'
import menu from '../images/menu.png'

function Nav() {
  const [slide, setslide] = useState(false);
  return (
    <div className="nav">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={spotify} alt="" />
          </Link>
        </div>
        <div className="links" style={{left:slide?"0":"-1999px"}} >
          <Link className="link">
            <h6>About</h6>
          </Link>
          <Link className="link">
            <h6>Something</h6>
          </Link>
          <span>john doe</span>
          
          <span >Logout</span>
        
          <Link className="link" to="/login">
            <h6>
            Login

            </h6>
          </Link>
         
        </div>
        <div className="hamburger" onClick={e=>setslide(!slide)}>
            <img src={menu} alt="" />
          </div>
      </div>
    </div>
  );
}

export default Nav;
