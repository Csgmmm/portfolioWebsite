import { useState } from "react";
import ButtonFilter from "../buttonFilter/ButtonFilter";
import styles from "./filter.module.css";
import { ChevronDown } from "lucide-react";

export type FilterType = "All" | "Front-End Development" | "UI/UX Design";

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
  const [open, setOpen] = useState(false);


  return (
    <>
      <div className={styles.filterDesktop}>
        {filters.map((filter, index) => (
          <ButtonFilter
            key={filter}
            variant={activeFilter === filter ? "primary" : "secondary"}
            onClick={() => onFilterChange(filter)}
            position={
              index === 0
                ? "first"
                : index === filters.length - 1
                  ? "last"
                  : "middle"
            }
            // index === 0 → é o primeiro → "first". index === filters length - 1 → é o último → "last"qualquer outro → está no meio → "middle". AKA: "o index ´0? então é first, senão se o index tiver exatamente o tamanho do array -1, que é que o ultimo item do arrau então é o "last", senão, é middle"
          >
            {filter}
          </ButtonFilter>
        ))}
      </div>

      <div className={styles.filterMobile}>
        <button
          className={styles.dropdownButton}
          onClick={() => setOpen(!open)}
        >
          {activeFilter}
          <ChevronDown size={16} />
        </button>

        {open && (
          <div className={styles.dropdownMenu}>
            {filters.map((filter) => (
              <ButtonFilter
                key={filter}
                variant={activeFilter === filter ? "primary" : "secondary"}
                onClick={() => {
                  onFilterChange(filter);
                  setOpen(false);
                }}
              >
                {filter}
              </ButtonFilter>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Filter;
