import { formatStringCase } from "@utilities/helpers/string.helpers";
import React from "react";

export default function ProjectsButton({
  projectsCategories,
  currentCategory,
  onClick,
}: {
  projectsCategories: any[];
  currentCategory: any;
  onClick: () => void;
}) {
  return (
    <>
      {projectsCategories.map((category: string) => {
        const lowerCaseCategory: string = formatStringCase(
          category,
          "lowercase"
        );

        return (
          <button
            key={`${category}`}
            onClick={onClick}
            type="button"
            className={`portfolio-page__filter-button ${
              currentCategory === lowerCaseCategory &&
              "portfolio-page__filter-button--active"
            }  portfolio-page__filter-button-all`}
          >
            {category}
          </button>
        );
      })}
    </>
  );
}
