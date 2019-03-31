import React, { Component } from "react";
 
class About extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="banner">
          <img src={window.location.origin + '/img/banner.jpg'} alt="banner"/>
          <h2 className="title">About</h2>
        </div>
        <div className="container">
          <div className="padd-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Morbi augue tortor, laoreet et nulla et, venenatis tempor elit. 
              Nam quis nunc sapien. Integer gravida nisi eu erat semper eleifend. 
              Etiam ullamcorper metus non enim congue, et ornare nisi auctor. 
              Nullam at ullamcorper elit. Integer mattis vulputate pellentesque.
            </p>
            <div className="mt-4 mb-5 text-center">
              <img src={window.location.origin + '/img/about.jpg'} alt="about"/>
            </div>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Morbi augue tortor, laoreet et nulla et, venenatis tempor elit. 
              Nam quis nunc sapien. Integer gravida nisi eu erat semper eleifend. 
              Etiam ullamcorper metus non enim congue, et ornare nisi auctor. 
              Nullam at ullamcorper elit. Integer mattis vulputate pellentesque.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
 
export default About;