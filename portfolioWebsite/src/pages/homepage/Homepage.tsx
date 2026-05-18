import {
  ArrowRight,
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
import Button from "../../components/buttons/Button";
import { Link } from "react-router-dom";
import { projects } from "../../types/projectsData";

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
        </div>
        {/* projects */}
        <div>
          <span className={styles["title-link"]}>
            <h5>projects</h5>
            <Button variant="link" className={styles.btnLink}>
              <Link to="/projects">
                View Projects
                <ArrowRight />
              </Link>
            </Button>
          </span>
          <div className={styles.cardContainer}>
            {projects
              .filter((project) => project.category?.includes("Homepage"))
              .map((project) => (
                <Card key={project.title} project={project} />
              ))}
          </div>

          {/* recommendations */}
          <div>
            <span className={styles["title-link"]}>
              <h5>Linkedin recommendations</h5>
              <Button variant="link" className={styles.btnLink}>
                <a
                  href="https://www.linkedin.com/in/carlasofiagm/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View LinkedIn
                  <ArrowRight />
                </a>
              </Button>
            </span>
            <div className={styles.cardContainer}>
              <Card>
                <div className={styles.containerText}>
                  <p className={styles.paragraph}>
                    “I had the pleasure of working with Carla on the SNS 24
                    project, where she contributed as a designer. From day one,
                    she impressed us with her speed and efficiency, consistently
                    meeting tight deadlines without ever compromising on
                    quality. (..) always striking the right balance between
                    aesthetics, functionality, and user experience. (..)”
                  </p>
                  <div className={styles.infoPerson}>
                    <p className={styles.personsName}>Patricia Wittine</p>
                    <p className={styles.personsJob}>Project Manager</p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className={styles.containerText}>
                  <p className={styles.paragraph}>
                    “(..) Her creativity and efficiency are evident in every
                    project, offering innovative solutions and demonstrating a
                    meticulous approach to each task. She is resilient, capable
                    of overcoming challenges with determination and adapting
                    easily to dynamic situations. Her ability to work in a team
                    is notable, creating a collaborative environment where her
                    dynamism and high technical performance shine. (..)”
                  </p>
                  <div className={styles.infoPerson}>
                    <p className={styles.personsName}>Pedro Gómez</p>
                    <p className={styles.personsJob}>Project Manager</p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className={styles.containerText}>
                  <p className={styles.paragraph}>
                    “I had the pleasure of studying alongside Carla during our
                    Front-End Engineer bootcamp, and it was great working with
                    her throughout the course. She is a strong team player and
                    consistently very proactive. I was especially impressed with
                    the project she developer, it was clear, well-structured and
                    thoughtfully executed. If I ever had the opportunity to work
                    with her in a professional setting, I world be genuinely
                    happy to have her on my team. Any workplace would be lucky
                    to have someone with her attitude, dedication and
                    collaborative spirit. “
                  </p>
                  <div className={styles.infoPerson}>
                    <p className={styles.personsName}>Beatriz Gabriel</p>
                    <p className={styles.personsJob}>UI/UX Designer</p>
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
