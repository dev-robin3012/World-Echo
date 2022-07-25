import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const SingleNews = ({ article }) => {
  const { urlToImage, title, description, url } = article;

  return (
    <Row className="p-2 single_news">
      <Col md={5}>
        {urlToImage ? (
          <Image src={urlToImage} fluid alt="" />
        ) : (
          <Image src="/no-image.png" alt="" fluid />
        )}
      </Col>
      <Col md={7}>
        <h3 className="headline">
          {/* <Link to="#" className="text-dark">
            {title}
          </Link> */}
          <a href={url} target="_blank" rel="noreferrer" className="text-dark">
            {title}
          </a>
        </h3>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noreferrer" className="text-dark">
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
