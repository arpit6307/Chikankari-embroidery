import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import MosaicGallery from '../components/MosaicGallery';

const Creations = () => {
  return (
    <>
      {/* This is the new, simple navigation bar for this page only */}
      <Navbar bg="light" sticky="top" className="shadow-sm">
        <Container className="justify-content-between">
          <Navbar.Brand as={Link} to="/" className="font-cormorant fs-4 fw-bold">
            Chikankari
          </Navbar.Brand>
          <Link to="/" className="btn btn-custom">
            Back to Home
          </Link>
        </Container>
      </Navbar>

      {/* The existing gallery component remains unchanged */}
      <MosaicGallery />
    </>
  );
};

export default Creations;

