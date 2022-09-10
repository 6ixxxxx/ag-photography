import "./NavbarStyles.css";
import React, { useState } from 'react'
import logo from "../assets/AG.png";
import {Link} from "react-scroll";
import {MenuIcon, XIcon, SunIcon, MoonIcon } from "@heroicons/react/solid"

const Navbar = ({CurrentTheme, changeTheTheme}) => {
  const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 1) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    
    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>

        <img className="logo" src={logo}/>

          <ul className={click ? "navi active":"navi"}>
            <li><Link  to="home" spy={true} smooth={true}>Home</Link></li>
            <li><Link  to="portfolio" spy={true} smooth={true}>Portfolio</Link></li>
            <li><Link  to="about" spy={true} smooth={true}>About us</Link></li>
            <li><Link  to="faqs" spy={true} smooth={true}>Faqs</Link></li>
          </ul>
            <button className="btnn"
            onClick={changeTheTheme}>
              {(CurrentTheme === "dark") ? (<SunIcon className="h-8 w-8 text-button hover:scale-110"/>) 
                                          : (<MoonIcon className="h-8 w-5 text-secondary hover:scale-110"/>)}
            </button>

          <div className="hamburger" onClick={handleClick}>
                {!click ?
                (<MenuIcon className="h-8 w-5 text-tertiary"/>): 
                (<XIcon className="h-8 w-5 text-tertiary"/>) }
            </div>
    </div>
  )
}

export default Navbar