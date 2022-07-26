import React from "react";
import { Container } from "react-bootstrap";
import "./spinner.css";

const LoadingSpinner = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <div id="loading">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default LoadingSpinner;
