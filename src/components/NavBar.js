import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  ">
      <div className="container">
        <Link to="/" className="navbar-brand">
          My Website
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <Link className="dropdown-item" to="/about/history">
                    History
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about/team">
                    Team
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about/mission">
                    Mission
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
