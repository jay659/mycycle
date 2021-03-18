import React from "react";
import Alert from "../layout/Alert"

export default function SignIn() {
  return (
    <>
      <div className="login-form">
        <div>
          <Alert />
          <form method="post">
            <h1 className="text-center">Sign In</h1>

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
            <div className="text-center ">
              <button
                type="submit"
                className="btn cycle-btn "
                style={{ width: "160px" }}
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="text-center t-blue">
            <a href="#" className="t-blue font-weight-bold">
              Sign Up here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
