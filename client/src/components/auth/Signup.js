import React from "react";
import Alert from "../layout/Alert";

export default function Signup() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center ">
        <div >
          <Alert />
          <div className="w-300 bg-white p-8 shadow-lg ring-opacity-5">
            <h3 className="title">Let's get you set up</h3>
            <form
              //   onSubmit={signUpForm}
              method="post"
            >
              <input type="hidden" name="remember" value="true" />
              {/* <p className="error-msg text-center mb-4">{errorMsg}</p> */}
              <div className="mb-4">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  autoComplete="off"
                  className="custom-input"
                  placeholder="Name"
                />
                {/* <p className="error-msg">{nameMessage}</p> */}
              </div>
              <div className="mb-4">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  className="custom-input"
                  placeholder="Email"
                />
                {/* <p className="error-msg">{emailMessage}</p> */}
              </div>
              <div className="mb-4">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                  className="custom-input"
                  placeholder="Password"
                />
                {/* <p className="error-msg">{passwordMessage}</p> */}
              </div>

              <p
                className="mb-4 text-sm text-center"
                style={{ overflowY: "hidden" }}
              >
                Already have an account, Sign In{" "}
                {/* <Link href="/signin">
                <span className="font-semibold text-blue-500 hover:text-blue-400 cursor-pointer">
                  Here
                </span>
              </Link> */}
                ?
              </p>
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
          </div>
        </div>
      </div>
    </>
  );
}
