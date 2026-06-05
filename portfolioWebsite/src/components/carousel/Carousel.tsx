import { useState } from "react";
import styles from "./carousel.module.css";
import { ChevronLeft, ChevronRight, Minus, X } from "lucide-react";
import Button from "../buttons/Button";

interface ICarousel {
  img: string[];
  title: string;
}

function Carousel({ img, title }: ICarousel) {
  const [current, setCurrent] = useState(0);
  const [minimized, setMinimized] = useState(false);
  const [closed, setClosed] = useState(false);
  const isFirst = current === 0;
  const isLast = current === img.length - 1;

  return (
    <>
      {!closed && (
        
        <div className={styles.browserFrame}>
          <div className={styles.browserBar}>
            <span
              className={`${styles.dot} ${styles.dotRed}`}
              onClick={() => setClosed(!closed)}><X size={8} className={styles.icon} /></span>
            <span
              className={`${styles.dot} ${styles.dotYellow}`}
              onClick={() => setMinimized(!minimized)}
            >
              <Minus size={8} className={styles.icon} />
            </span>

            <span className={`${styles.dot} ${styles.dotGreen}`} />
            <div className={styles.title}>{title}</div>
          </div>

          {!minimized && (
            <div className={styles.carousel}>
              <img src={img[current]} />

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
          )}
        </div>
      )}
    </>
  );
}

export default Carousel;
