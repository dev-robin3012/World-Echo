import React from "react";
import { Container } from "react-bootstrap";
import "./spinner.css";

const LoadingSpinner = () => {
  return (
    <Container className="text-center" id="loading">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default LoadingSpinner;
