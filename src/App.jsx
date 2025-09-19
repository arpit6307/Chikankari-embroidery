import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Creations from "./pages/Creations";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AlertToast from "./components/AlertToast";
import CustomCursor from "./components/CustomCursor"; // Import the new cursor component

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  // State to manage the toast notification
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Function to show the toast
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  // Initialize AOS library
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  const location = useLocation();
  const isCreationsPage = location.pathname === "/creations";

  return (
    <>
      <CustomCursor /> {/* Add the custom cursor to the main layout */}
      <ScrollToTop />
      {!isCreationsPage && <AppNavbar />}
      <main>
        <Routes>
          {/* Pass showToast down to the Home page */}
          <Route path="/" element={<Home showToast={showToast} />} />
          <Route path="/creations" element={<Creations />} />
        </Routes>
      </main>
      {/* Pass showToast down to the Footer */}
      <Footer showToast={showToast} />
      <ScrollToTopButton />
      {/* Render the Toast component */}
      <AlertToast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </>
  );
}

// Wrapper component to provide Router context to App
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;

