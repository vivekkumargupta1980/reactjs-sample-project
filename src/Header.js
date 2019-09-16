import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./styles.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <NavLink to="/">Logo</NavLink>
          </div>
          <div className="navbar">
            <ul>
              <li>
                <li>
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
