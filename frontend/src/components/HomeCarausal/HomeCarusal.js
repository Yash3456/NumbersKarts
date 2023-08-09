import "./HC.css";
import React, { Component } from "react";
import Slider from "react-slick";
import image1 from "../../assests/homecar2.png";
import image2 from "../../assests/homeCar1.png";
import image3 from "../../assests/Screenshot (106).png";
import image4 from "../../assests/car4.jpg";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


export default class HomeCarsousal extends Component {
  render() {
    const settings = {
      dots: false,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      arrows: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{ display: "flex", flexDirection: "row",height:"65vh"}}>
        

        <div className="h_slider">
          <Slider {...settings} >
            <div>
              <img src={image1} className="h_image" alt="imaged1"/>
            </div>
            <div >
              <img src={image2} className="h_image" alt="imaged1"/>
            </div>
            <div >
              <img src={image3} className="h_image" alt="imaged1"/>
            </div>
            <div >
              <img src={image4} className="h_image" alt="imaged1"/>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}