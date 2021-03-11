import React, { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener("click", () => {
      console.log();
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
          <div className="d-flex justify-content-center mobileview">
            <li className="nav_text mx-3 Capitalize">
              <a href="/">Home</a> 
            </li>
            <li className="nav_text mx-3">
              <a href="#" className="nav_text Capitalize">About Us</a>
            </li>
            <li className="nav_text mx-3">
              <a href="#" className="nav_text Capitalize">Contact Us</a>
            </li>
            <li className="nav_text mx-3 mobile_view_text Capitalize">
            <a href="/login" >
                Sign In
              </a>
            </li>
            <li className="nav_text mx-3 mobile_view_text Capitalize">
            <a href="/signup" >
                Sign up
              </a>
            </li>
          </div>
          <div className="d-flex justify-content-between mobile_view_none">
            <li className="mx-3">
              <a href="/login" className="btn cycle-btn ">
                Sign In
              </a>
            </li>
            <li className="mr-1">
              <a href="/signup" className="btn cycle-btn ">
                Sign in
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}
