import React, { Component } from "react";
import Slider from "react-slick";
import { NavLink} from "react-router-dom";
 
const data = [
  {
      "name": "Kopi Tubruk",
      "image": "/img/kopi.jpg",
      "content": "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem",
  },
  {
    "name": "Nasi Goreng",
    "image": "/img/nasi-goreng.jpg",
    "content": "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem",
  },
  {
    "name": "Pisang Krispi",
    "image": "/img/pisang-krispi.jpg",
    "content": "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem",
  },
  {
    "name": "Es Kelapa Muda",
    "image": "/img/es-degan.jpg",
    "content": "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem",
  },
]

const Menus = ({menu, index}) => {
  
  return (
    <div className="menu">
      <h3>{menu.name}</h3>
      <div className="wrapper-image circle">
        <img src={window.location.origin + menu.image} alt={menu.image}/>
      </div>
      <p>{menu.content}</p>
    </div>
  )
}

class Home extends React.Component {

  // fires before component is mounted
  constructor(props) {
        
    // makes this refer to this component
    super(props);

    // set local state
    this.state = {
        menus: data,
    };

  }

render() {
  const {menus} = this.state;
  var settings = {
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
        <h2 className="title">Welcome To Resto</h2>
      </div>
      <div className="container">
        <div className="padd-content pb-0">
          <div className="title-section">
            <h2 className="title">About Us</h2>
          </div>
          <div className="col-12">
            <p>Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem</p>
            <div className="text-center">
              <NavLink to="/about" className="button01">Read More</NavLink>
            </div>
          </div>
        </div>
        <div className="padd-content pb-0">
          <div className="title-section">
            <h2 className="title">Our Menu</h2>
          </div>
          <Slider {...settings}>
            {
              menus.map((menu, index) => {
                const {name} = menu;
                return <Menus key={name} index={index} menu={menu} />
              })
            }
          </Slider>
            <div className="text-center mt-3">
              <NavLink to="/menus" className="button01">View Menu</NavLink>
            </div>
        </div>
      </div>
      <div className="padd-content pb-0">
        <div className="padd-content bg-parallax">
          <div className="container">
            <div className="bg-black d-flex justify-content-center col-md-6 col-10 mx-auto">
              <div className="border-dotted">
                <h2 className="book-title mb-4">Open</h2>
                <p className="text-grey mb-2">Monday - Friday</p>
                <p className="text-white">08.00 Am / 10.00 Pm</p>
                <p className="text-grey mb-2">Saturday - Sunday</p>
                <p className="text-white">08.00 Am / 12.00 Pm</p>
                <hr className="line-grey my-3"></hr>
                <p className="text-grey mb-0">(0298) 565567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default Home;