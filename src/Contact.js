import React, { Component } from "react";
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';
import FaPhone from 'react-icons/lib/fa/phone';

 
class Contact extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="banner">
          <img src={window.location.origin + '/img/banner.jpg'} alt="banner"/>
          <div className="row justify-content-center contact-page">
            <h2 className="title col-12 text-center mb-4">Contact</h2>
          </div>
        </div>
        <div className="container">
          <div className="padd-content pb-0">
            <div className="col-12 text-center">
              <div className="d-flex justify-content-center align-items-center mb-2"><FaEnvelopeO className="mr-1" />ansori.saputro@gmail.com</div>
              <div className="d-flex justify-content-center align-items-center mb-2"><FaPhone className="mr-1" />+62895372383224</div>
            </div>
          </div>
          <div className="padd-content pt-4">
            <div className="col-lg-8 col-md-10 col-12 mx-auto">
              <form className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <select className="custom-select mr-sm-2" id="title">
                      <option selected>Title...</option>
                      <option value="1">Mr.</option>
                      <option value="2">Mrs.</option>
                      <option value="3">Mss.</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="Jhon Due"/>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="mail@mail.com"/>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <input type="text" className="form-control" id="phone" placeholder="+6288-888-888"/>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <div className="form-group">
                    <textarea className="form-control" id="message" placeholder="Your message..." rows="3"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Contact;