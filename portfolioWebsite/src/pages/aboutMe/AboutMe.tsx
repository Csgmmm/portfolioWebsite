import Navbar from "../../components/navbar/Navbar";
import ProfilePicture from "./assets/ProfilePicture.png";
import styles from "./aboutMe.module.css";
import Card from "../../components/card/Card";
import Chip from "../../components/chips/Chip";

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
            <Chip variant="secondary" className={styles.chipRelocate}>
              Based in Lisbon. Ready to relocate.
            </Chip>
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
          </Card>
        </section>
      </div>
    </>
  );
}

export default AboutMe;
