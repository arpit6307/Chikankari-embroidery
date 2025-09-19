import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => (
  <section id="about">
    <Container>
      <h2 className="font-cormorant display-4 text-center mb-5" data-aos="fade-up">
        What is Chikankari?
      </h2>
      <Row className="align-items-center g-5">
        <Col md={6} data-aos="fade-right">
          <Image src="https://i.postimg.cc/6QPxQbyH/Gemini-Generated-Image-drnyetdrnyetdrny.jpg"
                 alt="Chikankari hand embroidery close-up"
                 rounded
                 fluid
                 className="shadow-lg" />
        </Col>
        <Col md={6} data-aos="fade-left">
          <div className="fs-5">
            <p className="mb-4">
              Chikankari is a traditional embroidery style from Lucknow, India. It is one of the city's most ancient and well-known textile decoration styles. The word 'Chikan' is derived from a Persian word meaning 'dainty or delicate embroidery,' and its origins are often traced back to the Mughal court of the 17th century.
            </p>
            <p>
              This intricate art form is celebrated for its delicate, shadow-like effect and the masterful use of different stitches to create patterns on fine fabrics like muslin, silk, and georgette.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
