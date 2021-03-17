import React from "react";
import Aboutmain from "./Aboutmain";
import BenifitsOfCycle from "./BenifitsOfCycle";
import { Link } from "react-router-dom";

function Cards() {
  let mystyle = {
    width: "254px",
    height: "176px",
    objectFit: "cover",
  };
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
            {/* 1 card */}
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
                      Common Cycle
                    </h5>

                    <div className="d-flex justify-content-center">
                      <span class="starting">
                        Starting at <strong>Rs.20</strong>
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
                          <td>Rs.20</td>
                        </tr>
                        <tr>
                          <td>24 hours</td>
                          <td>Rs.50</td>
                        </tr>
                        <tr>
                          <td>2nd day</td>
                          <td>Rs.100</td>
                        </tr>
                        <tr>
                          <td>3rd – 5th day</td>
                          <td>Rs.200</td>
                        </tr>
                        <tr>
                          <td>6th day and up</td>
                          <td>Rs.350</td>
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

            {/* 2 card */}
            <div className="col-lg-3 my-2 col-md-6 col-12">
              <div className="card homepage_card">
                <div className="card-front p-2">
                  <img
                    className="card-img-top img-fluid"
                    src="https://contents.mediadecathlon.com/p1831242/83d238c7e97e8c24b2ce905a6adc5ca3/p1831242.jpg?f=650x650&format=auto"
                    alt="Card img cap"
                    style={mystyle}
                  />
                  <div className="card-body ">
                    <h5 className="card-title d-flex justify-content-center">
                      High Frame Blue
                    </h5>

                    <div className="d-flex justify-content-center">
                      <span class="starting">
                        Starting at <strong>Rs.20</strong>
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
                          <td>Rs.20</td>
                        </tr>
                        <tr>
                          <td>24 hours</td>
                          <td>Rs.50</td>
                        </tr>
                        <tr>
                          <td>2nd day</td>
                          <td>Rs.100</td>
                        </tr>
                        <tr>
                          <td>3rd – 5th day</td>
                          <td>Rs.200</td>
                        </tr>
                        <tr>
                          <td>6th day and up</td>
                          <td>Rs.350</td>
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

            {/* 3 card */}
            <div className="col-lg-3 my-2 col-md-6 col-12">
              <div className="card homepage_card">
                <div className="card-front p-2">
                  <img
                    style={mystyle}
                    className="card-img-top img-fluid"
                    src="https://contents.mediadecathlon.com/p1551070/5dee103332410ff8c64d21c4a59e1d7f/p1551070.jpg?f=650x650&format=auto"
                    alt="Card img cap"
                  />
                  <div className="card-body ">
                    <h5 className="card-title d-flex justify-content-center">
                      Hero Kids Cycle
                    </h5>

                    <div className="d-flex justify-content-center">
                      <span class="starting">
                        Starting at <strong>Rs.15</strong>
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
                          <td>Rs.15</td>
                        </tr>
                        <tr>
                          <td>24 hours</td>
                          <td>Rs.40</td>
                        </tr>
                        <tr>
                          <td>2nd day</td>
                          <td>Rs.80</td>
                        </tr>
                        <tr>
                          <td>3rd – 5th day</td>
                          <td>Rs.150</td>
                        </tr>
                        <tr>
                          <td>6th day and up</td>
                          <td>Rs.300</td>
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
            {/* 4 card */}
            <div className="col-lg-3 my-2 col-md-6 col-12">
              <div className="card homepage_card">
                <div className="card-front p-2">
                  <img
                    className="card-img-top img-fluid"
                    src="https://contents.mediadecathlon.com/p1836408/5b26aee1fdfaf2811e53dc970c1fb13a/p1836408.jpg?f=650x650&format=auto"
                    alt="Card img cap"
                    style={mystyle}
                  />
                  <div className="card-body ">
                    <h5 className="card-title d-flex justify-content-center">
                      Rockrider MTB
                    </h5>

                    <div className="d-flex justify-content-center">
                      <span class="starting">
                        Starting at <strong>Rs.25</strong>
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
                          <td>Rs.15</td>
                        </tr>
                        <tr>
                          <td>24 hours</td>
                          <td>Rs.40</td>
                        </tr>
                        <tr>
                          <td>2nd day</td>
                          <td>Rs.80</td>
                        </tr>
                        <tr>
                          <td>3rd – 5th day</td>
                          <td>Rs.150</td>
                        </tr>
                        <tr>
                          <td>6th day and up</td>
                          <td>Rs.300</td>
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
