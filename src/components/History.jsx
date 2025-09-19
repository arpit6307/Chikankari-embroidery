import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const History = () => (
  <section id="history" style={{ backgroundColor: '#fdfbf7' }}>
    <Container>
      <h2 className="font-cormorant display-4 text-center mb-5" data-aos="fade-up">
        A Glimpse into its History
      </h2>
      <Row className="align-items-center g-5 flex-column-reverse flex-md-row">
        <Col md={6} data-aos="fade-right">
          <div className="fs-5">
            <p className="mb-4">
              The history of Chikankari is deeply intertwined with the royal patronage of the Mughal dynasty. Legend has it that the Mughal Empress Nur Jahan, wife of Jahangir, introduced Chikankari to India in the 17th century. She was a skilled artist herself and found this embroidery style to be a perfect fit for the luxurious fabrics used by the royalty.
            </p>
            <p>
              Today, Chikankari is not just an embroidery but a symbol of Lucknow's rich cultural heritage, passed down through generations of skilled artisans.
            </p>
          </div>
        </Col>
        <Col md={6} data-aos="fade-left">
          <Image src="https://i.postimg.cc/ydZk3k0q/Gemini-Generated-Image-y3q58ey3q58ey3q5.png"
                 alt="Historical Chikankari depiction"
                 rounded
                 fluid
                 className="shadow-lg" />
        </Col>
      </Row>
    </Container>
  </section>
);

export default History;
