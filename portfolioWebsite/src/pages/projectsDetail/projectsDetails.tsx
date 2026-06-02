import { Link, useParams } from "react-router-dom";
import { projects } from "../../types/projectsData";
import styles from "./projectsDetail.module.css";
import Navbar from "../../components/navbar/Navbar";
import Emptystate from "../emptyState/Emptystate";
import Button from "../../components/buttons/Button";
import Carousel from "../../components/carousel/Carousel";
import { CheckCircle, ChevronLeft, CircleAlert, Info } from "lucide-react";
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
        <div className={styles.headerPage}>
          <Button variant="link" className={styles.btnLink}>
            <Link to="/projects">
              <span
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <ChevronLeft size={32} /> Back to projects
              </span>
            </Link>
          </Button>
          <h1>{project.title}</h1>
        </div>

        <div className={styles.containerImg}>
          <img
            src={project.mainImage}
            alt={project.title}
            className={styles.projectImg}
          />
        </div>

        <div className={styles.bothSide}>
          <div className={styles.leftSide}>
            
            <div className={styles.projectYear}>
              <h3>Project year</h3>
              {project.year}
            </div>

            <div className={styles.projectYear}>
              <h3>Tech stack</h3>
              <div className={styles.chipsContainer}>
                {project.chips &&
                  project.chips.map((item) => (
                    <Chip variant="tertiary" className={styles.chip}>
                      {item}
                    </Chip>
                  ))}
              </div>
            </div>


            <div className={styles.disclaimerContainer}>
              {project.disclaimer && (
                <>
                  <div className={styles.introDisclaimer}>
                    <CircleAlert /> Disclaimer
                  </div>

                  {project.disclaimer}
                </>
              )}
            </div>
          </div>

          <div className={styles.rightSide}>
            <div className={styles.details}>
              <div className={styles.description}>
                <h3>Description</h3>
                {renderBold(project.fullDescription ?? "")}
              </div>
            </div>

            {/*  figmaImg ou codeimg é maior que 0?, então.. */}
            {((project.figmaImg ?? []).length > 0 ||
              (project.codeImg ?? []).length > 0) && (
              <div className={styles.images}>
                {project.figmaImg && project.figmaImg.length > 0 && (
                  <div className={styles.figmaImg}>
                    <h4>Figma</h4>
                    <Carousel img={project.figmaImg ?? []} />
                  </div>
                )}
                {project.codeImg && project.codeImg.length > 0 && (
                  <div className={styles.codeImg}>
                    <h4>Code</h4>
                    <Carousel img={project.codeImg ?? []} />
                  </div>
                )}
              </div>
            )}

            {/* contributions é maior que 0? entao... */}
            {project.contributions && project.contributions.length > 0 && (
              <div className={styles.contributions}>
                <h3>My Contribution</h3>
                {project.contributions.map((item, index) => (
                  <div key={index} className={styles.contributionItem}>
                    <CheckCircle size={20} />
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {project.disclaimer && project.disclaimer.length > 0 && (
              <div className={styles.disclaimer}>
                <div className={styles.introDisclaimer}>
                  <Info />
                  <h4>Team Collaboration Disclaimer</h4>
                </div>
                <p>{project.disclaimer}</p>
              </div>
            )}

            {project.videoImg && project.videoImg.length > 0 && (
              <div className={styles.videoInstaContainer}>
                <img
                  src={project.videoImg}
                  alt="Insta Video"
                  className={styles.videoInstaImg}
                />
                <div className={styles.containerDescription}>
                  <p className={styles.textDescription}>
                    Product presentation video created to showcase features and
                    user experience flows of the SNS 24 mobile application. The
                    presentation video is in Portuguese and was created as part
                    of the SNS 24 digital communication experience for users in
                    Portugal.
                  </p>

                  <a href={project.videoUrl} target="_blank">
                    <Button variant="secondary">Watch video</Button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsDetail;
