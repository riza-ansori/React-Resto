import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="banner">
          <img src={window.location.origin + '/img/banner.jpg'} alt="banner"/>
          <div className="row justify-content-center contact-page">
            <h2 className="title col-12 text-center mb-4">Contact</h2>
            <div className="col-12 text-center text-white">
              <p>ansori.saputro@gmail.com </p>
              <p>+62895372383224</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Contact;