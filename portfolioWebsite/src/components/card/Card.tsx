import { ArrowRight } from "lucide-react";
import Button from "../buttons/Button";
import Chip from "../chips/Chip";
import styles from "./card.module.css";
import { type IProjectData } from "../../types/projectsData";

interface CardProps {
  project?: IProjectData;
  children?: React.ReactNode;
}

const Card = ({ project, children }: CardProps) => {
   if (children) {
    return <div className={styles.card}>{children}</div>;
  }
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h4>{project?.title}</h4>

        <Button variant="link">
          View Project <ArrowRight />
        </Button>
      </div>

      <div className={styles.containerCard}>
        <img
          className={styles.portfolioImg}
          src={project?.mainImage}
          alt={project?.title}
        />

        <div className={styles.infoContainer}>
          <span className={styles.containerBtn}>
            {project?.liveUrl && (
              <Button variant="primary" className={styles.btnCards}>
                <a href={project.liveUrl} target="_blank">
                  Live Website
                </a>
              </Button>
            )}
            {project?.githubUrl && (
              <Button variant="primary" className={styles.btnCards}>
                <a href={project.githubUrl} target="_blank">
                  GitHub Code
                </a>
              </Button>
            )}
            {project?.appStoreUrl && (
              <Button variant="primary" className={styles.btnCards}>
                <a href={project.appStoreUrl} target="_blank">
                  AppStore
                </a>
              </Button>
            )}
            {project?.prototypeUrl && (
              <Button variant="primary" className={styles.btnCards}>
                <a href={project.prototypeUrl} target="_blank">
                  Prototype
                </a>
              </Button>
            )}
            {project?.behanceUrl && (
              <Button variant="primary" className={styles.btnCards}>
                <a href={project.behanceUrl} target="_blank">
                  Behance Project
                </a>
              </Button>
            )}
          </span>

          <span className={styles.chipsContainer}>
            {project?.chips.map((chip) => (
              <Chip key={chip} variant="secondary">
                {chip}
              </Chip>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
