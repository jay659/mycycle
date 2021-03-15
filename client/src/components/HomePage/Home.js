import React from "react";
import Cards from "./Cards";
import banner from "../Images/cycle_banner.jpg";

export default function Home() {
  return (
    <>
      <img className="banner-images" src={banner} alt="main_image" />
      <Cards />
    </>
  );
}
