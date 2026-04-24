import type { ReactNode } from "react";
import styles from "./button.module.css";
type Button = {
  children: ReactNode;
  variant: "primary" | "secondary" | "tertiary";
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
};

function Button({ children, variant, isActive, onClick, className }: Button) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${isActive ? styles.active : ""} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
