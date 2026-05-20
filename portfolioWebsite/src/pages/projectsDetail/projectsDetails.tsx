import { useParams } from "react-router-dom";
import { projects } from "../../types/projectsData";
import styles from "./projectsDetail.module.css";
import Navbar from "../../components/navbar/Navbar";
import Emptystate from "../emptyState/Emptystate";
import Card from "../../components/card/Card";

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
          <div className={styles.details}>
            <p>{project.fullDescription}</p>
            <div className={styles.cardDetails}>
              <Card showImage={false} showViewButton={false}>
                <p>HiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHiiHii</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsDetail;
