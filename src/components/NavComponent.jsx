import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { titleStyle } from "./ComponentsCSS";
import {
  headerStyle,
  navStyle,
  navUlStyle,
  defaultLinkStyle,
  activeLinkStyle,
  toggleStyle,
  hamIconStyle,
  mobileDivStyle,
  mobDefaultStyle,
  mobActiveStyle,
} from "../styles/NavCompStyles";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";

function NavComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={headerStyle}>
      <nav className={navStyle}>
        <Link to="/" className={titleStyle}>
          Joel Verano
        </Link>

        {/* Desktop Navigation */}
        <ul className={navUlStyle}>
          {navLinks.map((link) => (
            <li className="list-none" key={link.path}>
              <Link
                to={link.path}
                className={
                  isActive(link.path)
                    ? { activeLinkStyle }
                    : { defaultLinkStyle }
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className={toggleStyle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={hamIconStyle}></span>
          <span className={hamIconStyle}></span>
          <span className={hamIconStyle}></span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={mobileDivStyle}>
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={
                    isActive(link.path) ? mobActiveStyle : mobDefaultStyle
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default NavComponent;
