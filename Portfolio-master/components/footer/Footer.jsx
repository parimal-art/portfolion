/* eslint-disable no-unused-vars */
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">&lt;Parimal Maity/&gt;</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#experience" className="footer__link">Experience</a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/parimalmaity50?igsh=MW85dzdxNzFjdndnMw=="
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/parimal-maity-852241286/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/parimal-art"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Parimal Maity. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
