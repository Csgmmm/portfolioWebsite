import Chip from "../../components/chips/Chip";
import Navbar from "../../components/navbar/Navbar";
import styles from "./homepage.module.css";
import profilePic from "./profilePic.png";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className={styles.header}>
        <div className={styles["title-Pic"]}>
            <div className={styles.chip}>
              <Chip variant="primary">Hello!</Chip>
            </div>
          <h1 className={styles["chip-title"]}>
            I'm <span className={styles.name}>Carla</span>
            <br className={styles.hideOnMobile} />
            UI/UX Designer <br className={styles.hideOnMobile} />& Front-end
            Engineer
          </h1>
          <div>
            <img
              className={styles.profilePic}
              src={profilePic}
              alt="Foto de Perfil"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
