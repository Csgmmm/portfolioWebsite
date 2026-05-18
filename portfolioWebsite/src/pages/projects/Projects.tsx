import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import styles from "./projects.module.css";

import { projects } from "../../types/projectsData";

function Projects() {
  return (
    <>
      <section>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.sectionFrontEnd}>
            <h5>FRONT-END development</h5>

            <div className={styles.cardsContainer}>
              {projects
                .filter(
                  (project) => project.category?.includes("Front-End Development"),
                )
                .map((project) => (
                  <div key={project.id} className={styles.card}>
                    <Card project={project} />
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.sectionUIUX}>
            <h5>UI/UX Designer</h5>
            <div className={styles.cardsContainer}>
                {projects
                  .filter((project) => project.category?.includes("UI/UX Design"))
                  .map((project) => (
                    <div key={project.id} className={styles.card}>
                      <Card project={project} />
                    </div>
                  ))}

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
