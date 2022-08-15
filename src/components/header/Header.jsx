import "./header.css";
import React, { useEffect, useState } from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { useStateContext } from "../../context/stateContext";
import { client, urlFor } from "../../lib/client";

const Header = () => {
  const {
    user: { developer, name },
  } = useStateContext();
  return (
    <header id="Home">
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>{name} </h1>
        <h5 className="text-light">{developer}</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src="./assets/me.jpg"></img>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
export default Header;
