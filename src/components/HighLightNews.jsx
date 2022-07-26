import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import noImage from "../assets/no-image.png";

const HighLightNews = ({ news }) => {
  const highLight = news[0];
  const semiHighLight = news.slice(1, news.length);

  return (
    <Row>
      <Col md={6} className="position-relative">
        {highLight.image_url ? (
          <Image src={highLight.image_url} fluid alt="" className="highlight_image" />
        ) : (
          <Image src={noImage} alt="" className="highlight_image" />
        )}
        <div className="position-absolute text-light px-3" style={{ bottom: 20 }}>
          <h2 className="headline ">
            <a
              href={highLight.link}
              target="_blank"
              rel="noreferrer"
              className={highLight.image_url ? "" : "text-dark"}
            >
              {highLight?.title}
            </a>
          </h2>
        </div>
      </Col>
      <Col md={6}>
        <Row>
          {semiHighLight.map((item, key) => (
            <Col md={6} key={key}>
              <div>
                {item.image_url ? (
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    fluid
                    className="semi_highlight_image"
                  />
                ) : (
                  <Image src={noImage} alt="" className="semi_highlight_image" />
                )}

                <h5 className="headline mt-2">
                  <a href={item.link} target="_blank" rel="noreferrer" className="text-dark">
                    {item.title}
                  </a>
                </h5>
                <p className="slug">
                  {item.description
                    ? item.description
                    : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error voluptates accusantium ipsum ex a ea beatae hic doloribus quam adipisci autem voluptas facere, magni illum officiis, amet dolor, quasi excepturi."}
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
