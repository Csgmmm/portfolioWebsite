import { useState } from "react";
import styles from "./carousel.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  img: string[];
  title?: string;
}

function Carousel({ img, title }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const isFirst = current === 0;
  const isLast = current === img.length - 1;

  return (
    <div className={styles.browserFrame}>
      <div className={styles.browserBar}>
        <span className={`${styles.dot} ${styles.dotRed}`} />
        <span className={`${styles.dot} ${styles.dotYellow}`} />
        <span className={`${styles.dot} ${styles.dotGreen}`} />
        {title && <span className={styles.browserTitle}>{title}</span>}
      </div>

      <div className={styles.carousel}>
        <img src={img[current]} />

        {!isFirst && (
          <button className={styles.prev} onClick={() => setCurrent(current - 1)}>
            <ChevronLeft />
          </button>
        )}

        {!isLast && (
          <button className={styles.next} onClick={() => setCurrent(current + 1)}>
            <ChevronRight />
          </button>
        )}
      </div>
    </div>
  );
}

export default Carousel;