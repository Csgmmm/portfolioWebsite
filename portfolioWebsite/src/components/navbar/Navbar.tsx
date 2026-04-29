import { Link, useLocation } from "react-router-dom";
import NameLogo from "./NameLogo";
import "./navbar.css";
import Button from "../buttons/Button";
import { Menu, SunMoon } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      current === "dark" ? "light" : "dark", //If the current theme is dark, switch to light. If it's anything else, switch to dark
    );
  };
  return (
    <nav className="nav">
      <div className="menu-icon">
        <NameLogo />
        <Button onClick={() => setIsOpen(!isOpen)} variant="tertiary">
          <Menu />
        </Button>
      </div>

      <div className={`nav-content ${isOpen ? "is-open" : ""}`}>
        <span className="logo">
          <NameLogo />
        </span>
        <div className="links">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <Button variant="tertiary" isActive={location.pathname === "/"}>
              Homepage
            </Button>
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            <Button
              variant="tertiary"
              isActive={location.pathname === "/projects"}
            >
              Projects
            </Button>
          </Link>
          <Link to="/aboutme" onClick={() => setIsOpen(false)}>
            <Button
              variant="tertiary"
              isActive={location.pathname === "/aboutme"}
            >
              About me
            </Button>
          </Link>
        </div>
        <Button variant="primary" onClick={toggleTheme} className="btnTheme">
          <span className="theme">
            <SunMoon />
            Theme
          </span>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
