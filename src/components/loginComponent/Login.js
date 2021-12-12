import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import Loading from "../loadingComponent/Loading";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  //handle login form submission
  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoading(true);

    let data = {};
    data.email = event.target.email.value;
    data.password = event.target.password.value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCreds) => {
        setIsLoading(false);
        console.log(userCreds);
        toast.success("Login successful. Welcome " + userCreds.user.email, {
          autoClose: 7000,
        });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        toast.error(err.message, {
          autoClose: 7000,
        });
      });
  };
  const form = (
    <>
      <div className="container section">
        <div className="card col-md-7 p-3 mx-auto">
          <div className="card-header text-center">
            <i className="bi bi-person-circle form-title-icon text-warning"></i>
            <h4>Login to your account</h4>
          </div>
          <div className="card-body p-3">
            <form onSubmit={handleLogin} autoComplete="off">
              <div className="form-group mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="my-input"
                  required
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="my-input"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <i className="bi bi-lightbulb-fill text-warning"></i> Don't have
                an account?
                <NavLink exact to="/register" className="hint-link">
                  Register now
                </NavLink>
              </div>
              <div className="text-center pt-3">
                <button
                  type="submit"
                  className="btn btn-outline-warning text-dark"
                >
                  <i className="bi bi-arrow-right-circle-fill"></i> Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );

  if (isLoading) {
    return <Loading isLoading={isLoading} loadingText={"Authenticating"} />;
  } else {
    return form;
  }
}

export default Login;
