import { Link, useParams } from "react-router-dom";
import { projects } from "../../types/projectsData";
import styles from "./projectsDetail.module.css";
import Navbar from "../../components/navbar/Navbar";
import Emptystate from "../emptyState/Emptystate";
import Button from "../../components/buttons/Button";
import Carousel from "../../components/carousel/Carousel";
import { ChevronLeft, CircleAlert, Minus, Video, X } from "lucide-react";
import Chip from "../../components/chips/Chip";
import Card from "../../components/card/Card";
import { useState } from "react";
import VideoComponent from "./assets/pawmate/pawMateVimeo";

function ProjectsDetail() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  // Estados isolados para cada secção individual funcionar de forma independente
  const [videoMinimized, setVideoMinimized] = useState(false);
  const [videoClosed, setVideoClosed] = useState(false);

  const [uxMinimized, setUxMinimized] = useState(false);
  const [uxClosed, setUxClosed] = useState(false);

  const [carouselMinimized, setCarouselMinimized] = useState(false);
  const [carouselClosed, setCarouselClosed] = useState(false);

  const [vimeoMinimized, setVimeoMinimized] = useState(false);
  const [vimeoClosed, setVimeoClosed] = useState(false);

  const availableTitles = [
    project?.InformationArchitectureMap?.title,
    project?.wireframe?.title,
    project?.iconography?.title,
    project?.prototype?.title,
  ].filter(Boolean);

  let dynamicTitle = "";
  if (availableTitles.length === 1) {
    dynamicTitle = availableTitles[0] || "";
  } else if (availableTitles.length > 1) {
    const lastTitle = availableTitles.pop();
    dynamicTitle = `${availableTitles.join(", ")} and ${lastTitle}`;
  }

  const cardItemsCount = [
    //cria um array com os 4 items possiveis do card
    project?.InformationArchitectureMap,
    project?.wireframe,
    project?.iconography,
    project?.prototype,
    project?.mockup,
  ].filter(Boolean).length; //remove tudo o que é undefined, null, 0 ou "". (tudo o que é falsy) e conta quantos sobram.

  let carouselTitle = "";
  const carouselItems = [
    project?.images ? "images" : null,
    project?.codeImg ? "code" : null,
    project?.mockup ? "mockup" : null,
  ].filter(Boolean);

  // Se houver exatamente mockup e images (e nenhum codeImg)
  if (project?.mockup && project?.images && !project?.codeImg) {
    carouselTitle = "Figma and Mockups ";
  } else if (carouselItems.length === 1) {
    // Se houver só um deles, mostra o título
    carouselTitle =
      project?.images?.title ||
      project?.codeImg?.title ||
      project?.mockup?.title ||
      "";
  } else if (carouselItems.length > 1) {
    // Se houver mais do que dois (ex: mockup, images e code), junta-os com vírgulas e "and"
    const titleArray = [
      project?.images?.title,
      project?.codeImg?.title,
      project?.mockup?.title,
    ].filter(Boolean);
    const lastCarouselTitle = titleArray.pop();
    carouselTitle = `${titleArray.join(", ")} and ${lastCarouselTitle}`;
  }

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
            <Card variant="secondary">
              <div className={styles.containerLeftCard}>
                <h2 className={styles.projectTitle}>{project.projectTitle}</h2>
                <div className={styles.infoProject}>
                  <h4>Project year</h4>
                  {project.year}
                </div>
                <div className={styles.infoProject}>
                  <h4>Tech stack</h4>
                  <div className={styles.chipsContainer}>
                    {project.chips &&
                      project.chips.map((item, idx) => (
                        <Chip
                          key={idx}
                          variant="secondary"
                          className={styles.chip}
                        >
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
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button variant="secondary">AppStore</Button>
                      </a>
                    </div>
                  )}

                  {project.githubUrl && (
                    <div className={styles.btnLinks}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button variant="secondary">Github Code</Button>
                      </a>
                    </div>
                  )}

                  {project.liveUrl && (
                    <div className={styles.btnLinks}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button variant="secondary">Website</Button>
                      </a>
                    </div>
                  )}

                  {project.prototypeUrl && (
                    <div className={styles.btnLinks}>
                      <a
                        href={project.prototypeUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button variant="secondary">Prototype</Button>
                      </a>
                    </div>
                  )}

                  {project.behanceUrl && (
                    <div className={styles.btnLinks}>
                      <a
                        href={project.behanceUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
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
                      <h5 className={styles.credentialsTitle}>Users</h5>
                      <pre className={styles.code}>
                        {project.codeCredentials.map((item, idx) => (
                          <div key={idx}>
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
            </Card>
          </div>
          {/* rightSide */}

          <div className={styles.rightSide}>
            <div className={styles.details}>
              <div className={styles.description}>
                <h4>Description</h4>
                {renderBold(project.fullDescription ?? "")}
              </div>
            </div>

            {/* contributions */}
            {project.contributions && (
              <div className={styles.contributions}>
                <h4>My Contribution</h4>
                <div className={styles.containerContributionsItems}>
                  {project.contributions.map((contributionItem, idx) => (
                    <Card key={idx}>
                      <div className={styles.contributionsInfo}>
                        <div className={styles.titleContribution}>
                          <contributionItem.icon size={20} />
                          <h5>{contributionItem.title}</h5>
                        </div>
                        <p>{contributionItem.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* videoInsta */}
            {project.videoImg && !videoClosed && (
              <div className={styles.containerVideo}>
                <Card>
                  <div className={styles.browserFrame}>
                    <div className={styles.browserBar}>
                      <span
                        className={`${styles.dot} ${styles.dotRed}`}
                        onClick={() => setVideoClosed(true)}
                      >
                        <X size={8} className={styles.icon} />
                      </span>
                      <span
                        className={`${styles.dot} ${styles.dotYellow}`}
                        onClick={() => setVideoMinimized(!videoMinimized)}
                      >
                        <Minus size={8} className={styles.icon} />
                      </span>
                      <span className={`${styles.dot} ${styles.dotGreen}`} />
                      <h4>Project Walkthrough</h4>
                    </div>
                  </div>
                  {!videoMinimized && (
                    <div className={styles.containerInfoVideo}>
                      <img
                        src={project.videoImg}
                        alt="Insta Video"
                        className={styles.videoInstaImg}
                      />
                      <div className={styles.descriptionBtn}>
                        <p>
                          Product presentation video created to showcase
                          features and user experience flows of the SNS 24
                          mobile application. The presentation video is in
                          Portuguese and was created as part of the SNS 24
                          digital communication experience for users in
                          Portugal.
                        </p>

                        <a
                          href={project.videoUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Button variant="secondary">
                            <Video style={{ marginRight: 8 }} />
                            Watch video
                          </Button>
                        </a>
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            )}

            {(project.InformationArchitectureMap ||
              project.wireframe ||
              project.iconography ||
              project.prototype) &&
              !uxClosed && (
                <Card className={styles.cardProjects}>
                  <div className={styles.browserFrame}>
                    <div className={styles.browserBar}>
                      <span
                        className={`${styles.dot} ${styles.dotRed}`}
                        onClick={() => setUxClosed(true)}
                      >
                        <X size={8} className={styles.icon} />
                      </span>
                      <span
                        className={`${styles.dot} ${styles.dotYellow}`}
                        onClick={() => setUxMinimized(!uxMinimized)}
                      >
                        <Minus size={8} className={styles.icon} />
                      </span>

                      <span className={`${styles.dot} ${styles.dotGreen}`} />
                      <h4 className={styles.title}>{dynamicTitle}</h4>
                    </div>
                  </div>

                  {!uxMinimized && (
                    <div className={styles.containerProject}>
                      <div className={styles.projectsWrapper}>
                        {project.InformationArchitectureMap && (
                          <div className={styles.containerProjectFirst}>
                            {cardItemsCount > 1 && (
                              <h5 className={styles.titleProject}>
                                {project.InformationArchitectureMap.title}
                              </h5>
                            )}
                            <div className={styles.IADesktop}>
                              <img
                                src={project.InformationArchitectureMap.desktop}
                                alt="Information Architecture Map"
                                className={styles.imgProject}
                              />
                            </div>
                            <div className={styles.IAMobile}>
                              <img
                                src={project.InformationArchitectureMap.mobile}
                                alt="Information Architecture Map"
                                className={styles.imgProject}
                              />
                            </div>
                          </div>
                        )}

                        {project.wireframe && (
                          <div className={styles.containerProject}>
                            <h5 className={styles.titleProject}>
                              {project.wireframe.title}
                            </h5>
                            <img
                              src={project.wireframe.img}
                              alt="Wireframe"
                              className={styles.imgProject}
                            />
                          </div>
                        )}

                        {project.iconography && (
                          <div className={styles.containerProject}>
                            <h5 className={styles.titleProject}>
                              {project.iconography.title}
                            </h5>
                            <div className={styles.iconographyContainer}>
                              {project.iconography.img.map((icon, idx) => (
                                <Card key={idx} className={styles.iconCard}>
                                  <img
                                    src={icon}
                                    alt="Icons"
                                    className={styles.iconography}
                                  />
                                </Card>
                              ))}
                            </div>
                          </div>
                        )}

                        {project.prototype && (
                          <div className={styles.containerProject}>
                            {cardItemsCount > 1 && (
                              <h5>{project.prototype.title}</h5>
                            )}
                            {project.prototype.img.map((prototype, idx) => (
                              <img
                                key={idx}
                                src={prototype}
                                alt="prototype on figma"
                                className={styles.imgProject}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </Card>
              )}

            {/* para que nãoo apareca div. figmaImg ou codeimg é maior que 0?, então.. */}
            {(project.images || project.codeImg || project.mockup) &&
              !carouselClosed && (
                <div className={styles.containerCarousel}>
                  <div className={styles.carouselFrames}>
                    <Card className={styles.cardProjects}>
                      <div className={styles.browserFrame}>
                        <div className={styles.browserBar}>
                          <span
                            className={`${styles.dot} ${styles.dotRed}`}
                            onClick={() => setCarouselClosed(true)}
                          >
                            <X size={8} className={styles.icon} />
                          </span>
                          <span
                            className={`${styles.dot} ${styles.dotYellow}`}
                            onClick={() =>
                              setCarouselMinimized(!carouselMinimized)
                            }
                          >
                            <Minus size={8} className={styles.icon} />
                          </span>

                          <span
                            className={`${styles.dot} ${styles.dotGreen}`}
                          />
                          <h4 className={styles.title}>{carouselTitle}</h4>
                        </div>
                      </div>

                      {!carouselMinimized && (
                        <div className={styles.containerProject}>
                          {project.images && (
                            <>
                              {cardItemsCount > 1 && (
                                <h5>{project.images.title}</h5>
                              )}
                              <Carousel
                                img={project.images.img}
                                title={project.images.title}
                              />
                            </>
                          )}

                          {project.codeImg && (
                            <Carousel
                              img={project.codeImg.img}
                              title={project.codeImg.title}
                            />
                          )}

                          {project.mockup && (
                            <div className={styles.containerProjectMockUp}>
                              {cardItemsCount > 1 && (
                                <h5>{project.mockup.title}</h5>
                              )}
                              {project.mockup.img.map((mockup) => (
                                <img
                                  key={mockup}
                                  src={mockup}
                                  title={project?.mockup?.title}
                                  className={styles.imgProject}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </Card>
                  </div>
                </div>
              )}

            {project.videoUrl && !vimeoClosed && (
              <Card>
                <div className={styles.browserFrame}>
                  <div className={styles.browserBar}>
                    <span
                      className={`${styles.dot} ${styles.dotRed}`}
                      onClick={() => setVimeoClosed(true)}
                    >
                      <X size={8} className={styles.icon} />
                    </span>
                    <span
                      className={`${styles.dot} ${styles.dotYellow}`}
                      onClick={() => setVimeoMinimized(!vimeoMinimized)}
                    >
                      <Minus size={8} className={styles.icon} />
                    </span>

                    <span className={`${styles.dot} ${styles.dotGreen}`} />
                    <h4 className={styles.title}>{project.videoUrl}</h4>
                  </div>
                </div>
                {!vimeoMinimized && <VideoComponent />}
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsDetail;
