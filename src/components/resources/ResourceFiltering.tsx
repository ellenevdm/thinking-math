"use client";
// import { categoryCards } from "@/data/dummyCategories";
import { FC, useState } from "react";

import FilterCard from "../ui/FilterCard";
import FilterToggle from "../ui/FilterToggle";
import { gradeCards } from "@/data/dummyGrades";
import { phaseCards } from "@/data/dummyPhases";
import { useResourceStore } from "@/store/resourceStore";

interface ResourceFilteringProps {
  searchTerm: string;
  selectedCategories: string[];
  selectedGrades: string[];
  selectedPhases: string[];
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCategoryChange: (categoryId: string) => void;
  onGradeChange: (gradeId: string) => void;
  onPhaseChange: (phaseId: string) => void;
}

const ResourceFiltering: FC<ResourceFilteringProps> = ({
  searchTerm,
  selectedCategories,
  selectedGrades,
  selectedPhases,
  onSearchChange,
  onCategoryChange,
  onGradeChange,
  onPhaseChange,
}) => {
  const categories = useResourceStore((state) => state.categories);
  const [categoryActive, setCategoryActive] = useState(false);
  const [phaseActive, setPhaseActive] = useState(false);
  const [gradeActive, setGradeActive] = useState(false);

  const toggleCategory = () => setCategoryActive(!categoryActive);
  const togglePhase = () => setPhaseActive(!phaseActive);
  const toggleGrade = () => setGradeActive(!gradeActive);

  return (
    <div className="filter-container flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-row border border-gray-200 rounded-lg p-2 items-center justify-center lg: w-5/6 mt-2 focus-within:border-gray-600">
        {" "}
        <input
          type="text"
          placeholder="Search..."
          onChange={onSearchChange}
          value={searchTerm}
          className="search-bar h-full w-full focus:outline-none focus:border-none"
        />
        {searchTerm !== "" && (
          <button
            className="search-btn focus:outline-none focus:border-none cursor-pointer"
            onClick={() =>
              onSearchChange({
                target: { value: "" },
              } as React.ChangeEvent<HTMLInputElement>)
            }
          >
            X{" "}
          </button>
        )}
      </div>
      <div className="flex flex-col w-full gap-10 items-center justify-center lg:w-5/6">
        <FilterToggle
          filterName="Categories"
          onClick={toggleCategory}
          isActive={categoryActive}
        />
        {categoryActive && (
          <div className="flex flex-wrap w-full gap-2 items-center justify-start">
            {categories.map((cat) => (
              <FilterCard
                dataId="category-card"
                id={cat.id}
                key={cat.id}
                name={cat.name}
                onClick={() => onCategoryChange(cat.id)}
                isActive={() => selectedCategories.includes(cat.id)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="lg:w-5/6 flex w-full flex-col gap-5 items-center justify-center">
        <FilterToggle
          filterName="Phases"
          onClick={togglePhase}
          isActive={phaseActive}
        />
        {phaseActive && (
          <div className="flex flex-wrap gap-2 items-center justify-start">
            {phaseCards.map((phase) => (
              <FilterCard
                dataId="phase-card"
                id={phase.id}
                key={phase.id}
                name={phase.name}
                onClick={() => onPhaseChange(phase.id)}
                isActive={() => selectedPhases.includes(phase.id)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-5 items-center justify-center lg:w-5/6 w-full">
        <FilterToggle
          filterName="Grades"
          onClick={toggleGrade}
          isActive={gradeActive}
        />
        {gradeActive && (
          <div className="flex flex-wrap gap-2 items-center justify-start w-full">
            {gradeCards.map((grade) => (
              <FilterCard
                dataId="grade-card"
                id={grade.id}
                key={grade.id}
                name={grade.grade}
                onClick={() => onGradeChange(grade.id)}
                isActive={() => selectedGrades.includes(grade.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceFiltering;
