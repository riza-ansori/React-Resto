import React, { Component } from "react";
 
const data = [
    {
        "name": "Kopi Tubruk",
        "image": "/img/kopi.jpg",
        "content": "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem",
        "price": "Rp 18.000",
    },
    {
      "name": "Nasi Goreng",
      "image": "/img/nasi-goreng.jpg",
      "content": "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem",
      "price": "Rp 25.000",
    },
    {
      "name": "Pisang Krispi",
      "image": "/img/pisang-krispi.jpg",
      "content": "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem",
      "price": "Rp 15.000",
    },
    {
      "name": "Es Kelapa Muda",
      "image": "/img/es-degan.jpg",
      "content": "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem",
      "price": "Rp 14.000",
    },
    {
        "name": "Kopi Gayo ",
        "image": "/img/kopi.jpg",
        "content": "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem",
        "price": "Rp 18.000",
    },
    {
      "name": "Nasi Goreng Ayam",
      "image": "/img/nasi-goreng.jpg",
      "content": "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem",
      "price": "Rp 25.000",
    },
    {
      "name": "Pisang Krispi Coklat",
      "image": "/img/pisang-krispi.jpg",
      "content": "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem",
      "price": "Rp 15.000",
    },
    {
      "name": "Es Kelapa Muda Gula Jawa",
      "image": "/img/es-degan.jpg",
      "content": "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem",
      "price": "Rp 14.000",
    },
  ]

const Menu = ({menu}) => {
  return (
    <li className="menu">
        <h3>{menu.name}</h3>
        <div className="wrapper-image circle mb-2">
        <img src={window.location.origin + menu.image} alt={menu.image}/>
        </div>
        <p>{menu.content}</p>
        <span className="price">{menu.price}</span>
    </li>
  )
}

class Menus extends React.Component {

  // fires before component is mounted
  constructor(props) {
        
    // makes this refer to this component
    super(props);

    // set local state
    this.state = {
        menus: data,
        manager: data
    };

}

render() {
  const {menus} = this.state;
  const {manager} = this.state;
  return (
    <div className="wrapper">
        <div className="banner">
          <img src={window.location.origin + '/img/banner.jpg'} alt="banner"/>
          <h2 className="title">Menu</h2>
        </div>
        <div className="container">
          <div className="padd-content">
            <ul className="list-menus">
                {
                menus.map((menu, index, manager) => {
                    const {name} = menu;
                    return <Menu key={name} index={index} menu={menu} />
                })
                }
            </ul>
            </div>
        </div>
      </div>
  )
}
}

export default Menus;