import React from "react";

export default function Signup() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 shadow-lg ring-1 ring-black ring-opacity-5">
          <h1 className="title">Let's get you set up</h1>
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

            <p className="mb-4 text-sm">
              Already have an account, Sign In{" "}
              {/* <Link href="/signin">
                <span className="font-semibold text-blue-500 hover:text-blue-400 cursor-pointer">
                  Here
                </span>
              </Link> */}
              ?
            </p>
            <button type="submit" className="btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
