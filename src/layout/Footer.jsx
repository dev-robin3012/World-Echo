import React from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <section className="text-center bg-light py-5">
        <h3>Download Our App</h3>
        <div className="d-flex justify-content-center">
          <div
            className="bg-dark text-light py-2 px-4 rounded-pill d-flex align-items-center"
            role="button"
          >
            <img src="/Apple_logo.png" alt="" height={40} />
            <div className="ml-2">
              <small className="m-0">Download From</small>
              <h5 className="m-0">Apple Store</h5>
            </div>
          </div>
          <div
            className="bg-dark text-light py-2 px-4 rounded-pill d-flex align-items-center ml-3"
            role="button"
          >
            <img src="/google_play.webp" alt="" height={40} />
            <div className="ml-2">
              <small className="m-0">Download From</small>
              <h5 className="m-0">Google Play</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center py-5">
        <h3>Stay in touch with us</h3>
        <p>Join our mailing list or follow us & stay informed about our news and updates.</p>
        <Col md={6} className="m-auto">
          <InputGroup>
            <Form.Control
              placeholder="Enter your email address"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-success" id="basic-addon2">
              Subscribe
            </Button>
          </InputGroup>
        </Col>
      </section>
      <section className="border-top py-2 px-md-3 px-1 text-center">
        <h6 className="m-0">Mar 2021 &copy; World Echo</h6>
      </section>
    </footer>
  );
};

export default Footer;
