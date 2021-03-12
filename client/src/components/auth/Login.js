import React from "react";
import Alert from "../layout/Alert"
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div>
        <Alert />

        <div className="w-300 bg-white p-8 shadow-lg ring-1 ring-black ring-opacity-5">
          <h3 className="title text-center">Sign in to your account</h3>
          <form
            // onSubmit={LoginSubmitted}
            method="post"
          >
            <input type="hidden" name="remember" value="true" />
            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="custom-input"
                placeholder="Email address"
              />
              {/* <p className="error-msg">{emailMessage}</p> */}
            </div>
            <div className="mb-4">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                //   value={password}
                //   onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="custom-input"
                placeholder="Password"
              />
              {/* <p className="error-msg">{passwordMessage}</p> */}
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="custom-check"
                />
                <label
                  htmlFor="remember_me"
                  className="cursor-pointer ml-2 text-sm"
                >
                  Remember me
                </label>
              </div>
              {/* <Link href="#"> */}
              <span className="text-sm font-medium text-blue-500 hover:text-blue-400 cursor-pointer">
                Forgot your password?
              </span>
              {/* </Link> */}
            </div>
            <div className="text-center ">
              <button
                type="submit"
                className="btn cycle-btn"
                style={{ width: "160px" }}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
