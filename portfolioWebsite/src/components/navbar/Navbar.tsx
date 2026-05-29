import { Link, useLocation } from "react-router-dom";
import NameLogo from "./NameLogo";
import "./navbar.css";
import Button from "../buttons/Button";
import { ArrowRight, Menu, SunMoon, X } from "lucide-react";
import { useState } from "react";
import linkedinLogo from "../../pages/homepage/assets/linkedinLogo.svg";
import github from "../../pages/homepage/assets/github.svg";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/homepage", label: "Homepage" },
    { to: "/projects", label: "Projects" },
    { to: "/aboutme", label: "About me" },
  ];

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      current === "dark" ? "light" : "dark", //o current é dark? então light, senão dark. Nao esqiecer de colocar no index.html o atributo data-theme="dark" para o tema dark ser o padrão
    );
  };
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

              <div className="nav-footer">
                <Button
                  variant="secondary"
                  onClick={toggleTheme}
                  className="btnTheme"
                  icon={<SunMoon />}
                >
                  <span className="theme">Theme</span>
                </Button>

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
      </nav>
    </>
  );
}

export default Navbar;
