import React from "react";

export default function Signup2() {
  return (
    <>
      <div className="login-form">
        <form method="post">
          <h2 class="text-center">Log In</h2>

          <div class="form-group">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              required="required"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
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
              className="btn cycle-btn"
              style={{ width: "160px" }}
            >
              Log In
            </button>
          </div>
        </form>
        <p class="text-center">
          <a href="#">Sign In here</a>
        </p>
      </div>
    </>
  );
}
