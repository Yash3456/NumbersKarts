import "./storecar.css";
import React, { Component } from "react";
import Slider from "react-slick";
import image1 from "../../assests/vip-number.jpg";
import image2 from "../../assests/car2.jpg";
import image3 from "../../assests/vip-number2.jpg";
import image4 from "../../assests/car4.jpg";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


export default class Fading extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 1000,
      arrows: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{ display: "flex", flexDirection: "row",height:"65vh" }}>
        

        <div className="c_slider">
          <Slider {...settings} >
            <div>
              <img src={image1} className="c_image" alt="image1"/>
            </div>
            <div >
              <img src={image2} className="c_image" alt="image2"/>
            </div>
            <div >
              <img src={image3} className="c_image" alt="image3"/>
            </div>
            <div >
              <img src={image4} className="c_image" alt="image4"/>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}