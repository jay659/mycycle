import Form from "../Layout/Form";
import React, { useRef, useEffect } from "react";

import { gsap } from "gsap";
// import {scrollTrigger} from "gsap/scrollTrigger";

function DetailView() {
  // gsap.registerPlugin(scrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".text"),
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "ease",
        scrub: true,
      }
    );
    gsap.fromTo(
      element.querySelector(".image"),
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "ease",
        scrub: true,
      }
    );
  }, []);

  return (
    <>
      <div className="container-fluid " ref={ref}>
        <div className="row pt-50 ">
          <div className="col-12 mb-5">
            <div className="details-title text-center">
              <h2 className="title-underline">
                Detail <span className="t-orange">view</span>
              </h2>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-6">
            <div className="detail_view_image_wrapper">
              <img
                className="img-fluid image"
                src="https://black-bikes.com/wp-content/uploads/2016/12/handbrake-bike.jpg"
                alt="detail_view"
              ></img>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="detail_view_main_details">
              <p className="text">
                Renting a bike is by far the best way to discover the city of
                Ahmedabad. It's fun, healthy, sustainable and utterly functional
                in a compact city like Ahmedabad! MYBYK is the largest bike
                rental company in the city. We have over 2,000 bikes available
                in 14 different locations in Ahmedabad and are the only one that
                offers 'hop on drop off'. Ride like a local through this
                beautiful city on an original, Green.
              </p>
            </div>
          </div>
        </div>

        <div>
          <Form />
        </div>
      </div>
    </>
  );
}

export default DetailView;
