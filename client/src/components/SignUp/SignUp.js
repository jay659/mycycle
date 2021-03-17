import React, { useContext } from "react";
import UserContext from "../../context/User/UserContext";
import Alert from "../Layout/Alert";

export default function SignUp() {
  const userContext = useContext(UserContext);

  return (
    <>
      <div className="login-form">
        <div>
          {/* <Alert /> */}
          <form method="post">
            <h1 Name="text-center">Sign Up</h1>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                required="required"
              />
            </div>
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
                className="btn cycle-btn"
                style={{ width: "160px" }}
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center">
            <a href="#" className="t-blue font-weight-bold">
              Sign In here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
