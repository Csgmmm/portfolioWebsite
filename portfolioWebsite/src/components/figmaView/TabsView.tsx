import { useState } from "react";
import styles from "./tabsView.module.css";
import Button from "../buttons/Button";

//Aqui dou a interface para o componente FigmaView, de acordo com o que está no projectsData.ts. Descreve o que o componente <FigmaViewer/> recebe como parâmetro quando é invocado noutro ficheiro
interface FigmaViewProps {
  screens: {
    //esta interface terá uma propriedade que contém varios objetos
    id?: string;
    title: string;
    img: string;
  }[]; //aqui digo que esta propriedade aceita um array de varios objetos, cada um com id, title e img
}

export default function FigmaView({ screens }: FigmaViewProps) {
  const [current, setCurrent] = useState(0);
  if (!screens || screens.length === 0) return null;

  return (
    <div className={styles.figmaViewContainer}>
      {/* Tabs: pego na propriedade dada pela interface e fço um map que vai a cada item, cujo tem uma position (0,1,2...) e aplica um button a cada item, este button tem uma key é o id de cada item ou então é a position, depois a classe, se a position for o current então, vai ter o estilo x, senão é o estilo y. e depois ao clicar, ele vai atualizar o estado de acordo com a posição. E por cada button contém lá o titulo de cada item. */}
      <div className={styles.tabs}>
        {screens.map((item, position) => (
          <Button
            variant="tab"
            key={item.id || position}
            isActive={position === current}
            onClick={() => setCurrent(position)}
          >
            {item.title}
          </Button>
        ))}
      </div>
      {/* Para as imagens: Terá uma img que a source vai buscar a propriedade da interface, em que liga ao current image para saber que image liga e vai buscar a image */}
      <div className={styles.figmaViewFrame}>
        <div className={styles.frameBody}>
          <img
            src={screens[current].img}
            alt={screens[current].title}
            className={styles.screenImage}
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </div>
  );
}
