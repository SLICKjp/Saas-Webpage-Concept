import "./navbar.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {

    setToggle(!toggle);
  }
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="main-menu">
          <ul className={toggle ? "nav-links-open" : "nav-links"}>
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
          </ul>
          <FontAwesomeIcon icon={toggle ? faXmark : faBars} className="hamburger-icon" onClick={handleClick} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
