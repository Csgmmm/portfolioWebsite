import styles from "./footer.module.css";
import { Smartphone, Send } from "lucide-react";
import linkedinLogo from "../../pages/homepage/assets/linkedinLogo.svg";
import github from "../../pages/homepage/assets/github.svg";


function Footer() {
  return (
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
  );
}

export default Footer;