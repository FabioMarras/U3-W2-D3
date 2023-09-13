import React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" width={"100px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="text-white">
              Home
            </Link>
            <Nav.Link href="#link" className="text-white">
              Tv shows
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              Movies
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              My list
            </Nav.Link>
            <Link to="/JohnWick" className="text-white Nav.Link">
              John Wick
            </Link>
            <Dropdown>
              <Dropdown.Toggle variant="black" id="dropdown-basic" className="text-white">
                Setting & Edit Profile
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" className="text-black">
                  Setting
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" className="text-black">
                  Edit profile
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
