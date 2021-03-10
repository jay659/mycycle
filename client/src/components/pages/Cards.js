import React from "react";

function Cards() {
  const myStyle = {
    width: "300px",
    height: "300px",
  };
  return (
    <>
      <div className="container-fluid ">
        <div className="row p-lr-50">
          <div className="col-4">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://black-bikes.com/wp-content/uploads/2016/12/handbrake-bike.jpg"
                      alt="Card img cap"
                    />
                    <div className="card-body mt-3">
                      <h5 className="card-title d-flex justify-content-center">
                        {" "}
                        Hero
                      </h5>
                      <p className="card-text d-flex justify-content-center">
                        500$
                      </p>
                      <div className="d-flex justify-content-center">
                        <a href="#" className="btn cycle-btn ">
                          Rent now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flip-card-back">
                  {" "}
                  <div className="card-body mt-3">
                    <h5
                      className="card-title d-flex justify-content-center"
                      style={{ color: "#fff" }}
                    >
                      {" "}
                      Hero
                    </h5>
                    <p className="card-text d-flex justify-content-center">
                      500$
                    </p>
                    <div className="d-flex justify-content-center">
                      <a href="#" className="btn cycle-btn ">
                        Rent now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 my-2 col-mg-6 col-12">
            <div className="card">
              <img
                className="card-img-top"
                src="https://black-bikes.com/wp-content/uploads/2016/12/handbrake-bike.jpg"
                alt="Card img cap"
              />
              <div className="card-body mt-3">
                <h5 className="card-title d-flex justify-content-center">
                  {" "}
                  Hero
                </h5>
                <p className="card-text d-flex justify-content-center">500$</p>
                <div className="d-flex justify-content-center">
                  <a href="#" className="btn cycle-btn ">
                    Rent now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
