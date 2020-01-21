import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import img0 from "../images/img1.jpg";
import img1 from "../images/icon1.jpg";
import img2 from "../images/icon2.jpg";
import img3 from "../images/icon3.jpg";
import img4 from "../images/icon4.jpg";

const Container = styled.div`
  .carousel {
    width: 100%;
    height: 80vh;
  }
  .carousel-item {
    width: 100%;
    height: 80vh;
  }
  .d-block {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .carousel-indicators li {
    background-color: #000;
  }
  @media only screen and (max-width: 1200px) {
    .carousel,
    .carousel-item {
      height: 65vh;
    }
  }
  @media only screen and (max-width: 650px) {
    .carousel,
    .carousel-item {
      height: 50vh;
    }
  }
  @media only screen and (max-width: 480px) {
    .carousel,
    .carousel-item {
      height: 35vh;
    }
  }
  .carousel-indicators {
    bottom: -3.5em;
  }
`;

function MyCarousel1({ setActive }) {
  const openCarousel = () => {
    console.log("Ss");
    setActive(1);
  };
  return (
    <Container>
      <Carousel className="carousel" controls={false} interval={null}>
        <Carousel.Item>
          <img
            className="d-block"
            src={img0}
            alt="First slide"
            onClick={openCarousel}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={img1}
            alt="Second slide"
            onClick={openCarousel}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={img2}
            alt="Third slide"
            onClick={openCarousel}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={img3}
            alt="Fourth slide"
            onClick={openCarousel}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={img4}
            alt="Fifth slide"
            onClick={openCarousel}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default MyCarousel1;
