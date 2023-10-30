import React, { useContext } from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/adiPhoto2.jpg";
import HeaderSocials from "./HeaderSocials";
import { MdNightlight } from "react-icons/md";
import { ModeContext } from "../../ModeContext";

const Header = () => {
  const { mode, toggleMode} = useContext(ModeContext);

  const handleMode = (event) => {
    toggleMode();
  } 

  return (
    <header id="header">
      <div className="container header__container">
        
          <h5>Hello I'm</h5>
          <h1>Aditya Padwal</h1>

        <h5 className="text-light">Full-Stack Developer | Cloud | DevOps</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  );
};

export default Header;
