import { resourceCards } from "@/data";
import { Resource } from "@/types/types";
import React, {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
  useEffect,
} from "react";

interface FilterContextProps {
  activeGrades: string[];
  activeCategories: string[];
  activePhases: string[];
  filteredResources: Resource[];
  setActiveGrades: (grades: string[]) => void;
  setActiveCategories: (categories: string[]) => void;
  setActivePhases: (phases: string[]) => void;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: FC<FilterProviderProps> = ({ children }) => {
  const [activeGrades, setActiveGrades] = useState<string[]>([]);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [activePhases, setActivePhases] = useState<string[]>([]);
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);

  useEffect(() => {
    if (
      activeGrades.length === 0 &&
      activeCategories.length === 0 &&
      activePhases.length === 0
    ) {
      setFilteredResources(resourceCards);
    } else {
      const filtered = resourceCards.filter(
        (card) =>
          (activeGrades.length === 0 || activeGrades.includes(card.gradeId)) &&
          (activeCategories.length === 0 ||
            activeCategories.includes(card.categoryId)) &&
          (activePhases.length === 0 || activePhases.includes(card.phaseId))
      );
      setFilteredResources(filtered);
    }
  }, [activeGrades, activeCategories, activePhases]);

  return (
    <FilterContext.Provider
      value={{
        activeGrades,
        activeCategories,
        activePhases,
        setActiveGrades,
        setActiveCategories,
        setActivePhases,
        filteredResources,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
