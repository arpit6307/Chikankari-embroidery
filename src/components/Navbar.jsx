import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const AppNavbar = () => {
  // State to control the expanded (open/closed) state of the navbar
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      expand="lg" 
      sticky="top" 
      className="navbar"
      // Control the collapse component with our state
      expanded={expanded} 
      // Update state when the toggle button is clicked
      onToggle={() => setExpanded(!expanded)} 
    >
      <Container>
        {/* Add onClick to the brand link to close the menu */}
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          Chikankari
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {/* Add onClick to each Nav.Link to close the menu after a click */}
            <Nav.Link href="/#about" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link href="/#history" onClick={() => setExpanded(false)}>History</Nav.Link>
            <Nav.Link href="/#gallery" onClick={() => setExpanded(false)}>Gallery</Nav.Link>
            <Nav.Link href="/#contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;

