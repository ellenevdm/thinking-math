"use client";

import { FC, useEffect, useState } from "react";

import ResourceCard from "@/components/resources/ResourceCard";
import ResourceFiltering from "@/components/resources/ResourceFiltering";
import { FilterProvider } from "@/context/FilterContext";
import { resourceCards } from "@/data/dummyResources";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const ResourceListPage: FC = () => {
  const { isAuthMode } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [selectedPhases, setSelectedPhases] = useState<string[]>([]);

  const [filteredResources, setFilteredResources] = useState(resourceCards);

  useEffect(() => {
    let newResources = [...resourceCards];

    if (searchQuery) {
      newResources = newResources.filter((resource) =>
        resource.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategories.length) {
      newResources = newResources.filter((resource) =>
        selectedCategories
          .map((m) => m.toLowerCase())
          .includes(resource.categoryId.toLowerCase())
      );
    }

    if (selectedGrades.length) {
      newResources = newResources.filter((resource) =>
        selectedGrades
          .map((m) => m.toLowerCase())
          .includes(resource.gradeId.toLowerCase())
      );
    }

    if (selectedPhases.length) {
      newResources = newResources.filter((resource) =>
        selectedPhases.some(
          (phase) => resource.phaseId.toLowerCase() === phase.toLowerCase()
        )
      );
    }

    setFilteredResources(newResources);
  }, [searchQuery, selectedCategories, selectedGrades, selectedPhases]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (categoryId: string) => {
    const newSelectedCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId];
    setSelectedCategories(newSelectedCategories);
  };

  const handleGradeChange = (gradeId: string) => {
    const newSelectedGrades = selectedGrades.includes(gradeId)
      ? selectedGrades.filter((id) => id !== gradeId)
      : [...selectedGrades, gradeId];
    setSelectedGrades(newSelectedGrades);
  };

  const handlePhaseChange = (phaseId: string) => {
    const newSelectedPhases = selectedPhases.includes(phaseId)
      ? selectedPhases.filter((id) => id !== phaseId)
      : [...selectedPhases, phaseId];
    setSelectedPhases(newSelectedPhases);
  };

  return (
    <div className="container mx-auto h-full flex flex-col lg:flex-row mt-5 gap-10">
      <div className="w-full lg:w-2/3 lg:border-r-2 border-gray-200 p-5">
        <h3 className="font-bold text-2xl text-center">Filters </h3>
        <ResourceFiltering
          searchTerm={searchQuery}
          selectedCategories={selectedCategories}
          selectedGrades={selectedGrades}
          selectedPhases={selectedPhases}
          onSearchChange={handleSearchChange}
          onCategoryChange={handleCategoryChange}
          onGradeChange={handleGradeChange}
          onPhaseChange={handlePhaseChange}
        />
      </div>
      <div>
        <h1 className="font-extrabold text-6xl text-center">Resources</h1>
        {isAuthMode && (
          <p className="flex justify-center items-center gap-2 mt-5 mb-5">
            <Link href="/resourceList/new-resource">
              <button className="bg-black text-white p-2 rounded shadow">
                Add New Resource
              </button>
            </Link>
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5">
          {filteredResources.map((card) => (
            <ResourceCard
              key={card.id}
              resource={{
                ...card,
                activities: (card.activities ?? []).map((activity) => ({
                  id: activity.actId,
                  name: activity.actName,
                  link: activity.actLink,
                })),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ResourceListPageWithProvider: FC = () => (
  <FilterProvider>
    <ResourceListPage />
  </FilterProvider>
);

export default ResourceListPageWithProvider;
