import { Link, useParams } from "react-router-dom";
import { projects } from "../../types/projectsData";
import styles from "./projectsDetail.module.css";
import Navbar from "../../components/navbar/Navbar";
import Emptystate from "../emptyState/Emptystate";
import Button from "../../components/buttons/Button";
import Carousel from "../../components/carousel/Carousel";
import { ChevronLeft, CircleAlert, Video } from "lucide-react";
import Chip from "../../components/chips/Chip";
import Card from "../../components/card/Card";

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
          {/* leftSide */}
          <div className={styles.leftSide}>
            <div className={styles.infoProject}>
              <h3>Project year</h3>
              {project.year}
            </div>
            <div className={styles.infoProject}>
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

            {project.disclaimer && (
              <div className={styles.disclaimerContainer}>
                <>
                  <div className={styles.introDisclaimer}>
                    <CircleAlert /> Disclaimer
                  </div>

                  {project.disclaimer}
                </>
              </div>
            )}

            <div className={styles.btnContainer}>
              {project.appStoreUrl && (
                <div className={styles.btnLinks}>
                  <a href={project.appStoreUrl} target="_blank">
                    <Button variant="secondary">AppStore</Button>
                  </a>
                </div>
              )}

              {project.githubUrl && (
                <div className={styles.btnLinks}>
                  <a href={project.githubUrl} target="_blank">
                    <Button variant="secondary">Github Code</Button>
                  </a>
                </div>
              )}

              {project.liveUrl && (
                <div className={styles.btnLinks}>
                  <a href={project.liveUrl} target="_blank">
                    <Button variant="secondary">Website</Button>
                  </a>
                </div>
              )}

              {project.prototypeUrl && (
                <div className={styles.btnLinks}>
                  <a href={project.prototypeUrl} target="_blank">
                    <Button variant="secondary">Prototype</Button>
                  </a>
                </div>
              )}

              {project.behanceUrl && (
                <div className={styles.btnLinks}>
                  <a href={project.behanceUrl} target="_blank">
                    <Button variant="secondary">Behance</Button>
                  </a>
                </div>
              )}
            </div>

            {project.bigNumber && (
              <div className={styles.bigNumber}>
                <h4>Reach</h4>
                <h1>+10M</h1>
                <p>Portuguese citizens served nationwide.</p>
              </div>
            )}

            {project.codeCredentials && (
              <div className={styles.credentials}>
                <Card>
                  <pre className={styles.code}>
                    {project.codeCredentials.map((item) => (
                      <div>
                        <span className={styles.key}>username:</span>{" "}
                        {item.username}
                        {"\n"}
                        <span className={styles.key}>password:</span>{" "}
                        {item.password}
                        {"\n\n"}
                      </div>
                    ))}
                  </pre>
                </Card>
              </div>
            )}
          </div>

          {/* rightSide */}

          <div className={styles.rightSide}>
            <div className={styles.details}>
              <div className={styles.description}>
                <h3>Description</h3>
                {renderBold(project.fullDescription ?? "")}
              </div>
            </div>

            {/*  para que nãoo apareca div. figmaImg ou codeimg é maior que 0?, então.. */}
            {(project.figmaImg || project.codeImg) && (
              <div className={styles.containerCarousel}>
                <div className={styles.carouselFrames}>
                  {project.figmaImg && (
                    <Carousel
                      img={project.figmaImg.img}
                      title={project.figmaImg.title}
                    />
                  )}
                  {project.codeImg && (
                    <Carousel
                      img={project.codeImg.img}
                      title={project.codeImg.title}
                    />
                  )}
                </div>
              </div>
            )}

            {/* contributions */}
            {project.contributions && (
              <div className={styles.contributions}>
                <h3>My Contribution</h3>
                <div className={styles.containerContributionsItems}>
                  {project.contributions.map((contributionItem) => (
                    <Card>
                      <div className={styles.contributionsInfo}>
                        <div className={styles.titleContribution}>
                          {/* para cada item do array que fazes map, acede a propriedade icon desse item */}
                          <contributionItem.icon size={20} />
                          <h4>{contributionItem.title}</h4>
                        </div>
                        <p>{contributionItem.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* videoInsta */}
            {project.videoImg && (
              <div className={styles.containerVideo}>
                <Card>
                  <div className={styles.containerInfoVideo}>
                    <img
                      src={project.videoImg}
                      alt="Insta Video"
                      className={styles.videoInstaImg}
                    />
                    <div className={styles.descriptionBtn}>
                      <h3>Project Walkthrough</h3>
                      <p>
                        Product presentation video created to showcase features
                        and user experience flows of the SNS 24 mobile
                        application. The presentation video is in Portuguese and
                        was created as part of the SNS 24 digital communication
                        experience for users in Portugal.
                      </p>

                      <a href={project.videoUrl} target="_blank">
                        <Button variant="secondary">
                          <Video style={{ marginRight: 8 }} />
                          Watch video
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsDetail;
