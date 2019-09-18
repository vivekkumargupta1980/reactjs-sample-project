import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Login from "./Login";
import SignUp from "./SignUp";
import Footer from "./Footer";
import Home from "./Home";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="wrapper">
            <Switch>
              <Route path={"/"} exact component={Login} />
              <Route path={"/signup"} exact component={SignUp} />
              <Route path={"/home"} exact component={Home} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
