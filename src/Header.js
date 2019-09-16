import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./images/React.js_logo_1174949.png";
import "./styles.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="navbar">
            <ul>
              <li>
                <li>
                  <li>
                    <NavLink
                      to="/signup"
                      exact
                      activeStyle={{ color: "#2a6496" }}
                    >
                      SignUp
                    </NavLink>
                  </li>
                  <NavLink to="/" exact activeStyle={{ color: "#2a6496" }}>
                    Login
                  </NavLink>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
