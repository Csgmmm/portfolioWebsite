import {
  ArrowRight,
  CodeXml,
  LayoutTemplate,
  MousePointerClick,
  PersonStanding,
  Send,
  Smartphone,
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
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import linkedinLogo from "./assets/linkedinLogo.svg";
import { Link } from "react-router-dom";

function Homepage() {
  const code = `<div className="loginInfo">
  <p>luisa@email.com / pw: luisa</p>
  <p>maria@email.com / pw: maria</p>
  <p>joana@email.com / pw: joana</p>
</div>`;

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
          <div className={styles["projectsRecomenContainer"]}>
            <span className={styles["title-link"]}>
              <h5>projects</h5>
              <Button variant="link" className={styles.btnLink}>
                <Link to="/projects"  >
                  View Projects
                  <ArrowRight />
                </Link>
              </Button>
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
                  <span className={styles.containerBtn}>
                    <Button variant="primary" className={styles.btnCards}>
                      <a
                        href="https://www.figma.com/proto/bc78eK6Kvi0658WAZmmFoI/yumyum?node-id=4-333&p=f&viewport=3%2C294%2C0.13&t=1TKBUC7W5dZf2h1W-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A333&page-id=1%3A2"
                        target="_blank"
                      >
                        View prototype
                      </a>
                    </Button>
                  </span>
                  <span className={styles.chipsContainer}>
                    <Chip variant="secondary">Figma</Chip>
                    <Chip variant="secondary">photoshop</Chip>
                  </span>
                </div>
                <span className={styles.btnProject}>
                  <Button variant="link">
                    View Project
                    <ArrowRight />
                  </Button>
                </span>
              </Card>

              <Card>
                <img
                  src={feminDashboard}
                  className={styles.imgProject}
                  alt="feminine dashboard"
                />
                <div className={styles.infoContainer}>
                  <h4>Feminine Dashboard</h4>
                  <span className={styles.containerBtn}>
                    <Button variant="primary" className={styles.btnCards}>
                      <a
                        href="https://feminine-dashboard.vercel.app/"
                        target="_blank"
                        className={styles.btnCards}
                      >
                        Live Website
                      </a>
                    </Button>
                    <Button variant="primary" className={styles.btnCards}>
                      <a
                        href="https://github.com/Csgmmm/feminine-dashboard"
                        target="_blank"
                        className={`${styles.button} ${styles.btnCards}`}
                      >
                        Code GitHub
                      </a>
                    </Button>
                  </span>
                  <span className={styles.chipsContainer}>
                    <Chip variant="secondary">Figma</Chip>
                    <Chip variant="secondary">react</Chip>
                    <Chip variant="secondary">javascript</Chip>
                    <Chip variant="secondary">typescript</Chip>
                    <Chip variant="secondary">css</Chip>
                    <Chip variant="secondary">html</Chip>
                  </span>
                  <div className={styles.codeSyntax}>
                    <SyntaxHighlighter
                      language="tsx"
                      style={vscDarkPlus}
                      wrapLongLines={true}
                      codeTagProps={{
                        style: {
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-all",
                        },
                      }}
                      customStyle={{
                        border: "none",
                        boxShadow: "none",
                        margin: "0",
                        padding: "0",
                        background: "none",

                        width: "100%",
                      }}
                    >
                      {code}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <span className={styles.btnProject}>
                  <Button variant="link">
                    View Project
                    <ArrowRight />
                  </Button>
                </span>
              </Card>

              <Card>
                <img
                  src={babyTracker}
                  className={styles.imgProject}
                  alt="baby tracker"
                />
                <div className={styles.infoContainer}>
                  <h4>Baby Tracker App</h4>
                  <span className={styles.containerBtn}>
                    <Button variant="primary" className={styles.btnCards}>
                      <a
                        href="https://www.figma.com/proto/WWQG1zJ0Hl0bcocvW0S3GR/Baby-app?node-id=66-1059&p=f&viewport=430%2C258%2C0.19&t=2lWgQEFbnqYfN6BA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=66%3A1059&page-id=0%3A1"
                        target="_blank"
                        className={styles.btnCards}
                      >
                        View prototype
                      </a>
                    </Button>
                  </span>
                  <span className={styles.chipsContainer}>
                    <Chip variant="secondary">Figma</Chip>
                    <Chip variant="secondary">photoshop</Chip>
                  </span>
                </div>
                <span className={styles.btnProject}>
                  <Button variant="link">
                    View Project
                    <ArrowRight />
                  </Button>
                </span>
              </Card>
            </div>
          </div>

          {/* recommendations */}
          <div className={styles["projectsRecomenContainer"]}>
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
      <footer>
        <div className={styles.socialMedia}>
          <span className={styles.socialMediaIcon}>
            <a
              href="https://www.linkedin.com/in/carlasofiagm/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <img src={linkedinLogo} alt="Linkedin" />
            </a>
          </span>
          <span className={styles.socialMediaIcon}>
            <a
              href="https://github.com/Csgmmm"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <img src={github} alt="github Logo" />
            </a>
          </span>
          <p className={styles.privateInfo}>
            <Smartphone /> +351 910 061 795
          </p>
          <p className={styles.privateInfo}>
            <Send />
            <a
              href="mailto:carla.s.ofia@hotmail.com"
              className={styles.emailLink}
            >
              carla.s.ofia@hotmail.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Homepage;
