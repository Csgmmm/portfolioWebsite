import type { ReactNode } from "react";
import styles from "./buttonFilter.module.css";

type ButtonFilterProps = {
  children?: ReactNode;
  variant: "primary" | "secondary";
  isActive?: boolean;
  onClick?: () => void;
  position?: "first" | "middle" | "last";
};

function ButtonFilter({
  children,
  variant,
  isActive,
  onClick,
  position,
}: ButtonFilterProps) { 
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${position ? styles[position] : ""} ${isActive ? styles.active : ""}`}
    >
      {children}
    </button>
  );
}

export default ButtonFilter;