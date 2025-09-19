import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form, FloatingLabel, Image } from "react-bootstrap";
import emailjs from "emailjs-com";

const Contact = ({ showToast }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // === IMPORTANT: APNI EMAILJS IDs YAHAAN DAALEIN ===
    const SERVICE_ID = "service_xzi71tp";   // Apna Service ID yahaan daalein
    const TEMPLATE_ID = "template_ymacoo9";  // Apna Template ID yahaan daalein
    const USER_ID = "phxHnFhUaO4lREHGC";     // Apna Public Key (User ID) yahaan daalein

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
          console.log(result.text);
          showToast('Message sent successfully!', 'success');
          handleClose();
      }, (error) => {
          console.log(error.text);
          showToast('Failed to send message. Please check your IDs.', 'danger');
      });
    e.target.reset();
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6} data-aos="fade-right">
              <h2 className="font-cormorant display-4">Get In Touch</h2>
              <p className="lead text-muted mb-4">
                Have a question or a custom request? We would love to hear from you. Reach out to us directly or send a message using the form.
              </p>
              <ul className="contact-details list-unstyled">
                <li>
                  <strong>Email:</strong> <a href="mailto:riturajswaroop2527@gmail.com">riturajswaroop2527@gmail.com</a>
                </li>
                <li>
                  <strong>Phone:</strong> <a href="tel:+916386636383">+91 63866 36383</a>
                </li>
              </ul>
              <Button className="btn-custom mt-3" onClick={handleShow}>
                Send a Message
              </Button>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <Image src="https://i.postimg.cc/hjYfHtkr/Gemini-Generated-Image-qi9b3wqi9b3wqi9b.jpg" alt="Chikankari embroidery" fluid className="contact-image" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="font-cormorant">Send us a Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendEmail}>
            <FloatingLabel controlId="floatingName" label="Your Name" className="mb-3">
              <Form.Control type="text" name="user_name" placeholder="Enter your name" required />
            </FloatingLabel>
            <FloatingLabel controlId="floatingEmail" label="Your Email" className="mb-3">
              <Form.Control type="email" name="user_email" placeholder="name@example.com" required />
            </FloatingLabel>
            <FloatingLabel controlId="floatingMessage" label="Message">
              <Form.Control as="textarea" name="message" placeholder="Leave your message here" style={{ height: '120px' }} required />
            </FloatingLabel>
            <Button type="submit" className="btn-custom w-100 mt-4">
              Send Message
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Contact;

