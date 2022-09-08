import "./nav.css";
import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActveNav] = useState("#Home");
  return (
    <nav>
      <a
        href="#Home"
        onClick={() => setActveNav("#Home")}
        className={`tooltip ${activeNav === "#" ? "active" : ""}`}
      >
        <AiOutlineHome />
        <span class="tooltiptext">Home</span>
      </a>
      <a
        href="#about"
        onClick={() => setActveNav("#about")}
        className={`tooltip ${activeNav === "#about" ? "active" : ""}`}
      >
        <AiOutlineUser />
        <span class="tooltiptext">About</span>
      </a>
      <a
        href="#experience"
        onClick={() => setActveNav("#experience")}
        className={`tooltip ${activeNav === "#experience" ? "active" : ""}`}
      >
        <BiBook />
        <span class="tooltiptext">Experience</span>
      </a>
      <a
        href="#portfolio"
        onClick={() => setActveNav("#portfolio")}
        className={`tooltip ${activeNav === "#portfolio" ? "active" : ""}`}
      >
        <BsFillPersonFill />
        <span class="tooltiptext">portfolio</span>
      </a>
      <a
        href="#contact"
        onClick={() => setActveNav("#contact")}
        className={`tooltip ${activeNav === "#contact" ? "active" : ""}`}

      >
        <BiMessageSquareDetail />
        <span class="tooltiptext">Contact</span>

      </a>
    </nav>
  );
};

export default Nav;
