import { useState } from "react";
import styles from "./carousel.module.css";
import { ChevronLeft, ChevronRight, Minus, X } from "lucide-react";
import Button from "../buttons/Button";
import Card from "../card/Card";

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
