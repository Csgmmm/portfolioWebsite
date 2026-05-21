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
    <>
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
      <nav className={`nav ${isOpen ? "is-open" : ""}`}>
        <div className={`menu-icon ${isOpen ? "is-open" : ""}`}>
          <NameLogo />
          <Button onClick={() => setIsOpen(!isOpen)} variant="tertiary">
            <Menu />
          </Button>
        </div>

        <div className={`nav-content ${isOpen ? "is-open" : ""}`}>
          <span className="logo">
            <Link to="/homepage">
              <NameLogo />
            </Link>
          </span>
          <div className="links">
            <div className={`menuOpened ${isOpen ? "is-open" : ""}`}>
              <Button
                onClick={() => setIsOpen((prev) => !prev)}
                variant="tertiary"
              >
                <Menu />
              </Button>
            </div>

            <Link to="/homepage" onClick={() => setIsOpen(false)}>
              <Button
                variant="tertiary"
                isActive={location.pathname === "/homepage"}
              >
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
          <Button
            variant="primary"
            onClick={toggleTheme}
            className="btnTheme"
            icon={<SunMoon />}
          >
            <span className="theme">Theme</span>
          </Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
