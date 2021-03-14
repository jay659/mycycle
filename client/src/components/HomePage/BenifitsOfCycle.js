import React from "react";

function BenifitsOfCycle() {
  return (
    <>
      <div className="row p-lr-50">
        <div className="col-12">
          <div className="text-center mb-5">
            <h2 className="title-underline capitalize ">
              Benifits Of<span className="t-orange"> Cycling</span>
            </h2>
          </div>
        </div>

        <div className="col-lg-7 col-md-12 col-12 order-2 d-flex justify-content-center">
          <ul className="style_ul ">
            <li>
              <p> increased cardiovascular fitness.</p>
            </li>

            <li>
              <p> increased muscle strength and flexibility.</p>
            </li>

            <li>
              <p>improved joint mobility.</p>
            </li>

            <li>
              <p>decreased stress levels.</p>
            </li>

            <li>
              <p>improved posture and coordination.</p>
            </li>
            <li>
              <p>strengthened bones.</p>
            </li>
            <li>
              <p>decreased body fat levels.</p>
            </li>
            <li>
              <p>prevention or management of disease.</p>
            </li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-12 col-12 order-1">
          <img
            className="img-fluid"
            src="https://mybyk.in/wp-content/uploads/2020/02/faq-cycle-image-min.png"
            alt="cycle"
          />
        </div>
      </div>
    </>
  );
}

export default BenifitsOfCycle;
