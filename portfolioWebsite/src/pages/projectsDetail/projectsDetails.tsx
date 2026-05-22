import { useParams } from "react-router-dom";
import { projects } from "../../types/projectsData";
import styles from "./projectsDetail.module.css";
import Navbar from "../../components/navbar/Navbar";
import Emptystate from "../emptyState/Emptystate";
import Card from "../../components/card/Card";
import Chip from "../../components/chips/Chip";

function ProjectsDetail() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  const renderBold = (text: string) => {
    // divide o texto em partes, separando pelo padrão **...**
    const parts = text.split(/\*\*(.*?)\*\*/g);

    // mapeia cada parte, usando o índice para decidir se é bold
    return parts.map((part, index) => {
      // se o índice for ímpar, é bold
      if (index % 2 === 1) {
        return <strong key={index}>{part}</strong>;
      }
      // se for par, é texto normal
      return part;
    });
    // quero que ao texto e faças split do que é par e impar globalmente e que depois retornas, mapeando por cada item do parts usando a seguinte logica chamada index, em que o index ao dividir por 2, é impar, e sempre que se for impar, é bold, e retorna o item entre a logica do index
  };
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
            <p>{renderBold(project.fullDescription ?? "")}</p>
            <div className={styles.cardDetails}>
              <Card
                project={project}
                showImage={false}
                showViewButton={false}
                className={styles.card}
              >
                <span className={styles.chipsContainer}>
                  {project?.chips.map((chip) => (
                    <Chip key={chip} variant="secondary">
                      {chip}
                    </Chip>
                  ))}
                </span>
              </Card>
            </div>
          </div>
          <div className={styles.images}>
            {project.images?.map((img, index) => (
              <img key={index} src={img} />
            ))}
          </div>
          {/* Dentro do project, tenho images? se sim, entao, mapeia cada item (img), que por cada img retorna uma key unica, retornando por fim,  cada image com essa mesma key de cada um  e sendo a source o item de cada imagem mapeada */}
        </div>
      </div>
    </>
  );
}

export default ProjectsDetail;
