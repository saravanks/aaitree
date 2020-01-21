import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  a {
    font-size: 32px;
  }
`;
const IndexPage = () => {
  return (
    <Container>
      <Link to="./az1122401">Go the Main page</Link>
    </Container>
  );
};
export default IndexPage;
