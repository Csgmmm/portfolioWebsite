import styles from "./footer.module.css";
import { Smartphone, Send } from "lucide-react";
import linkedinLogo from "../../pages/homepage/assets/linkedinLogo.svg";
import github from "../../pages/homepage/assets/github.svg";

function Footer() {
  return (
    <footer>
      <div className={styles.socialMedia}>
        <div className={styles.socialMediaLogos}>
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
        </div>

        <section className={styles.privateInfo}>
          <a href="tel:+351910061795" className={styles.emailLink}>
            <Smartphone />
            <p>+351 910 061 795</p>
          </a>

          <a
            href="mailto:carla.s.ofia@hotmail.com"
            className={styles.emailLink}
          >
            <Send />
            <p>carla.s.ofia@hotmail.com</p>
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
