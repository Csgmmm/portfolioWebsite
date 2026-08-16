import { Link, useParams } from "react-router-dom";
import { projects } from "../../types/projectsData";
import styles from "./projectsDetail.module.css";
import Navbar from "../../components/navbar/Navbar";
import Emptystate from "../emptyState/Emptystate";
import Button from "../../components/buttons/Button";
import { ChevronLeft, CircleAlert, Minus, Video, X } from "lucide-react";
import Chip from "../../components/chips/Chip";
import Card from "../../components/card/Card";
import { useState } from "react";
import VideoComponent from "./assets/pawmate/pawMateVimeo";
import { CodeSection } from "../../components/codeSection/CodeSection";

import TabsView from "../../components/figmaView/TabsView";

interface ProjectsDetailProps {
  theme: string;
  onToggleTheme: () => void;
}

function ProjectsDetail({ theme, onToggleTheme }: ProjectsDetailProps) {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  // Estados isolados para cada secção individual funcionar de forma independente
  const [videoMinimized, setVideoMinimized] = useState(false);
  const [videoClosed, setVideoClosed] = useState(false);

  const [uxMinimized, setUxMinimized] = useState(false);
  const [uxClosed, setUxClosed] = useState(false);

  const [browserMinimized, setBrowserMinimized] = useState(false);
  const [browserClosed, setBrowserClosed] = useState(false);

  const [vimeoMinimized, setVimeoMinimized] = useState(false);
  const [vimeoClosed, setVimeoClosed] = useState(false);

  // Porque o boolean? Não me interessa o número de chaves, não me interessam os undefined. Passa tudo isso pelo detetor de mentiras e dá-me apenas um true se a secção existir com dados, ou um false se estiver vazia/inexistente. Se houver UI, é true senão, é false
  const hasUX = Boolean(
    (project?.InformationArchitectureMap &&
      Object.keys(project.InformationArchitectureMap).length > 0) ||
    (project?.wireframe && Object.keys(project.wireframe).length > 0) ||
    (project?.prototype && Object.keys(project.prototype).length > 0) ||
    (project?.iconography && Object.keys(project.iconography).length > 0),
  );

  const hasUI = Boolean(
    (project?.figma && Object.keys(project.figma).length > 0) ||
    (project?.mockup && Object.keys(project.mockup).length > 0),
  );

  const hasTech = Boolean(
    project?.interface &&
    Object.keys(project.interface).length > 0 && //existe interface no project? então, vai buscar as keys do object project.interface e vê se a length é maior que 0 ou...
    project?.code &&
    Object.keys(project.code).length > 0,
  );

  const hasUIAndTechBlock = hasUI || hasTech; //junta o UI e o Tech num só, ficando o UX a parte.

  let uxTitle = "User Experience, Visual Systems and Strategy";
  let uiTechTitle = "";
  if (hasUI && hasTech) {
    uiTechTitle = "User Interface and Development";
  } else if (hasTech) {
    uiTechTitle = "UI Guidelines and Development";
  } else if (hasUI) {
    uiTechTitle = "High-Fidelity Screens and Components";
  } else {
    uiTechTitle = "Project Showcase";
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
        <Emptystate theme={theme} onToggleTheme={onToggleTheme} />
      </div>
    );

  return (
    <>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
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
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
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
                          variant="tertiary"
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
                        <Button variant="primary">AppStore</Button>
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
                        <Button variant="primary">Github Code</Button>
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
                        <Button variant="primary">Website</Button>
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
                        <Button variant="primary">Prototype</Button>
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
                        <Button variant="primary">Behance</Button>
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
              {project.shortDescription && (
                <div className={styles.shortDescription}>
                  <h6>{project.shortDescription}</h6>
                </div>
              )}
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
                        onDragStart={(e) => e.preventDefault()}
                        onContextMenu={(e) => e.preventDefault()}
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
                          <Button variant="primary">
                            <a
                              href="https://www.instagram.com/p/DW3Xl2LtNE5/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Video style={{ marginRight: 8 }} />
                              Watch video
                            </a>
                          </Button>
                        </a>
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            )}

            {hasUX && //bloco com UX
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
                      <h4 className={styles.title}>
                        {uxTitle}
                        {/* coloco de fora o UI */}
                      </h4>
                    </div>
                  </div>

                  {!uxMinimized && (
                    <div className={styles.containerProjects}>
                      <div className={styles.projectsWrapper}>
                        {project.InformationArchitectureMap && (
                          <div className={styles.containerProject}>
                            <h5>{project.InformationArchitectureMap.title}</h5>
                            <div className={styles.IADesktop}>
                              <img
                                src={project.InformationArchitectureMap.desktop}
                                alt="Information Architecture Map"
                                className={styles.imgProject}
                                onDragStart={(e) => e.preventDefault()}
                                onContextMenu={(e) => e.preventDefault()}
                              />
                            </div>
                            <div className={styles.IAMobile}>
                              <img
                                src={project.InformationArchitectureMap.mobile}
                                alt="Information Architecture Map"
                                className={styles.imgProject}
                                onDragStart={(e) => e.preventDefault()}
                                onContextMenu={(e) => e.preventDefault()}
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
                              onDragStart={(e) => e.preventDefault()}
                              onContextMenu={(e) => e.preventDefault()}
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
                                    onDragStart={(e) => e.preventDefault()}
                                    onContextMenu={(e) => e.preventDefault()}
                                  />
                                </Card>
                              ))}
                            </div>
                          </div>
                        )}

                        {project.prototype && (
                          <div className={styles.containerProject}>
                            <h5>{project.prototype.title}</h5>

                            {project.prototype.img.map((prototype, idx) => (
                              <img
                                key={idx}
                                src={prototype}
                                alt="prototype on figma"
                                className={styles.imgProject}
                                onDragStart={(e) => e.preventDefault()}
                                onContextMenu={(e) => e.preventDefault()}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </Card>
              )}

            {hasUIAndTechBlock && //bloco com UI e Tech
              !browserClosed && (
                <div >
                  <Card className={styles.cardProjects}>
                    <div className={styles.browserFrame}>
                      <div className={styles.browserBar}>
                        <span
                          className={`${styles.dot} ${styles.dotRed}`}
                          onClick={() => setBrowserClosed(true)}
                        >
                          <X size={8} className={styles.icon} />
                        </span>
                        <span
                          className={`${styles.dot} ${styles.dotYellow}`}
                          onClick={() => setBrowserMinimized(!browserMinimized)}
                        >
                          <Minus size={8} className={styles.icon} />
                        </span>

                        <span className={`${styles.dot} ${styles.dotGreen}`} />
                        <h4 className={styles.title}>{uiTechTitle}</h4>
                        {/* chamo a função para so aparecer o titulo das condições, colocando de lado o que é UX */}
                      </div>
                    </div>

                    {!browserMinimized && (
                      <div className={styles.containerProjects}>
                        {project.figma && (
                          <div className={styles.containerProject}>
                            <TabsView screens={project.figma.img} />
                          </div>
                        )}

                        {project.code?.map((item) => (
                          <div className={styles.containerProject}>
                            <CodeSection code={[item]} />
                          </div> //vai a cada item do array e devolve como uma div com o estilo x, que contem o cada item do array,em  que contém um filename e um code, que é o que o componente CodeSection espera receber como props
                        ))}

                        {project.interface && (
                          <div className={styles.containerProject}>
                            {project.interface.img.map((item) => (
                              <img
                                className={styles.imgProject}
                                src={item}
                                onDragStart={(e) => e.preventDefault()}
                                onContextMenu={(e) => e.preventDefault()}
                              />
                            ))}
                          </div>
                        )}

                        {project.mockup && (
                          <div className={styles.containerProject}>
                            {project.mockup.img.map((mockup) => (
                              <img
                                key={mockup}
                                src={mockup}
                                title={project?.mockup?.title}
                                className={styles.imgProject}
                                onDragStart={(e) => e.preventDefault()}
                                onContextMenu={(e) => e.preventDefault()}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </Card>
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
