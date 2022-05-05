import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {
  return (
    <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="banner"
            src="../img/banner.jpg"
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="banner"
            src="../img/bannerDos.jpg"
            alt="Image Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="banner"
            src="../img/bannerTres.jpg"
            alt="Image Two"
          />
        </Carousel.Item>
    </Carousel>
  )
}

export default Banner