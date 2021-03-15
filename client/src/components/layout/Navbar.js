import React from "react";
import logo from "../Images/mybyc_logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <img src={logo} className="img-fluid mr-5" alt="manin" width="50px" />

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="/" className="nav-link font-large hovered" href="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/aboutus"
                className="nav-link font-large hovered"
                href="#"
              >
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="bookdetails"
                className="nav-link font-large hovered"
                href="#"
              >
                Book Details
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div className="text-center ">
              <Link to="/signup">
                <button
                  type="submit"
                  className="cycle-btn"
                  style={{ width: "100px" }}
                >
                  Sign Up
                </button>
              </Link>
            </div>
            <div className="text-center mx-3 ">
              <Link to="/signin">
                <button
                  type="submit"
                  className="cycle-btn"
                  style={{ width: "100px" }}
                >
                  Sign In
                </button>
              </Link>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}
