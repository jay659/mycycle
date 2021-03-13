import React, { useEffect } from "react";
import logo from "../files/images/mybyc_logo.png";

export default function Navbar() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener("click", () => {
      //Animate Links
      navLinks.classList.toggle("open");
      links.forEach((link) => {
        link.classList.toggle("fade");
      });

      //Hamburger Animation
      hamburger.classList.toggle("toggle");
    });
  }, []);

  return (
    <>
      <nav>
        {/* <div className="logo">
          <img src="logo.svg" alt="Logo Image" />
        </div> */}
        <div className="hamburger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="nav-links pt-3">
          <div className="nav_logo">
            <img src={logo} className="img-fluid" alt="manin" />
          </div>
          <div className="d-flex justify-content-center mobileview mt-2">
            <li className="nav_text mx-3  main_link ">
              <a href="/" className="t-orange ">
                Home
              </a>
            </li>
            <li className="nav_text mx-3 main_link">
              <a href="#" className="nav_text  ">
                About Us
              </a>
            </li>
            <li className="nav_text mx-3 main_link">
              <a href="#" className="nav_text  ">
                Contact Us
              </a>
            </li>
            {/* <li className="nav_text mx-3 mobile_view_text Capitalize">
              <a href="/login">Sign In</a>
            </li>
            <li className="nav_text mx-3 mobile_view_text Capitalize">
              <a href="/signup">Sign up</a>
            </li> */}
          </div>
          <div className="d-flex justify-content-between ">
            <li className=" ">
              <a href="/login" className="btn cycle-btn mobile_view_none">
                Sign In
              </a>
            </li>
            <li className="mx-4 ">
              <a href="/signup" className="btn cycle-btn mobile_view_none">
                Sign Up
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}
