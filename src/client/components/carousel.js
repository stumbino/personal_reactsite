import React from 'react'
import { Carousel } from 'react-bootstrap';
import ThumbnailImage from '../images/portfolio/naptowndev.png';
import ThumbnailImage2 from '../images/portfolio/ashtonDev.png';
import ThumbnailImage3 from '../images/portfolio/isuStudentMedia.png';
const carousel = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={ThumbnailImage}
        alt="First slide"
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={ThumbnailImage2}
        alt="Second slide"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={ThumbnailImage3}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  )
}

export default carousel
