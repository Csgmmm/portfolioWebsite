import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import styles from "./projects.module.css";
import { projects } from "../../types/projectsData";
import Button from "../../components/buttons/Button";

function Projects() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.sectionFrontEnd}>
          <Button variant="primary">Hi</Button>
          <Button variant="primary">Hi</Button>
          <Button variant="primary">Hi</Button>

          <div className={styles.cardsContainer}>
            {projects
              .filter((project) =>
                project.category?.includes("Front-End Development"),
              )
              .map((project) => (
                <Card key={project.id} project={project} />
              ))}
          </div>
        </div>
        <div className={styles.sectionUIUX}>
          <h5>UI/UX Designer</h5>
          <div className={styles.cardsContainer}>
            {projects
              .filter((project) => project.category?.includes("UI/UX Design"))
              .map((project) => (
                <div key={project.id}>
                  <Card project={project} className={styles.card} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
