import {
  CodeXml,
  LayoutTemplate,
  MousePointerClick,
  PersonStanding,
} from "lucide-react";
import Chip from "../../components/chips/Chip";
import Navbar from "../../components/navbar/Navbar";
import styles from "./homepage.module.css";
import profilePic from "./profilePic.png";
import figma from "./figma.svg";
import js from "./js.svg";
import react from "./react.svg";
import typescript from "./typescript.svg";
import miro from "./miro.svg";
import html from "./html.svg";
import css from "./css.svg";
import vscode from "./vscode.svg";
import scrumAgile from "./scrumAgile.svg";
import commandLine from "./commandLine.svg";
import github from "./github.svg";
import illustrator from "./illustrator.svg";
import photoshop from "./photoshop.svg";
import sass from "./sass.svg";

function Homepage() {
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
        <span className={styles.subTitle}>
          <h5>Expertise</h5>
        </span>
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

          <span className={styles.subTitle}>
            <h5>tech stack</h5>
          </span>
          <div className={styles.stacksContainer}>
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
        </div>
      </section>
    </>
  );
}

export default Homepage;
