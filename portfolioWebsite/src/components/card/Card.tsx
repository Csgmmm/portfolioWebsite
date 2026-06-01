import { ChevronRight } from "lucide-react";
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

const Card = ({ project, children }: CardProps) => {
  if (children) {
    return <div className={styles.card}>{children}</div>;
    // Se houver children, devolve uma div com a class card e o children lá dentro
  }
  return (
    <div className={styles.card}>
      <div className={styles.containerCard}>
        <div className={styles.imageYear}>
          <img
            className={styles.img}
            src={project?.mainImage}
            alt={project?.title}
          />
          <Chip variant="tertiary" className={styles.chipYear}>
            {project?.year}
          </Chip>
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.title}>
            <h4>{project?.title}</h4>

          <p className={styles.resume}>
            {project?.resume}
          </p>
            <Link to={`/project/${project?.id}`}>
              <Button variant="link">
                Read case study
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
