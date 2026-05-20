import { ArrowRight } from "lucide-react";
import Button from "../buttons/Button";
import Chip from "../chips/Chip";
import styles from "./card.module.css";
import { type IProjectData } from "../../types/projectsData";
import { Link } from "react-router-dom";

interface CardProps {
  project?: IProjectData;
  children?: React.ReactNode;
  className?: string;
  showViewButton?: boolean;
  showImage?: boolean;
}

const Card = ({
  project,
  children,
  className,
  showViewButton = true,
  showImage = true
}: CardProps) => {
  if (children) {
    return <div className={className || styles.card}>{children}</div>;
  }
  return (
     <div className={`${styles.card} ${className || ''}`}>
      <div className={styles.title}>
        <h4>{project?.title}</h4>

        {showViewButton && (
          <Link to={`/project/${project?.id}`}>
            <Button variant="link">
              View Project <ArrowRight />
            </Button>
          </Link>
        )}
      </div>

      <div className={styles.containerCard}>
         {showImage && (
        <img
          className={styles.img}
          src={project?.mainImage}
          alt={project?.title}
        /> )}

        <div className={styles.infoContainer}>
          <span className={styles.containerBtn}>
            {project?.liveUrl && (
              <a href={project.liveUrl} target="_blank">
                <Button variant="primary" className={styles.btnCards}>
                  Live Website
                </Button>
              </a>
            )}
            {project?.githubUrl && (
              <a href={project.githubUrl} target="_blank">
                <Button variant="primary" className={styles.btnCards}>
                  GitHub Code
                </Button>
              </a>
            )}
            {project?.appStoreUrl && (
              <a href={project.appStoreUrl} target="_blank">
                <Button variant="primary" className={styles.btnCards}>
                  AppStore
                </Button>
              </a>
            )}
            {project?.prototypeUrl && (
              <a href={project.prototypeUrl} target="_blank">
                <Button variant="primary" className={styles.btnCards}>
                  Prototype
                </Button>
              </a>
            )}
            {project?.behanceUrl && (
              <a href={project.behanceUrl} target="_blank">
                <Button variant="primary" className={styles.btnCards}>
                  Behance Project
                </Button>
              </a>
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
