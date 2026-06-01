import { Link, useParams } from "react-router-dom";
import { projects } from "../../types/projectsData";
import styles from "./projectsDetail.module.css";
import Navbar from "../../components/navbar/Navbar";
import Emptystate from "../emptyState/Emptystate";
import Card from "../../components/card/Card";
import Chip from "../../components/chips/Chip";
import Button from "../../components/buttons/Button";
import Carousel from "../../components/carousel/Carousel";
import { CheckCircle, ChevronLeft, Info } from "lucide-react";

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
        <div className={styles.backPageArrow}>
          <Button variant="link" className={styles.btnLink}>
            <Link to="/projects">
              <span
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <ChevronLeft size={32} /> Back to projects
              </span>
            </Link>
          </Button>
        </div>
        <div className={styles.containerImgDescription}>
          <h1>{project.title}</h1>
          <img
            src={project.mainImage}
            alt={project.title}
            className={styles.projectImg}
          />

          <div className={styles.introDescription}>
            <h5>{project.shortDescription}</h5>
            <h5 className={styles.year}>{project.year}</h5>
          </div>

          <div className={styles.bothSide}>
            <div className={styles.leftSide}>
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
                      Product presentation video created to showcase features
                      and user experience flows of the SNS 24 mobile
                      application. The presentation video is in Portuguese and
                      was created as part of the SNS 24 digital communication
                      experience for users in Portugal.
                    </p>

                    <a href={project.videoUrl} target="_blank">
                      <Button variant="secondary">Watch video</Button>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.rightSide}>
              <div className={styles.cardDetails}>
                <Card
                  project={project}
                  showImage={false}
                  showViewButton={false}
                  className={styles.card}
                >
                  <span className={styles.sideContainer}>
                    <div className={styles.linksUrl}>
                      {project?.liveUrl && (
                        <a href={project.liveUrl} target="_blank">
                          <Button variant="primary">Live Website</Button>
                        </a>
                      )}
                      {project?.githubUrl && (
                        <a href={project.githubUrl} target="_blank">
                          <Button variant="primary">GitHub Code</Button>
                        </a>
                      )}
                      {project?.appStoreUrl && (
                        <a href={project.appStoreUrl} target="_blank">
                          <Button variant="primary">AppStore</Button>
                        </a>
                      )}
                      {project?.prototypeUrl && (
                        <a href={project.prototypeUrl} target="_blank">
                          <Button variant="primary">Prototype</Button>
                        </a>
                      )}
                      {project?.behanceUrl && (
                        <a href={project.behanceUrl} target="_blank">
                          <Button variant="primary">Behance Project</Button>
                        </a>
                      )}
                    </div>
                    <div className={styles.chips}>
                      {project?.chips.map((chip) => (
                        <Chip key={chip} variant="secondary">
                          {chip}
                        </Chip>
                      ))}
                    </div>
                  </span>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsDetail;
