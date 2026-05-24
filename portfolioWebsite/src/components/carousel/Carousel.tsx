import { useState } from "react";
import styles from "./carousel.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  img: string[];
}

function Carousel({ img }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const isFirst = current === 0;
  const isLast = current === img.length - 1;

  return (
    <div className={styles.carousel}>
      <img src={img[current]} />

      {!isFirst && (
        <button className={styles.prev} onClick={() => setCurrent(current - 1)}><ChevronLeft /></button>
      )}

      {!isLast && (
        <button className={styles.next} onClick={() => setCurrent(current + 1)}><ChevronRight /></button>
      )}
    </div>
  );
}

export default Carousel;
