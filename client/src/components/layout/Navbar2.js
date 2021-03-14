import React from "react";
import logo from "../files/images/mybyc_logo.png";

export default function Navbar2() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        {/* <a className="navbar-brand" href="#">
          Navbar
        </a> */}
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
              <a className="nav-link font-large hovered" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-large hovered" href="#">
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link font-large hovered" href="#">
                Booking
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div className="text-center ">
              <button
                type="submit"
                className="cycle-btn"
                style={{ width: "100px" }}
              >
                Sign Up
              </button>
            </div>
            <div className="text-center mx-3 ">
              <button
                type="submit"
                className="cycle-btn"
                style={{ width: "100px" }}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}
