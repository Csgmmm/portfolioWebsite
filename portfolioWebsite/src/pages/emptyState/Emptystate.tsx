import styles from "./emptystate.module.css";
import emptystate from "./assets/emptystate.png";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button";
import Navbar from "../../components/navbar/Navbar";

function Emptystate() {
  return (
     <div className={styles.page}>
      <Navbar />
      <div className={styles.emptyState}>
        <img src={emptystate} width="400" alt="Project not found" />
        <h3 className={styles.errorTitle}>Ooops! Looks like you got lost.</h3>
        <p className={styles.errorP}>Page not found.</p>
        <Link to="/">
          <Button variant="primary">Homepage</Button>
        </Link>
      </div>
    </div>
  );
}

export default Emptystate;
