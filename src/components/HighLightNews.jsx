import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const HighLightNews = ({ news }) => {
  const highLight = news[0];
  const semiHighLight = news.slice(1, news.length);

  return (
    <Row>
      <Col md={6} className="position-relative">
        <Image src={highLight?.urlToImage} alt="" fluid className="highlight_image" />
        <div className="position-absolute text-light px-2" style={{ bottom: 20 }}>
          <h2 className="headline">
            <a href={highLight.url} target="_blank" rel="noreferrer">
              {highLight?.title}
            </a>
            {/* <Link to={highLight.url} target="_blank">
              {highLight?.title}
            </Link> */}
          </h2>
        </div>
      </Col>
      <Col md={6}>
        <Row>
          {semiHighLight.map((item, key) => (
            <Col md={6} key={key}>
              <div className="">
                <Image
                  src={item.urlToImage}
                  alt={item.title}
                  fluid
                  className="semi_highlight_image"
                />
                <h5 className="headline mt-2">
                  <a href={item.url} target="_blank" rel="noreferrer" className="text-dark">
                    {item.title}
                  </a>
                  {/* <Link to="#" className="text-dark">
                    {item.title}
                  </Link> */}
                </h5>
                <p className="slug">
                  {item.description
                    ? item.description
                    : " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error voluptates accusantium ipsum ex a ea beatae hic doloribus quam adipisci autem voluptas facere, magni illum officiis, amet dolor, quasi excepturi."}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default HighLightNews;
