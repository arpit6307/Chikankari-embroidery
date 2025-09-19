import React, { useState, useEffect } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';

const AnnouncementBanner = () => {
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Navratri 2025 ki sale date (September 22)
  const saleDate = new Date('2025-09-22T00:00:00');

  useEffect(() => {
    // Har second timer update karne ke liye
    const timer = setInterval(() => {
      const now = new Date();
      const difference = saleDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Sale shuru hone par timer rok dein
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <section id="navratri-sale" className="announcement-banner" data-aos="fade-up">
        <Container className="text-center">
          <h2 className="font-cormorant display-4">Navratri Festive Sale</h2>
          <p className="lead">Get ready for exclusive offers on our most beautiful Chikankari collection. The celebration begins soon!</p>
          <Button className="btn-custom" onClick={handleShowModal}>
            Learn More
          </Button>
        </Container>
      </section>

      {/* "Coming Soon" Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title className="font-cormorant">The Celebration is Almost Here!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>Our Navratri Sale starts on September 22nd, 2025.</p>
          <p>Mark your calendars for incredible deals!</p>
          <div className="countdown-timer">
            <div className="countdown-item">
              <span>{timeLeft.days}</span> Days
            </div>
            <div className="countdown-item">
              <span>{timeLeft.hours}</span> Hours
            </div>
            <div className="countdown-item">
              <span>{timeLeft.minutes}</span> Minutes
            </div>
            <div className="countdown-item">
              <span>{timeLeft.seconds}</span> Seconds
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AnnouncementBanner;

