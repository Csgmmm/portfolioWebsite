import Button from "../buttons/Button";
import styles from "./filter.module.css"

export type FilterType =
  | "All"
  | "Front-End Development"
  | "UI/UX Design"
  | "Homepage";

interface IFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  className: string;
}

function Filter({ activeFilter, onFilterChange }: IFilterProps) {
  const filters: FilterType[] = [
    "All",
    "UI/UX Design",
    "Front-End Development",
  ];

  return (
    <div className={styles.filter}>
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? "primary" : "secondary"}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}

export default Filter;
