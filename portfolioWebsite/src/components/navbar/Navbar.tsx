import { Link, useLocation } from "react-router-dom";
import NameLogo from "./NameLogo";
import "./navbar.css";
import Button from "../buttons/Button";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import linkedinLogo from "../../pages/homepage/assets/linkedinLogo.svg";
import github from "../../pages/homepage/assets/github.svg";
import Toggle from "../toggle/Toggle";

interface NavbarProps {
  theme: string;
  onToggleTheme: () => void;
}

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/homepage", label: "Homepage" },
    { to: "/projects", label: "Projects" },
    { to: "/aboutme", label: "About me" },
  ];


  return (
    <>
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

      {/* nav */}
      <nav className="nav">
        <div className="menu-icon">
          <Link to="/homepage">
            <NameLogo />
          </Link>
          <Button onClick={() => setIsOpen(!isOpen)} variant="tertiary">
            <Menu />
          </Button>
        </div>

        {/* nav content */}
        <div className={`nav-content ${isOpen ? "is-open" : ""}`}>
          <span className="logo">
            <Link to="/homepage">
              <NameLogo />
            </Link>
          </span>

          <div className="btnClose-Links">
            <div className="closeBtn">
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                <X size={24} />
              </Button>
            </div>

            <div className="links-divider">
              <div className="links">
                {links.map((link) => (
                  <Link to={link.to} key={link.to}>
                    <Button
                      variant="tertiary"
                      isActive={location.pathname === link.to}
                    >
                      {link.label}
                      <ArrowRight className="iconLinks" />
                    </Button>
                  </Link>
                ))}
              </div>

              <div>
                <Toggle theme={theme} toggleTheme={onToggleTheme} />
                <div className="nav-footer">
                  <div className="socialMediaLogos">
                    <span className="socialMediaIcon">
                      <a
                        href="https://www.linkedin.com/in/carlasofiagm/"
                        target="_blank"
                        rel="noreferrer"
                        className="socialLink"
                      >
                        <img src={linkedinLogo} alt="Linkedin" />
                      </a>
                    </span>
                    <span className="socialMediaIcon">
                      <a
                        href="https://github.com/Csgmmm"
                        target="_blank"
                        rel="noreferrer"
                        className="socialLink"
                      >
                        <img src={github} alt="github Logo" />
                      </a>
                    </span>
                  </div>

                  <h6>© 2026 DESIGNED & ENGINEERED</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
