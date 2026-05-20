import { useParams } from "react-router-dom";
import { projects } from "../../types/projectsData";
import styles from "./projectsDetail.module.css";
import Navbar from "../../components/navbar/Navbar";
import Emptystate from "../emptyState/Emptystate";

function ProjectsDetail() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  if (!project)
    return (
      <div>
        <Emptystate />
      </div>
    );

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>{project.title}</h1>
        <div className={styles.containerImgDescription}>
          <img
            src={project.mainImage}
            alt={project.title}
            className={styles.projectImg}
          />
          <div className={styles.description}>
            <p>{project.fullDescription}</p>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default ProjectsDetail;
