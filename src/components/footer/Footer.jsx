import "./footer.css";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#Home" rel="noopener noreferrer" className="footer__logo">
        Amer Safia
      </a>
      <ul className="preimalink">
        <li>
          <a href="#Home" rel="noopener noreferrer">
            Home
          </a>
        </li>
        <li>
          <a href="#about" rel="noopener noreferrer">
            About
          </a>
        </li>
        <li>
          <a href="#experience" rel="noopener noreferrer">
            Experience
          </a>
        </li>
        <li>
          <a href="#protofile" rel="noopener noreferrer">
            Protofile
          </a>
        </li>
        <li>
          <a href="#contact" rel="noopener noreferrer">
            Contact
          </a>
        </li>
      </ul>

      <div className="footer__soicals">
        <a
          href="https://web.facebook.com/amer.safia/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/amer.safia/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/Amersafia1"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <IoLogoTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/amer-safia-b463a115a/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin />
        </a>
        <a
          href="https://github.com/AmerSafia"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <AiOutlineGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small> &copy;2022 Copyright. All right reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
