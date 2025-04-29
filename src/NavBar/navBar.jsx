import React from "react";

import FacebookLogo from "./logos/FacebookLogo.jsx";
import Twiter from "./logos/Twiter.jsx";
import LinkedIn from "./logos/LinkedIn.jsx";
import WhatsApp from "./logos/WhatsApp.jsx";

import "./navBar.css";

const NavBar = () => {
  return (
    <nav id="navBar">
      <div id="links">
        
        <a
          className="social-icon"
          href="https://www.facebook.com/amir.lebba"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookLogo className="social-icon" />
        </a>
        <a
          className="social-icon"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twiter className="social-icon" />
        </a>
        <a
          className="social-icon"
          href="https://wa.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp className="social-icon" />
        </a>
        <a
          className="social-icon"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className="social-icon" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
