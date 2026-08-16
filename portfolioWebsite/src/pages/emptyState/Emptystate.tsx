import styles from "./emptystate.module.css";
import emptystate from "./assets/emptystate.png";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button";
import Navbar from "../../components/navbar/Navbar";

interface EmptyStateProps {
  theme: string;
  onToggleTheme: () => void;
}

function Emptystate({ theme, onToggleTheme }: EmptyStateProps) {
  return (
    <div className={styles.page}>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <div className={styles.emptyState}>
        <img src={emptystate} width="400" alt="Project not found" />
        <h3 className={styles.errorTitle}>Ooops! Looks like you got lost.</h3>
        <h5>Page not found.</h5>
        <Link to="/homepage">
          <Button variant="primary">Homepage</Button>
        </Link>
      </div>
    </div>
  );
}

export default Emptystate;
