import React from "react";
import styled from "styled-components";
const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;
  ul {
    margin-top: 8em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column: 2em;
  }
  li {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5em;
  }
  p {
    font-family: "montserrat", sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-align: justify;
  }
  .label {
    text-transform: uppercase;
    color: #009b72;
  }
  .about-text {
    padding-right: 2em;
  }
  .single-colmn {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .right {
    padding-left: 40%;
  }
  @media only screen and (max-width: 550px) {
    .right {
      padding-left: 10%;
    }
  }
  @media only screen and (max-width: 400px) {
    .p {
      font-size: 14px;
    }
  }
`;
function Description() {
  return (
    <Container>
      <ul>
        <li>
          <p className="label">Name</p>
          <p className="content">Neem Tree</p>
        </li>
        <li className="right">
          <p className="label">Plant Id</p>
          <p className="content">AZ11224001</p>
        </li>
        <li>
          <p className="label">PLANTED BY</p>
          <p className="content">DR.A. Bakkkinathan</p>
        </li>
        <li className="right">
          <p className="label">Planted On</p>
          <p className="content">20.01.2019</p>
        </li>
        <li>
          <p className="label">SCientific name</p>
          <p className="content">Azadiratchta Indica</p>
        </li>
        <li className="right">
          <p className="label">Rank</p>
          <p className="content">1</p>
        </li>
        <li>
          <p className="label">Family</p>
          <p className="content">Fabaceae</p>
        </li>
        <li className="right">
          <p className="label">CO2 REDUCTIOn</p>
          <p className="content">1</p>
        </li>
        <li className="single-colmn">
          <p className="label">ORDER</p>
          <p className="content">Fables</p>
        </li>
        <li className="single-colmn">
          <p className="label">KINGDOM</p>
          <p className="content">Plantae</p>
        </li>
        <li className="single-colmn">
          <p className="label">HIgher Classification</p>
          <p className="content">Azadirtachta</p>
        </li>
        <li className="single-colmn">
          <p className="label">About this tree</p>
          <p className="content about-text">
            Pongam is a fast-growing evergreen tree which reaches 40 feet in
            height and spread, forming a broad, spreading canopy casting
            moderate shade. The three-inch-long, pinnately compound, glossy
            green leaves are briefly deciduous, dropping for just a short period
            of time in early spring but being quickly replaced by new growth. In
            spring, Pongam is at its finest when the showy, hanging clusters of
            white, pink, or lavender, pea-like, fragrant blossoms appear, the
            clusters up to 10 inches long. These beautiful blossoms and the
            glossy, nearly-evergreen leaves help make Pongam a favorite for use
            as a specimen, shade, or windbreak.
          </p>
        </li>
      </ul>
    </Container>
  );
}

export default Description;
