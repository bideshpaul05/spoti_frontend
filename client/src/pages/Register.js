import React from "react";
import { Link } from "react-router-dom";
import google from "../images/google.png";
import "./pages.scss";
function Register() {
  return (
    <div className="register">
       
      <div className="container">
        <button className="google">
          {" "}
          Register With Google <img src={google} alt="" />{" "}
        </button>
        or
        <div className="form">
          <input type="text" placeholder="Username" required />
          <input
            type="email"
            name=""
            id=""
            placeholder="email@example.com"
            required
          />
          <input type="password" placeholder="Password" required />

          <button type="submit" id="submit">
            Register
          </button>
          <p className="errormsg">Error</p>
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
