import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import endpoint from "../../server/address";
import Loading from "../loadingComponent/Loading";

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setformValues] = useState({});

  const handleInputChanges = () => {
    //settings input values to state
    let formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    setformValues(formData);
  };

  //submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    //resetting form input errors
    setFormErrors({});

    //packing the form data
    let data = {};
    data.name = event.target.name.value;
    data.email = event.target.email.value;
    data.password = event.target.password.value;

    //sending request to server endpoint to register the user
    axios
      .post(endpoint + "register", data)
      .then((res) => {
        //reg success
        setIsLoading(false);

        toast.success(res.data, {
          autoClose: 7000,
        });
      })
      .catch((err) => {
        setIsLoading(false);

        //if server sends error response
        if (err.response) {
          //if there are input validation errors
          if (err.response.status === 400) {
            setFormErrors(err.response.data);
          } else {
            //if other error happends regarding firebase
            toast.error(err.response.data, {
              autoClose: 7000,
            });
          }
        } else {
          //if pointer server connection fails
          toast.error("Network error! Please check your connection.", {
            autoClose: 7000,
          });
        }
        console.log(err);
      });
  };

  const form = (
    <>
      <div className="container section">
        <div className="card col-md-7 p-3 mx-auto">
          <div className="card-header text-center">
            <i className="bi bi-person-square form-title-icon text-warning"></i>
            <h4>Register an account</h4>
          </div>
          <div className="card-body p-3">
            <form onSubmit={handleSubmit} autoComplete="off">
              {/* name input */}
              <div className="form-group mb-3">
                <label htmlFor="name" className="form-label">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  className={
                    formErrors.name ? "form-control is-invalid" : "my-input"
                  }
                  onChange={handleInputChanges}
                  value={formValues.name ? formValues.name : ""}
                  name="name"
                  required
                  placeholder="Enter your name"
                />
                {/* name input error msg */}
                {formErrors.name ? (
                  <div className="invalid-feedback">{formErrors.name}</div>
                ) : null}
              </div>

              {/* email input */}
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={
                    formErrors.email ? "form-control is-invalid" : "my-input"
                  }
                  value={formValues.email ? formValues.email : ""}
                  required
                  onChange={handleInputChanges}
                  placeholder="Enter your email"
                />

                {/* email input error msg */}
                {formErrors.email ? (
                  <div className="invalid-feedback">{formErrors.email}</div>
                ) : null}
              </div>

              {/* password input */}
              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  className={
                    formErrors.password ? "form-control is-invalid" : "my-input"
                  }
                  onChange={handleInputChanges}
                  value={formValues.password ? formValues.password : ""}
                  placeholder="Enter a strong password"
                />

                {/* password input error msg */}
                {formErrors.password ? (
                  <div className="invalid-feedback">{formErrors.password}</div>
                ) : null}
              </div>

              <div className="text-warning text-center text-up text-bold">
                <i className="bi bi-award"></i> Get 7 days Free Trial after
                registering!
              </div>

              {/* register btn */}
              <div className="text-center pt-3">
                <button
                  className="btn btn-outline-warning text-dark"
                  type="submit"
                >
                  <i className="bi bi-check-circle-fill"></i> Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );

  if (isLoading) {
    return <Loading isLoading={isLoading} loadingText={"Registering"} />;
  } else {
    return form;
  }
}

export default Register;
