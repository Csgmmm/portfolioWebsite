import type { ReactNode } from "react";
import styles from "./chip.module.css";

interface IChip {
  children: ReactNode;
  variant: "primary" | "secondary" | "tertiary";
  className?: string;
}

function Chip({ children, variant, className }: IChip) {
  return (
    <div className={`${styles[variant]} ${className || ""}`}>
      <span>{children}</span>
    </div>
  );
}

export default Chip;
