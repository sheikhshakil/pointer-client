import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <div>
      <div id="home-top">
        <div className="container section">
          <div className="homeRow">
            <div className="col-md-9 text-center">
              <p>Your one stop business management solution</p>
              <Link
                to="register"
                className="btn btn-outline-warning text-dark mt-5"
              >
                <i className="bi bi-arrow-right-circle-fill"></i> Get started today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
