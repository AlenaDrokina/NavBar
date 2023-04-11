import React from "react";
import "./NavBar.css";

const NavBar = ({ mode }) => {
  return (
    <nav>
      <ul class={"nav " + mode}>
        <li class="nav-item">
          <a class="nav-link text-dark" href="/">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">
            About &#x25BC;
          </a>
          <div class="nav-unfold">
            <ul>
              <li>
                <a href="/about/history" class="nav-link text-dark">
                  History
                </a>
              </li>
              <li>
                <a href="/about/mission" class="nav-link text-dark">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="/about/team" class="nav-link text-dark">
                  Team
                </a>
              </li>
              <li>
                <a href="/about/team" class="nav-link text-dark">
                  Our Work
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
