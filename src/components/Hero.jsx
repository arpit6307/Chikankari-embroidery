import React from 'react';
import { Container } from 'react-bootstrap';

const Hero = () => {
  return (
    <header className="hero-section">
      <div className="hero-overlay"></div>
      <Container className="position-relative text-center" data-aos="fade-up">
        <h1 className="display-2 font-cormorant mb-4">The Art of Lucknow</h1>
        <p className="lead fs-4 mb-5">
          Discover the exquisite history and timeless elegance of Chikankari embroidery.
        </p>
        <a href="#about" className="btn-custom" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>
          Explore
        </a>
      </Container>
    </header>
  );
};

export default Hero;
