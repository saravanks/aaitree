import React, { useState } from "react";
import Carousel1 from "../components/MyCarousel1";
import Carousel2 from "../components/MyCarousel2";
import Layout from "../templates/DefaultLayout";
import styled from "styled-components";
import Description from "../components/Description";
const Container = styled.div`
  .mycarousel {
    display: none;
  }
  .active {
    display: block;
  }
`;

const IndexPage = () => {
  const [active, setActive] = useState(0);
  return (
    <Container>
      <Layout>
        <div className={`mycarousel first-carousel ${active ? "" : "active"}`}>
          <Carousel1 setActive={setActive} />
        </div>
        <div className={`mycarousel second-carousel ${active ? "active" : ""}`}>
          <Carousel2 setActive={setActive} type="full" />
        </div>
        <div className={`mycarousel ${active ? "" : "active"}`}>
          <Description />
        </div>
      </Layout>
    </Container>
  );
};
export default IndexPage;
