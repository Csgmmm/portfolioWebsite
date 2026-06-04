import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import styles from "./projects.module.css";
import { projects } from "../../types/projectsData";
import Filter, { type FilterType } from "../../components/filter/Filter";
import { useState } from "react";

function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");


const yearToNumber = (year: number | string | undefined) => {
  if (!year) return 0;
  if (String(year).toLowerCase().includes("current")) return 9999;
  return parseInt(String(year), 10);
};

const filteredProjects = projects.filter((project) =>
  activeFilter === "All" ? true : project.category?.includes(activeFilter),
);

const sortedProjects = [...filteredProjects].sort(
  (a, b) => yearToNumber(b.year) - yearToNumber(a.year),
);

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.filters}>
          <Filter
            className={styles.filter}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>
        <div className={styles.cardsContainer}>
          {sortedProjects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
