import Navbar from "../../components/navbar/Navbar";
import ProfilePicture from "./assets/ProfilePicture.png";
import codeDescription from "./assets/codeDescription.png";
import styles from "./aboutMe.module.css";
import Card from "../../components/card/Card";
import Chip from "../../components/chips/Chip";
import Button from "../../components/buttons/Button";
import Resume from "./assets/CarlaMartinsResume.pdf";

function AboutMe() {
  return (
    <>
      <Navbar />
      <div className={styles.generalContainer}>
        <section className={styles.intro}>
          <div className={styles.imageWrapper}>
            <img
              src={ProfilePicture}
              className={styles.profilePicture}
              alt="Profile Picture"
              onDragStart={(e) => e.preventDefault()}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <Card
            showImage={false}
            showViewButton={false}
            className={styles.cardIntro}
          >
            <h2>
              UI/UX Engineering, <br />
              <span className={styles.wordFocused}>
                with a human-centered focus.
              </span>
            </h2>
            <p className={styles.description}>
              I anticipate the typical friction points between design and
              development, understanding both the creative vision of design and
              the strict logic of front-end development, I build with the code's
              boundaries already in mind. I build the unified foundation that
              helps both design and engineering teams ship high-quality products
              faster and consistently.
            </p>
            <Chip variant="secondary" className={styles.chipRelocate}>
              Based in Lisbon. Ready to relocate
            </Chip>
          </Card>
        </section>

        <section className={styles.journey}>
          {/* left side */}
          <div className={styles.leftSide}>
            <h2>My Journey</h2>
            <p>
              My journey started in Communication Design, where I learned about storytelling and layout design. Then, I got a Masters degree in Editorial Design, where helped me improve my skills in information architecture and typography across major Portuguese publications. Decided to transition into the digital field, so I completed 2 courses in WebDesign and UI/UX design to acquire the missing digital skills. In my last two experiences, I realized how differently UI/UX and front-end teams approach problem-solving and to bridge the gap between those fields, I decided to study Front-End Engineering. 
              <br></br>This portfolio is the culmination of that entire journey.
            </p>
            <img
              src={codeDescription}
              className={styles.codeDescriptionImg}
              alt="Code Image with a description UI/UX Engineer"
            />
          </div>
          {/* right side */}
          <div className={styles.rightSide}>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <Card variant="secondary" className={styles.cardJourney}>
                  <Chip variant="secondary">2014-2017</Chip>
                  <h3>The Visual Foundation</h3>
                  <p>
                    My journey began in Communication Design. Over these years,
                    including my Bachelor's degree, I mastered visual layouts,
                    composition, and the Adobe ecosystem (Illustrator &
                    Photoshop). This solid foundation gave me a deep comfort
                    with asset creation and visual storytelling that I still
                    rely on today.
                  </p>
                </Card>
              </div>
              <div className={styles.timelineItem}>
                <Card variant="secondary" className={styles.cardJourney}>
                  <Chip variant="secondary">2018-2020</Chip>
                  <h3>Structure and Editorial Design</h3>
                  <p>
                    Driven by a love for typography and layout structure, I
                    pursued a Master's in Editorial Design. I mastered InDesign
                    and collaborated with popular Portuguese newspapers and
                    magazines, refining my eye for complex information
                    architecture, grids, and content hierarchy.
                  </p>
                </Card>
              </div>
              <div className={styles.timelineItem}>
                <Card variant="secondary" className={styles.cardJourney}>
                  <Chip variant="secondary">2018-2020</Chip>
                  <h3>From Print to Digital</h3>
                  <p>
                    Wanting to translate my design roots into the digital world,
                    I completed professional courses in Web Design and UI/UX.
                    While I discovered a strong interest in coding, but UI/UX
                    truly caught my attention. I spent this time building
                    diverse digital products, learning how to shift my focus
                    toward user empathy and interactive experiences.
                  </p>
                </Card>
              </div>
              <div className={styles.timelineItem}>
                <Card variant="secondary" className={styles.cardJourney}>
                  <Chip variant="secondary">2025 - Present</Chip>
                  <h3>Engineering Meets Design</h3>
                  <p>
                    While working on digital projects, I noticed a huge gap
                    between UI/UX design and development. Things that were
                    obvious to me weren't obvious to developers, and I wanted to
                    understand why. To change this, I dove back into coding and
                    graduated from a front-end program in April 2026. This
                    portfolio is the result: a space where I connect the dots of
                    my entire journey, merging communication, editorial layout,
                    UX empathy, and clean code into one single website.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* all */}
        <section className={styles.contact}>
          <Card className={styles.contactCard}>
            <h2>Let's build something together.</h2>
            <p>
              Let's explore how my expertise in front-end code, WCAG
              accessibility standards, and user-centered UI/UX design can
              strengthen your platform's usability and technical foundation.
            </p>
            <div className={styles.buttons}>
              <a href={Resume} download="CarlaMartinsResume.pdf">
                <Button variant="primary" className={styles.btn}>Download Resume</Button>
              </a>
              <Button
                variant="secondary" className={styles.btn}
                onClick={() =>
                  (window.location.href = "mailto:carla.s.ofia@hotmail.com")
                }
              >
                Let's talk
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </>
  );
}

export default AboutMe;
