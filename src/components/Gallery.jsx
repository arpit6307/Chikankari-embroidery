import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const galleryImages = [
  { src: "https://i.postimg.cc/0y1D8BTY/1.jpg", delay: "0" },
  { src: "https://i.postimg.cc/ZqVdxKCH/2.jpg", delay: "100" },
  { src: "https://i.postimg.cc/wvjDCRSn/3.jpg", delay: "200" },
  { src: "https://i.postimg.cc/7hp7Jsfy/4.jpg", delay: "300" }
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sliderRef = useRef(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    if (isMobile && sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    } else if (sliderRef.current) {
      // Reset transform for desktop view
      sliderRef.current.style.transform = `translateX(0%)`;
    }
  }, [currentIndex, isMobile]);

  return (
    <section id="gallery">
      <Container>
        <h2 className="font-cormorant display-4 text-center mb-5" data-aos="fade-up">
          Our Collection
        </h2>

        <div className="gallery-wrapper">
          <Row className={isMobile ? "gallery-slider" : "g-4"} ref={sliderRef}>
            {galleryImages.map((item, idx) => (
              <Col
                lg={3}
                md={6}
                key={idx}
                className={isMobile ? "gallery-slide" : ""}
              >
                <Card className="gallery-card" data-aos="fade-up" data-aos-delay={item.delay}>
                   <Card.Img variant="top" src={item.src} alt={`Gallery item ${idx + 1}`} />
                </Card>
              </Col>
            ))}
          </Row>

          {isMobile && (
            <>
              <Button className="gallery-nav prev" onClick={prevSlide}>‹</Button>
              <Button className="gallery-nav next" onClick={nextSlide}>›</Button>
            </>
          )}
        </div>

        <div className="text-center mt-5">
          <Link to="/creations" className="btn-custom">Show More</Link>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;

