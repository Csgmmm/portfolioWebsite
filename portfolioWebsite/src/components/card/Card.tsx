import { ChevronRight } from "lucide-react";
import Button from "../buttons/Button";
import Chip from "../chips/Chip";
import styles from "./card.module.css";
import { type IProjectData } from "../../types/projectsData";
import { Link } from "react-router-dom";

interface ICardProps {
  project?: IProjectData;
  children?: React.ReactNode;
  className?: string;
  showViewButton?: boolean;
  showImage?: boolean;
  variant?: "default" | "secondary";
}

const Card = ({
  project,
  children,
  className,
  showViewButton = true,
  showImage = true,
  variant = "default",
}: ICardProps) => {
  if (children) {
    return (
      <div className={`${styles.card} ${styles[variant]} ${className ?? ""}`}>
        {children}
      </div>
    );
    // Se houver children, devolve uma div com a class card e o children lá dentro
  }
  return (
    <div className={styles.card}>
      <div className={styles.allContainer}>
        {/* se o project tiver img, então... */}
        {showImage && (
          <div className={styles.imageYear}>
            <Link to={`/project/${project?.id}`}>
            <img
              className={styles.img}
              src={project?.mainImage}
              alt={project?.title}
              onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            />
            <Chip variant="secondary" className={styles.chipYear}>
              {project?.year}
            </Chip>
            </Link>
          </div>
        )}

        <div className={styles.infoContainer}>
          <div className={styles.title}>
         <h3 className={styles.titleProject}>{project?.title}</h3>

            <div className={styles.containerResumeBtn}>
              <p className={styles.resume}>{project?.resume}</p>
              {showViewButton && (
                <Link to={`/project/${project?.id}`}>
                  <Button variant="link">
                    Read case study
                    <ChevronRight />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
