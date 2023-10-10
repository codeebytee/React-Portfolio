import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar({ sidebarVisible, toggleSidebar }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const handleLinkClick = () => {
    updateExpanded(false);
    toggleSidebar();  // Toggle the sidebar off when a link is clicked
  };

  return (
    <>
  <button 
  className={`sidebar-toggle-btn ${sidebarVisible ? 'open' : ''} hidden`} 
  onClick={() => {
    toggleSidebar();
    updateExpanded(expand ? false : "expanded");
  }}
>

          
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
      <Navbar
        expanded={expand}
        className={navColour ? "sticky" : "navbar"}
        variant="dark"
      >
        <Container>
          
          
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={handleLinkClick}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={handleLinkClick}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <div className={`sidebar ${sidebarVisible ? "show" : ""}`}>
        <Nav className="ms-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/" onClick={handleLinkClick}>
              <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>
              <AiOutlineUser style={{ marginBottom: "2px" }} /> About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/resume" onClick={handleLinkClick}>
              <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}

export default NavBar;
