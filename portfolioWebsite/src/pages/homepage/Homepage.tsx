import {
  CodeXml,
  LayoutTemplate,
  MousePointerClick,
  PersonStanding,
} from "lucide-react";
import Chip from "../../components/chips/Chip";
import Navbar from "../../components/navbar/Navbar";
import styles from "./homepage.module.css";
import profilePic from "./assets/profilePic.png";
import figma from "./assets/figma.svg";
import js from "./assets/js.svg";
import react from "./assets/react.svg";
import typescript from "./assets/typescript.svg";
import miro from "./assets/miro.svg";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import vscode from "./assets/vscode.svg";
import scrumAgile from "./assets/scrumAgile.svg";
import commandLine from "./assets/commandLine.svg";
import github from "./assets/github.svg";
import illustrator from "./assets/illustrator.svg";
import photoshop from "./assets/photoshop.svg";
import sass from "./assets/sass.svg";
import Card from "../../components/card/Card";
import yumyum from "./assets/yumyum.png";
import babyTracker from "./assets/babyTracker.png";
import feminDashboard from "./assets/feminDashboard.png";
import Button from "../../components/buttons/Button";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  vs,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState, useEffect } from "react";

function Homepage() {
  const code = `<div className="loginInfo">
  <p>luisa@email.com / pw: luisa</p>
  <p>maria@email.com / pw: maria</p>
  <p>joana@email.com / pw: joana</p>
</div>`;

  const [isDark, setIsDark] = useState(
    document.documentElement.getAttribute("data-theme") === "dark",
  );
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section className={styles.headerContainer}>
        <Navbar />
        <div className={styles.header}>
          <div className={styles["title-Pic"]}>
            <div className={styles.chip}>
              <Chip variant="primary">Hello!</Chip>
            </div>
            <span className={styles["chip-title"]}>
              <h1>
                I'm <span className={styles.name}>Carla</span>
                <br className={styles.hideOnMobile} />
                UI/UX Designer <br className={styles.hideOnMobile} />& Front-end
                Engineer
              </h1>
            </span>
            <div>
              <img
                className={styles.profilePic}
                src={profilePic}
                alt="Foto de Perfil"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.contentContainer}>
        <div className={styles.subTitle}>
          <h5>Expertise</h5>
        </div>
        <div className={styles.contentDetailsContainer}>
          <h2>What I bring to the table</h2>
          <span className={styles.detailsContainer}>
            <span className={styles.details}>
              <LayoutTemplate className={styles.icon} />
              <h4>UI/UX</h4>
            </span>
            <span className={styles.details}>
              <CodeXml className={styles.icon} />
              <h4>Web Apps</h4>
            </span>
            <span className={styles.details}>
              <PersonStanding className={styles.icon} />
              <h4>Accessibility</h4>
            </span>
            <span className={styles.details}>
              <MousePointerClick className={styles.icon} />
              <h4>Prototyping</h4>
            </span>
          </span>

          {/* tech skills */}
          <div className={styles.stacksContainer}>
            <span className={styles.subTitle}>
              <h5>tech stack</h5>
            </span>
            <span className={styles.stacksDetails}>
              <div className={styles.eachStack}>
                <span className={styles.iconStacks}>
                  <img src={figma} alt="Figma" />
                </span>
                <p>Figma</p>
              </div>
              <div className={styles.eachStack}>
                <span className={styles.iconStacks}>
                  <img src={js} alt="Javascript" />
                </span>
                <p>Javascript</p>
              </div>
              <div className={styles.eachStack}>
                <span className={styles.iconStacks}>
                  <img src={react} alt="React" />
                </span>
                <p>React</p>
              </div>
              <div className={styles.eachStack}>
                <span className={styles.iconStacks}>
                  <img src={typescript} alt="Typescript" />
                </span>
                <p>Typescript</p>
              </div>
              <div className={styles.eachStack}>
                <span className={styles.iconStacks}>
                  <img src={miro} alt="miro" />
                </span>
                <p>Miro</p>
              </div>
              <div className={styles.eachStack}>
                <span className={styles.iconStacks}>
                  <img src={html} alt="html" />
                </span>
                <p>HTML</p>
              </div>
              <div className={styles.eachStack}>
                <span className={styles.iconStacks}>
                  <img src={css} alt="css" />
                </span>
                <p>CSS</p>
              </div>
            </span>

            {/*  */}

            <span className={styles.subTitle}>
              <h5>other skills</h5>
            </span>
            <span className={styles.stacksDetails}>
              <div className={styles.eachStack}>
                <span className={styles.iconStacks}>
                  <img src={vscode} alt="visual studio code" />
                </span>
                <p>Visual Studio Code</p>
              </div>
              <div className={styles.eachStack}>
                <span className={styles.iconStacks}>
                  <img src={scrumAgile} alt="agile and scrum" />
                </span>
                <p>Agile & Scrum</p>
              </div>
              <div className={styles.eachStack}>
                <span className={styles.iconStacks}>
                  <img src={commandLine} alt="command line" />
                </span>
                <p>Command Line</p>
              </div>
              <div className={styles.eachStack}>
                <span className={styles.iconStacks}>
                  <img src={github} alt="github" />
                </span>
                <p>GitHub</p>
              </div>
              <div className={styles.eachStack}>
                <span className={styles.iconStacks}>
                  <img src={illustrator} alt="illustrator" />
                </span>
                <p>Illustrator</p>
              </div>
              <div className={styles.eachStack}>
                <span className={styles.iconStacks}>
                  <img src={photoshop} alt="photoshop" />
                </span>
                <p>Photoshop</p>
              </div>
              <div className={styles.eachStack}>
                <span className={styles.iconStacks}>
                  <img src={sass} alt="sass" />
                </span>
                <p>SASS</p>
              </div>
            </span>
          </div>

          {/* projects */}
          <div className={styles.projects}>
            <span className={styles.subTitle}>
              <h5>projects</h5>
            </span>
            <div className={styles.cardContainer}>
              <Card>
                <img
                  src={yumyum}
                  className={styles.imgProject}
                  alt="Asian Food Delivery App"
                />
                <div className={styles.infoContainer}>
                  <h4>Asian Food Delivery App</h4>
                  <div className={styles.containerBtn}>
                    <Button variant="primary" className={styles.btnCards}>
                      View prototype
                    </Button>
                  </div>
                  <div className={styles.chipsContainer}>
                    <Chip variant="secondary">Figma</Chip>
                    <Chip variant="secondary">photoshop</Chip>
                  </div>
                </div>
              </Card>
              <Card>
                <img
                  src={feminDashboard}
                  className={styles.imgProject}
                  alt="feminine dashboard"
                />
                <div className={styles.infoContainer}>
                  <h4>Feminine Dashboard</h4>
                  <div className={styles.containerBtn}>
                    <Button
                      variant="primary"
                      onClick={() =>
                        window.open(
                          "https://feminine-dashboard.vercel.app/",
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                      className={styles.btnCards}
                    >
                      Live Website
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() =>
                        window.open(
                          "https://github.com/Csgmmm/feminine-dashboard.git",
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                      className={styles.btnCards}
                    >
                      Code GitHub
                    </Button>
                  </div>
                  <div className={styles.chipsContainer}>
                    <Chip variant="secondary">Figma</Chip>
                    <Chip variant="secondary">react</Chip>
                    <Chip variant="secondary">javascript</Chip>
                    <Chip variant="secondary">typescript</Chip>
                    <Chip variant="secondary">css</Chip>
                    <Chip variant="secondary">html</Chip>
                  </div>
                  <SyntaxHighlighter
                    language="tsx"
                    style={isDark ? vscDarkPlus : vs}
                    customStyle={{
                      border: "none",
                      boxShadow: "none",
                      margin: "0",
                      padding: "0",
                    }}
                  >
                    {code}
                  </SyntaxHighlighter>
                </div>
              </Card>

              <Card>
                <img
                  src={babyTracker}
                  className={styles.imgProject}
                  alt="baby tracker"
                />
                <div className={styles.infoContainer}>
                  <h4>Baby Tracker App</h4>
                  <div className={styles.containerBtn}>
                    <Button variant="primary" className={styles.btnCards}>
                      View prototype
                    </Button>
                  </div>
                  <div className={styles.chipsContainer}>
                    <Chip variant="secondary">Figma</Chip>
                    <Chip variant="secondary">photoshop</Chip>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
