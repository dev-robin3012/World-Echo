import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import noImage from "../assets/no-image.png";

const SingleNews = ({ article }) => {
  const { image_url, title, description, link } = article;

  return (
    <Row className="p-2 single_news">
      <Col md={5}>
        {image_url ? <Image src={image_url} fluid alt="" /> : <Image src={noImage} alt="" fluid />}
      </Col>
      <Col md={7}>
        <h3 className="headline">
          {/* <Link to="#" className="text-dark">
            {title}
          </Link> */}
          <a href={link} target="_blank" rel="noreferrer" className="text-dark">
            {title}
          </a>
        </h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noreferrer" className="text-dark">
          Read Now
        </a>
        {/* <Link to="#" className="text-dark">
          Read Now
        </Link> */}
      </Col>
    </Row>
  );
};

export default SingleNews;
