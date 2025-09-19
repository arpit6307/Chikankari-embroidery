import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { mosaicImages } from './galleryData'; // Importing images from a separate file

const MosaicGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(5);

  // Function to determine slides per page based on window width
  const updateSlidesPerPage = () => {
    if (window.innerWidth >= 1200) {
      setSlidesPerPage(5); // Show 5 on large desktops
    } else if (window.innerWidth >= 992) {
      setSlidesPerPage(4); // Show 4 on desktops
    } else if (window.innerWidth >= 768) {
      setSlidesPerPage(3); // Show 3 on tablets
    } else {
      setSlidesPerPage(2); // Show 2 on mobile
    }
  };

  // Set initial value and add resize listener
  useEffect(() => {
    updateSlidesPerPage();
    window.addEventListener('resize', updateSlidesPerPage);
    return () => window.removeEventListener('resize', updateSlidesPerPage);
  }, []);

  // Reset index if slidesPerPage changes to avoid out-of-bounds
  useEffect(() => {
    setCurrentIndex(0);
  }, [slidesPerPage]);

  const totalSlides = mosaicImages.length;
  const maxIndex = Math.ceil(totalSlides / slidesPerPage) - 1;

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  // Calculate the transform value based on the current index and slides per page
  const transformValue = `translateX(-${currentIndex * 100}%)`;

  return (
    <section id="gallery">
      <Container fluid="lg">
        <h2 className="font-cormorant display-4 text-center mb-5" data-aos="fade-up">
          Our Collection
        </h2>
        <div className="mosaic-wrapper">
          <div className="mosaic-slider-track">
            <div className="mosaic-slider-inner" style={{ transform: transformValue }}>
              {mosaicImages.map((item, index) => (
                <div
                  className="mosaic-slide"
                  key={index}
                  style={{ width: `${100 / slidesPerPage}%` }}
                >
                  <div
                    className="mosaic-item"
                    data-title={item.title}
                    data-aos="fade-up"
                    data-aos-delay={item.delay}
                  >
                    <img src={item.src} alt={item.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button variant="dark" className="gallery-nav prev" onClick={prevSlide}>‹</Button>
          <Button variant="dark" className="gallery-nav next" onClick={nextSlide}>›</Button>
        </div>
      </Container>
    </section>
  );
};

export default MosaicGallery;

