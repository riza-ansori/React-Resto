import React, { Component } from "react";
import Slider from "react-slick";
 
class Team extends Component {
  constructor(){
    super();
    this.state = {
      pictures:[],
    };
  }
  componentDidMount(){
    const urlFetch = fetch('https://randomuser.me/api/?results=500')
    .then(results => {
      return results.json();
    }).then(data => {
      let pictures = data.results.map((pic) => {
        return(
          <div className="menu" key={pic.results}>
            <div className="wrapper-image circle">
              <img src={pic.picture.large} />
            </div>
            <div className="text-center mt-4">
              <p>{pic.name.first}{pic.name.last}</p>
              <p>{pic.email}</p>
              <p>{pic.phone}</p>
            </div>
          </div>
        )
      })
      this.setState({pictures: pictures});
      console.log("state", this.state.pictures);
    })
  }
  render() {
    var settings = {
      arrows: true,
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="wrapper">
        <div className="banner">
          <img src={window.location.origin + '/img/banner.jpg'} alt="banner"/>
          <div className="row justify-content-center contact-page">
            <h2 className="title col-12 text-center mb-4">Our Team</h2>
          </div>
        </div>
        <div className="container">
          <div className="padd-content">
            <Slider {...settings}>
              {this.state.pictures}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Team;