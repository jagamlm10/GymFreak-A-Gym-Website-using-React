import "./navbar.css";
import Logo from "../images/logo.png";
import { links } from "../data";
import { Link, NavLink } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const NavBar = () => {
  const [isNavShowing, setisNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" onClick={() => setisNavShowing(false)}>
          <img className="logo" src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav_links ${isNavShowing ? `showNav` : `hideNav`}`}>
          {links.map(({ path, name }, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) => (isActive ? "active_nav" : "")}
                to={path}
                onClick={() => setisNavShowing(false)}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setisNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <VscThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
