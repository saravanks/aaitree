import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import img1 from "../images/icon1.jpg";
import img2 from "../images/icon2.jpg";
import img3 from "../images/icon3.jpg";
import img4 from "../images/icon4.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  .carousel {
    width: 100%;
    height: 100vh;
  }
  .carousel-item {
    width: 100%;
    height: 100vh;
  }
  .d-block {
    width: 100%;
    height: 100vh;
  }
  .carousel-indicators li {
    background-color: #000;
  }
  p {
    font-size: 32px;
    font-weight: 600;
    position: absolute;
    z-index: 7;
    top: 1em;
    right: 1em;
    cursor: pointer;
    transition: all 0.4s;
    border-radius: 100px;
    padding: 0px 15px 5px 15px;
    &:hover {
      background: #444;
      color: #fff;
    }
  }
`;

function MyCarousel1({ setActive }) {
  const closeCarousel = () => {
    setActive(0);
  };
  return (
    <Container>
      <Carousel className="carousel" interval={null}>
        <Carousel.Item>
          <img className="d-block" src={img1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={img2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={img3} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={img4} alt="Fifth slide" />
        </Carousel.Item>
      </Carousel>
      <p onClick={closeCarousel}>&#215;</p>
    </Container>
  );
}

export default MyCarousel1;
