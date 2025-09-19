import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, Modal } from 'react-bootstrap';

const Footer = ({ showToast }) => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [email, setEmail] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubscribe = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      showToast('Thank you for subscribing!', 'success');
      setEmail('');
      setValidated(false);
    }
    setValidated(true);
  };

  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <h5 className="font-cormorant">Chikankari</h5>
              <p className="small">Celebrating the timeless beauty and heritage of traditional Indian embroidery.</p>
               <div className="d-flex justify-content-center justify-content-md-start mt-3 social-icons">
                  <a href="#" className="me-3"><img src="https://img.icons8.com/ios-filled/24/f7f3ed/instagram-new.png" alt="Instagram"/></a>
                  <a href="#" className="me-3"><img src="https://img.icons8.com/ios-filled/24/f7f3ed/facebook-new.png" alt="Facebook"/></a>
                  <a href="#"><img src="https://img.icons8.com/ios-filled/24/f7f3ed/twitterx--v1.png" alt="Twitter"/></a>
               </div>
            </Col>
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/#about">About Us</a></li>
                <li><a href="/#gallery">Our Gallery</a></li>
                <li><a href="/#contact">Contact Us</a></li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <h5>Customer Service</h5>
              <ul className="list-unstyled">
                <li><Button variant="link" onClick={() => setShowPrivacy(true)}>Privacy Policy</Button></li>
                <li><Button variant="link" onClick={() => setShowTerms(true)}>Terms of Service</Button></li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <h5>Stay Connected</h5>
              <p className="small">Subscribe to our newsletter for updates and exclusive offers.</p>
              <Form noValidate validated={validated} onSubmit={handleSubscribe}>
                <InputGroup className="footer-subscribe-group">
                  <Form.Control
                    type="email"
                    placeholder="Your email address"
                    aria-label="Your email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="footer-input"
                  />
                  <Button type="submit" className="footer-btn">Subscribe</Button>
                </InputGroup>
              </Form>
            </Col>
          </Row>
          <div className="footer-bottom">
             <p className="small mb-0">&copy; {new Date().getFullYear()} Chikankari. All rights reserved.</p>
             <p className="small">Developed with ❤️ by Arpit Singh Yadav & Rituraj srivastav</p>
          </div>
        </Container>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal show={showPrivacy} onHide={() => setShowPrivacy(false)} centered size="lg" scrollable>
        <Modal.Header closeButton>
          <Modal.Title className="font-cormorant">Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Privacy Policy for Chikankari Portfolio</h5>
          <p>At Chikankari Portfolio, we respect and value your privacy. This Privacy Policy explains how we collect, use, share, and protect your personal information when you interact with our website, view our chikankari artwork, or communicate with us. By using our platform, you agree to the practices described in this policy.</p>

          <h6>Information We Collect</h6>
          <p>When you access our chikankari portfolio, we may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Such as your name, email address, phone number, or social media handles if you voluntarily provide them through our contact forms or inquiries.</li>
            <li><strong>Non-Personal Information:</strong> Technical data including your IP address, browser type, device details, location data, and the pages you visit on our website. This information is collected automatically through cookies or analytics tools.</li>
            <li><strong>Optional User Content:</strong> If you share feedback, comments, or inquiry details regarding chikankari designs, we may store this content securely.</li>
          </ul>

          <h6>How We Use Your Information</h6>
          <p>We collect and use your information for the following purposes:</p>
          <ul>
            <li>To respond to inquiries about chikankari designs, pricing, or customization requests.</li>
            <li>To improve our portfolio website’s experience and user-friendly design.</li>
            <li>To understand which chikankari pieces or collections are most viewed or appreciated.</li>
            <li>To keep records for customer support, communication, and service improvements.</li>
            <li>To send updates, newsletters, or event information, if you subscribe to such services.</li>
          </ul>

          <h6>Sharing of Information</h6>
          <p>We value your trust and do not sell, rent, or trade your personal information with third parties. However, we may share your information in limited circumstances:</p>
          <ul>
            <li>With trusted third-party service providers who help manage website hosting, analytics, or communication tools.</li>
            <li>If required by law, regulation, or court order to disclose specific information.</li>
            <li>In the event of a website update, redesign, or transfer, information may be shared for the continuation of services.</li>
          </ul>

          <h6>Cookies and Tracking Technologies</h6>
          <p>Our website may use cookies or similar tracking tools to improve your browsing experience. Cookies help us understand traffic patterns, store your preferences, and display content relevant to you. You can manage or disable cookies through your browser settings, but doing so may affect website functionality.</p>

          <h6>Data Protection and Security</h6>
          <p>We implement industry-standard security measures to protect your personal data from unauthorized access, misuse, alteration, or disclosure. While we take reasonable steps to safeguard information, please note that no data transmission over the internet can be guaranteed to be 100% secure.</p>

          <h6>Third-Party Links</h6>
          <p>Our chikankari portfolio may include links to external websites or social media platforms. We are not responsible for the privacy practices or content of those external sites, and we encourage you to review their policies before sharing personal information.</p>

          <h6>Your Rights</h6>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal information we hold about you.</li>
            <li>Correct or update inaccurate details.</li>
            <li>Request deletion of your information when it is no longer required.</li>
            <li>Withdraw consent for optional communications at any time.</li>
          </ul>

          <h6>Changes to this Privacy Policy</h6>
          <p>We may update this Privacy Policy periodically to reflect new practices, legal developments, or technical changes. Updates will be posted on this page with a revised date of modification.</p>

          <h6>Contact Us</h6>
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:<br/>
          <strong>Email:</strong> riturajswaroop2527@gmail.com<br/>
          <strong>Phone:</strong> +91 63866 36383</p>

          <p>By using Chikankari Portfolio, you acknowledge that you have read and understood this Privacy Policy.</p>
        </Modal.Body>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal show={showTerms} onHide={() => setShowTerms(false)} centered size="lg" scrollable>
        <Modal.Header closeButton>
          <Modal.Title className="font-cormorant">Terms of Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Welcome to our website. By accessing or using this site, you agree to the following Terms of Service. Please read them carefully before browsing our chikankari portfolio or engaging with our content. If you do not agree, you must discontinue use of this website.</p>

          <h6>Use of Website</h6>
          <ul>
            <li>This website is intended to showcase chikankari designs, artwork, and related content for viewing and informational purposes.</li>
            <li>You agree not to misuse the website for unlawful activities, including but not limited to hacking, spreading malware, or posting offensive content through contact or feedback forms.</li>
            <li>Unauthorized reproduction, distribution, or commercial use of images and content displayed on this website is strictly prohibited without written permission.</li>
          </ul>

          <h6>Intellectual Property</h6>
          <ul>
            <li>All designs, photographs, artwork, logos, and written text featured on this site are the intellectual property of the website owner unless otherwise stated.</li>
            <li>You may view, download, or print content for <em>personal and non-commercial</em> use only.</li>
            <li>Any attempt to modify, copy, resell, or distribute our content without consent may result in legal action.</li>
          </ul>

          <h6>User Contributions</h6>
          <ul>
            <li>If you submit feedback, inquiries, or comments, you grant us a non-exclusive, worldwide, royalty-free license to use that content for communication purposes.</li>
            <li>Users are prohibited from submitting unlawful, harmful, defamatory, or infringing content. We reserve the right to remove or refuse any content that violates these terms.</li>
          </ul>

          <h6>Privacy</h6>
          <p>Your privacy is important to us. Please refer to our Privacy Policy to understand how we collect and use your personal information.</p>

          <h6>Third-Party Links</h6>
          <p>Our website may include links to external sites for additional information or resources. We are not responsible for the content, accuracy, or policies of third-party websites and encourage you to review them before interacting.</p>

          <h6>Limitation of Liability</h6>
          <ul>
            <li>We strive to provide accurate and updated content; however, we do not guarantee that all information displayed is error-free, complete, or current.</li>
            <li>Use of this website is at your own risk. We disclaim liability for any damages, losses, or interruptions resulting from the use of our site or reliance on its information.</li>
            <li>We are not liable for technical issues, such as downtime, data loss, or transmission errors, that may occur while using the website.</li>
          </ul>

          <h6>Indemnification</h6>
          <p>By using this website, you agree to indemnify and hold harmless the website owners, team, and affiliates from any claims, damages, or expenses arising from your misuse of the website or violation of these terms.</p>

          <h6>Termination of Use</h6>
          <p>We reserve the right to restrict or terminate access to the website at our discretion, without prior notice, if we believe a user has violated these Terms of Service.</p>

          <h6>Modifications to Terms</h6>
          <p>We may revise or update these Terms of Service at any time. Updates will be effective immediately upon posting. Continued use of the website after such changes constitutes your acceptance of the revised terms.</p>

          <h6>Governing Law</h6>
          <p>These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes will be subject to the jurisdiction of the courts located in Lucknow, Uttar Pradesh.</p>

          <h6>Contact Information</h6>
          <p>For any questions, concerns, or requests regarding these Terms of Service, please contact us at:<br/>
          <strong>Email:</strong> riturajswaroop2527@gmail.com<br/>
          <strong>Phone:</strong> +91 63866 36383</p>

          <p>By continuing to use this website, you confirm that you have read, understood, and agreed to these Terms of Service.</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Footer;

