import { useState } from "react";
import styles from "./carousel.module.css";
import { ChevronLeft, ChevronRight} from "lucide-react";
import Button from "../buttons/Button";

interface ICarousel {
  img: string[];
  title: string;
  className?: string;
}

function Carousel({ img }: ICarousel) {
  const [current, setCurrent] = useState(0);

  const isFirst = current === 0;
  const isLast = current === img.length - 1;

  return (
    <>
      <div className={styles.carousel}>
        <img
          src={img[current]}
          onDragStart={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
          className={styles.img}
        />

        {!isFirst && (
          <Button
            variant="primary"
            className={styles.prev}
            onClick={() => setCurrent(current - 1)}
          >
            <ChevronLeft />
          </Button>
        )}

        {!isLast && (
          <Button
            variant="primary"
            className={styles.next}
            onClick={() => setCurrent(current + 1)}
          >
            <ChevronRight />
          </Button>
        )}
      </div>
    </>
  );
}

export default Carousel;
