import { Link, useLocation } from "react-router-dom";
import NameLogo from "./NameLogo";
import "./navbar.css";
import Button from "../buttons/Button";
import { SunMoon } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      current === "dark" ? "light" : "dark", //"If the current theme is dark, switch to light. If it's anything else, switch to dark."
    );
  };
  return (
    <nav className="nav">
      <NameLogo />
      <div className="links">
        <Link to={"/"}>
          <Button variant="tertiary" isActive={location.pathname === "/"}>
            Homepage
          </Button>
        </Link>
        <Link to={"/projects"}>
          <Button
            variant="tertiary"
            isActive={location.pathname === "/projects"}
          >
            Projects
          </Button>
        </Link>
        <Link to={"/aboutme"}>
          <Button
            variant="tertiary"
            isActive={location.pathname === "/aboutme"}
          >
            About me
          </Button>
        </Link>
      </div>
      <Button variant="secondary" onClick={toggleTheme}>
        <span className="theme">
          <SunMoon />
          Theme
        </span>
      </Button>
    </nav>
  );
}

export default Navbar;
