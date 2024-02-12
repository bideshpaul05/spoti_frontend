import React from "react";
import { Link } from "react-router-dom";
import google from "../images/google.png";
import "./pages.scss";
function Login() {
  return (
    <div className="login">
       
      <div className="container">
        <div className="header">
        Login to Spotify
        </div>
        <button className="google">
          {" "}
          Login With Google <img src={google} alt="" />{" "}
        </button>
        or
        <div className="form">
         
          <input
            type="email"
            name=""
            id=""
            placeholder="email@example.com"
            required
          />
          <input type="password" placeholder="Password" required />

          <button type="submit" id="submit">
            <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
            Login
            </Link>
          </button>
          <p className="errormsg">Error</p>
          <p>
            Don't have an account? <Link to="/register">Sign up for Spotify</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
