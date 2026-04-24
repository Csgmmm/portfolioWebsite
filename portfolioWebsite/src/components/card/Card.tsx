import type { ReactNode } from "react";
import styles from "./card.module.css";

interface ICard {
  children: ReactNode;
}

function Card({ children }: ICard) {
  return (
    <div
      className={`${styles.card}`}
    >
      {children}
    </div>
  );
}

export default Card;
