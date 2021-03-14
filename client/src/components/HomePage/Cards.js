import React from "react";
import Aboutmain from "./Aboutmain";
import BenifitsOfCycle from "./BenifitsOfCycle";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <>
      <div className="container-fluid pt-50">
        <Aboutmain />
        {/* card section */}
        <div className="card-section mt-4" style={{ height: "auto" }}>
          <div className="row text-center">
            <h2 className="title-underline capitalize">
              best<span className="t-orange"> Ones</span>
            </h2>
          </div>
          <div className="row pt-50 ">
            <div className="col-lg-3 my-2 col-md-6 col-12">
              <div className="card homepage_card">
                <div className="card-front p-2">
                  <img
                    className="card-img-top img-fluid"
                    src="https://black-bikes.com/wp-content/uploads/2016/12/handbrake-bike.jpg"
                    alt="Card img cap"
                  />
                  <div className="card-body ">
                    <h5 className="card-title d-flex justify-content-center">
                      Hero
                    </h5>

                    <div className="d-flex justify-content-center">
                      <span class="starting">
                        Starting at <strong>€9,50</strong>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="text-center">
                    <table border="1">
                      <tbody>
                        <tr>
                          <td colSpan="2">
                            <h4 className="text-center">Prices</h4>
                          </td>
                        </tr>
                        <tr>
                          <td>3 hours</td>
                          <td>€ 6,50</td>
                        </tr>
                        <tr>
                          <td>24 hours</td>
                          <td>€ 9,00</td>
                        </tr>
                        <tr>
                          <td>2nd day</td>
                          <td>€ 7,50</td>
                        </tr>
                        <tr>
                          <td>3rd – 5th day</td>
                          <td>€ 6,00</td>
                        </tr>
                        <tr>
                          <td>6th day and up</td>
                          <td>€ 4,50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="d-flex justify-content-center ">
                    <Link to="/detailview">
                      <a className="cycle-btn" style={{ width: "120px" }}>
                        book now
                      </a>
                    </Link>
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
