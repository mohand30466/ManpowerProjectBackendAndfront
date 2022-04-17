import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";

const Header = () => {
  const [token, setToken, removetoken] = useCookies();
  const logoutclick = () => {
  
    removetoken(["mykey"]);
    window.location.href = "/";
  };
  return (
    <>
      <Navbar bg="secondary" expand="lg">
        <Container className=" bg-secondary ">
          <Navbar.Brand className="text-light" href="/">
            JOP BOARD!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-light" href="home">
                Home
              </Nav.Link>
              <Nav.Link className="text-light" href="about">
                About
              </Nav.Link>
              <Nav.Link className="text-light" href="#link">
                Partners
              </Nav.Link>
              <Nav.Link className=" text-light me-5" href="contact">
                Contacts
              </Nav.Link>
              {!token.mykey? (
                <>
                  <Button className=" me-3 bg-light">
                    {" "}
                    <Link className="text-secondary" to="signin">
                      Sign In
                    </Link>
                  </Button>
                  <Button className=" bg-light ">
                    <Link className="text-secondary" to="signup">
                      sign up
                    </Link>
                  </Button>
                </>
              ) : (
                <Button
                  className=" bg-light text-secondary "
                  onClick={logoutclick}
                >
                  Log out
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
