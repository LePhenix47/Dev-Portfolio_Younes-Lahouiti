import { formatStringCase } from "@utilities/helpers/string.helpers";
import React from "react";

type ProjectsButtonProps = {
  projectsCategories: any[];
  currentCategory: any;
  onClick: () => void;
};

/**
 * Renders a button for each project category.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.projectsCategories - The array of project categories.
 * @param {string} props.currentCategory - The currently selected category.
 * @param {Function} props.onClick - The click event handler for the button.
 * @returns {JSX.Element} - The rendered button components.
 */
export default function ProjectsButton({
  projectsCategories,
  currentCategory,
  onClick,
}: ProjectsButtonProps): JSX.Element {
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
