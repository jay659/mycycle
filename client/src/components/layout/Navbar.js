import React, { useEffect } from "react";

export default function Navbar() {
  useEffect(()=>{
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    
    hamburger.addEventListener('click', ()=>{
        console.log()
       //Animate Links
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
    
        //Hamburger Animation
        hamburger.classList.toggle("toggle");
    });
  
  },[])
   
  
  
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
        <ul className="nav-links">
          <div className="d-flex justify-content-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </div>
          <div className="d-flex justify-content-between">
            <li className="mx-3">
                   <a href="#" className="btn cycle-btn ">
                       Register
                  </a>
            </li>
            <li className="mr-1">
            <a href="#" className="btn cycle-btn ">
                    Sign in
                  </a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}
