import type { ReactNode } from "react";
import styles from "./button.module.css";
type Button = {
  children?: ReactNode;
  variant: "primary" | "secondary" | "tertiary" | "link";
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
};

function Button({
  children,
  variant,
  isActive,
  onClick,
  className,
  icon = false,
}: Button) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${isActive ? styles.active : ""} ${className}`}
    >
      {icon}
      {children}
    </button>
  );
}

export default Button;
