import React from "react";
import Cards from "../pages/Cards";

import banner from "../files/images/cycle_banner.jpg";
export default function Home() {
  return (
    <>
      <img className="banner-images" src={banner} alt="main_image" />
      <Cards />
    </>
  );
}
