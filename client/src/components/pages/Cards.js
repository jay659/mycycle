import React from "react";
import Aboutmain from "./Aboutmain";
import BenifitsOfCycle from './BenifitsOfCycle';

function Cards() {
  return (
    <>
      <div className="container-fluid pt-50">
       <Aboutmain />
        {/* card section */}
        <div className="card-section mt-4">
          <div className="row text-center">
            <h2 className="title-underline capitalize">
              best<span className="t-orange"> Ones</span>
            </h2>
          </div>
          <div className="row pt-50 ">
            <div className="col-lg-3 my-2 col-mg-6 col-12">
              <div className="card homepage_card">
                <div className="card-front">
                  <img
                    className="card-img-top"
                    src="https://black-bikes.com/wp-content/uploads/2016/12/handbrake-bike.jpg"
                    alt="Card img cap"
                  />
                  <div className="card-body mt-5">
                    <h5 className="card-title d-flex justify-content-center">
                      {" "}
                      Hero
                    </h5>
                    <p className="card-text d-flex justify-content-center my-4">
                      500$
                    </p>
                    <div className="d-flex justify-content-center">
                      <a href="#" className="btn cycle-btn ">
                        Rent now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-back">
                
                 <div className="text-center">
                   
                    <table >
                      <tr>
                            <h3>price</h3>
                     
                              <h3>rent</h3>
                      </tr>
                      <tr>
                      <td>
                            <p> 3Hours</p>
                      </td>
                      <td>
                              <p>Rs.50</p>
                      </td>
                      </tr>
                      <tr>
                      <td>
                            <p> 3Hours</p>
                      </td>
                      <td>
                              <p>Rs.50</p>
                      </td>
                      </tr>
                    </table>
                 </div>
                  <div className="d-flex justify-content-center mt-4">
                  <a className="btn cycle-btn" href="#" style={{ width: "140px" }} >
                    book now
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BenifitsOfCycle />
      </div>
    </>
  );
}

export default Cards;
