import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import "./Nav.css";

function Nav() {
  const [menuOn, setMenuOn] = useState(false);

  window.addEventListener("resize", () => {
    let menu = document.getElementById("nav-menu");
    if (window.innerWidth >= 992 && menu.style.display === "none") {
      menu.style.display = "block";
      menu.style.animation = "showNav 350ms ease-in-out both"
    }
    if (window.innerWidth < 992 && menu.style.display === "block") {
      menu.style.display = "none";
    }
  });

  const handleClick = () => {
    if (window.innerWidth < 992) {
      let menu = document.getElementById("nav-menu");
      if (menu.style.display === "block") {
        menu.style.display = "none";
        menu.style.animation = "hideNav 350ms ease-in-out both"
        setMenuOn(false);
      } else {
        menu.style.display = "block";
        menu.style.animation = "showNav 350ms ease-in-out both"
        setMenuOn(true);
      }
    }
  };

  return (
    <nav className="py-3">
      <div className="container" id="nav">
        <div>
          <NavLink className="navbar-brand" to="/">
            Pointer
          </NavLink>
        </div>

        {/* nav menu */}
        <div id="nav-menu">
          <ul id="nav-menu-list">
            <li>
              <NavLink
                exact
                activeClassName="active-link"
                onClick={handleClick}
                to="/"
              >
                <i className="bi bi-house-door-fill"></i> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active-link"
                onClick={handleClick}
                to="/features"
              >
                <i className="bi bi-hourglass-bottom"></i> Features
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active-link"
                onClick={handleClick}
                to="/pricing"
              >
                <i className="bi bi-cash-coin"></i> Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active-link"
                onClick={handleClick}
                to="/login"
              >
                <i className="bi bi-person-circle"></i> Login
              </NavLink>
            </li>
          </ul>

          {/* small device try button */}
          <div className="d-lg-none d-xl-none d-xxl-none text-center">
            <Link
              onClick={handleClick}
              className="btn btn-outline-warning text-dark d-lg-none d-xl-none d-xxl-none"
              to="/register"
            >
              <i className="bi bi-award"></i> Try for free
            </Link>
          </div>
        </div>

        {/* try button */}
        <div className="d-none d-lg-block d-xl-block d-xxl-block">
          <Link className="btn btn-outline-warning text-dark" to="/register">
            <i className="bi bi-award"></i> Try for free
          </Link>
        </div>

        {/* nav toggler button */}
        <div className="d-lg-none d-xl-none d-xxl-none">
          <button
            className="btn btn-outline-light text-dark"
            type="button"
            onClick={handleClick}
          >
            <i className={menuOn ? "bi bi-x-lg" : "bi bi-list"}></i> Menu
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
