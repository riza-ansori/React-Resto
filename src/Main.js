import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Menus from "./Menus";
import Contact from "./Contact";
import Team from "./Team";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="nav">
          <div className="container">
            <div className="d-flex align-items-center">
              <h1 className="title"><NavLink to="/">Resto</NavLink></h1>
              <ul className="header d-flex align-items-center justify-content-end">
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/menus">Menu</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/team">Team</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/menus" component={Menus}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/team" component={Team}/>
        </div>
        <div className="footer text-center py-3">
          <p className="copyright m-0"><a href="https://www.linkedin.com/in/ansori-riza-yogi-saputro-655004137/">AnsoriRiza © 2019</a></p>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;