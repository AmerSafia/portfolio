import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Protofile from "./components/protofile/Protofile";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import {StateContext} from './context/stateContext'
const App = () => {
  return (
    <StateContext>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Protofile />
      <Contact />
      <Footer />
    </StateContext>
  );
};
export default App;
