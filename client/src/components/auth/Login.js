import React from "react";
import Alert2 from "../layout/Alert2";
export default function Signup2() {
  return (
    <>
      <div className="login-form">
        <div>
          <Alert2 />
          <form method="post">
            <h1 className="text-center">Log In</h1>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required="required"
              />
            </div>
            {/* <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">
              Sign Up
            </button>
          </div> */}
            <div className="text-center ">
              <button
                type="submit"
                className="btn cycle-btn "
                style={{ width: "160px" }}
              >
                Log In
              </button>
            </div>
          </form>
          <p className="text-center t-blue">
            <a href="#" className="t-blue font-weight-bold">
              Sign In here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
