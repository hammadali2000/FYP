import React, { useState, useEffect } from "react";
// import { Button } from "./Button";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./HeroSection.css";
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"; 

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="images/logo.png" alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/Login" className="nav-links" onClick={closeMobileMenu}>
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
            <Button className="signup-button" variant="primary">SignUp</Button>{' '}
            </Link>
          </li>


          <li>
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Dashboard
            </Link>
          </li>
        </ul>
        {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
        {/* <Button className="signup-button" variant="primary">Primary</Button>{' '} */}
      </div>
    </nav>
  );
}


export default Navbar;
