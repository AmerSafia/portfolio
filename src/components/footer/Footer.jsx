import "./footer.css";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { useStateContext } from "../../context/stateContext";

const Footer = () => {
  const {
    user: {name, facebookUrl, twitterUrl ,linkedInUrl,githubUrl,instagramUrl},
  } = useStateContext();
  return (
    <footer>
      <a href="#Home" rel="noopener noreferrer" className="footer__logo">
       {name}
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
          href={facebookUrl}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href={instagramUrl}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href={twitterUrl}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <IoLogoTwitter />
        </a>
        <a
          href={linkedInUrl}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin />
        </a>
        <a
          href={githubUrl}
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
