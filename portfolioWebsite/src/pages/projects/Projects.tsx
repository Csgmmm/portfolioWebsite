import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import styles from "./projects.module.css";
import portfolioImg from "./assets/portfolioImg.png";
import feminineDash from "../homepage/assets/feminDashboard.png";
import Button from "../../components/buttons/Button";
import { ArrowRight } from "lucide-react";
import Chip from "../../components/chips/Chip";

function Projects() {
  return (
    <>
      <section>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.section}>
            <h5>FRONT-END development</h5>

            <div className={styles.cardsContainer}>
              <div className={styles.card}>
                <Card>
                  <div className={styles.title}>
                    <h4>Portfolio</h4>
                  </div>
                  <div className={styles.containerCard}>
                    <img
                      className={styles.portfolioImg}
                      src={portfolioImg}
                      alt="portfolio header image"
                    />
                    <div className={styles.infoContainer}>
                      <span className={styles.containerBtn}>
                        <Button variant="primary" className={styles.btnCards}>
                          <a
                            href="https://github.com/Csgmmm/portfolioWebsite"
                            target="_blank"
                            className={`${styles.button} ${styles.btnCards}`}
                          >
                            GitHub Code
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
                    </div>
                  </div>
                </Card>
              </div>
              <div className={styles.card}>
                <Card>
                  <div className={styles.title}>
                    <h4>Feminine Dashboard</h4>
                    <Button variant="link">
                      View Project
                      <ArrowRight />
                    </Button>
                  </div>
                  <div className={styles.containerCard}>
                    <img
                      className={styles.otherProjectImg}
                      src={feminineDash}
                      alt="feminine dashboard header image"
                    />
                    <div className={styles.infoContainer}>
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
                            GitHub Code
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
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <h5>UI/UX Designer</h5>
            <div className={styles.cardsContainer}>
              <div className={styles.card}>
                <Card>
                  <div className={styles.title}>
                    <h4>Portfolio</h4>
                  </div>
                  <div className={styles.containerCard}>
                    <img
                      className={styles.portfolioImg}
                      src={portfolioImg}
                      alt="portfolio header image"
                    />
                    <div className={styles.infoContainer}>
                      <span className={styles.containerBtn}>
                        <Button variant="primary" className={styles.btnCards}>
                          <a
                            href="https://github.com/Csgmmm/portfolioWebsite"
                            target="_blank"
                            className={`${styles.button} ${styles.btnCards}`}
                          >
                            GitHub Code
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
                    </div>
                  </div>
                </Card>
              </div>
              <div className={styles.card}>
                <Card>
                  <div className={styles.title}>
                    <h4>Feminine Dashboard</h4>
                    <Button variant="link">
                      View Project
                      <ArrowRight />
                    </Button>
                  </div>
                  <div className={styles.containerCard}>
                    <img
                      className={styles.otherProjectImg}
                      src={feminineDash}
                      alt="feminine dashboard header image"
                    />
                    <div className={styles.infoContainer}>
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
                            GitHub Code
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
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
