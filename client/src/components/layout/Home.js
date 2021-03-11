import React from "react";
import Cards from "../pages/Cards";
import Maps from "./Maps";
// import Slider from "../layout/Slider";

export default function Home() {
  // const mystyle = {
  //   color: "white",
  //   backgroundColor: "DodgerBlue",
  //   padding: "10px",
  //   fontFamily: "Arial"
  // };
  return (
    <>
      <img className="banner-images" src="https://black-bikes.com/wp-content/uploads/2017/03/rental-bikes.jpg"  alt="main_image" />
      {/* <Slider /> */}
      <Cards />
      {/* <Maps /> */}
    </>
  );
}
