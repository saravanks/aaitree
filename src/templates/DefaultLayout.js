import React from "react";
import styled from "styled-components";
import "../styles/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div``;
const DefaultLayout = ({ data, children }) => {
  return (
    <Container>
      <main className="site-main">{children}</main>
    </Container>
  );
};

export default DefaultLayout;
