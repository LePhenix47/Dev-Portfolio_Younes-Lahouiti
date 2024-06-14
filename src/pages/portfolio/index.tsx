//? React
import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

//? Next
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import router from "next/router";

//? Variables
import {
  openClassroomsProjects,
  personalProjects,
  professionalProjects,
  npmProjects,
  browserExtensionProjects,
  allProjects,
} from "@utilities/variables/common/portfolio/projects.variables";

import { projectCategories } from "@utilities/variables/common/portfolio/projects-categories.variables";
import { projectsMadeType } from "@utilities/types/portfolio/projects.types";

//? Shared components
import {
  Button,
  CanvasComponent,
  MetaData,
} from "@components/shared/shared.components";
import Icons from "@components/shared/icons/Icons";

import {
  PAGE_METADATA,
  OPEN_GRAPH,
} from "@utilities/variables/shared/index-shared.variables";

//? Common component
import { PortfolioProjectCard } from "@components/common/portfolio/portfolio-page.components";

//? Helpers
import {
  formatStringCase,
  removeAccents,
} from "@utilities/helpers/string.helpers";
import {
  formatPrecisionNumber,
  formatShortDate,
} from "@utilities/helpers/internalization.helpers";
import Link from "next/link";

/**
 * Portfolio page: `/portfolio`
 *
 * This component represents the Portfolio page of the website. It showcases the developer's personal and professional projects. The page includes project cards that can be filtered, sorted, and searched by title or date. The user can also select different project categories to view specific types of projects.
 *
 * @returns {JSX.Element} The JSX element representing the Portfolio page.
 */
export default function Portfolio(): JSX.Element {
  const { portfolio } = PAGE_METADATA;

  /**
   * Reference to the portfolio page section to be used for the canvas element
   */
  const portfolioPageSectionRef = useRef<HTMLElement>(null);

  const [showResetButton, setShowResetButton] = useState<boolean>(false);

  /**
   * State and dispatcher for managing project cards.
   */
  const [projectCardsState, projectCardsDispatch] = useReducer(
    // @ts-ignore
    (
      state: {
        category: string;
        query: string;
        sortBy: string;
        sortOrder: string;
      },
      action: { type: string; payload: string }
    ) => {
      switch (action.type) {
        case "SET_CATEGORY": {
          return { ...state, category: action.payload };
        }
        case "SET_QUERY": {
          return { ...state, query: action.payload };
        }
        case "SET_SORT_BY": {
          return { ...state, sortBy: action.payload };
        }
        case "TOGGLE_SORT_ORDER": {
          return { ...state, sortOrder: action.payload };
        }
        default:
          return state;
      }
    },
    { category: "all", query: "", sortBy: "date", sortOrder: "asc" }
  );

  /**
   * Memoized project card data for displaying on the page.
   */
  const filteredAndSortedData: projectsMadeType = useMemo(() => {
    const dataToShow: projectsMadeType = changeCards(
      projectCardsState.category
    );

    const filteredData: projectsMadeType = filterProjectsData(
      dataToShow,
      projectCardsState.query
    );

    const sortedData: projectsMadeType = sortProjectsData(
      filteredData,
      projectCardsState.sortBy as (typeof sortOptions)[number],
      projectCardsState.sortOrder
    );

    return sortedData;
  }, [projectCardsState]);

  /**
   * Formatted amount of projects diplayed
   */
  const formattedAmountOfProjects: string = formatPrecisionNumber(
    filteredAndSortedData.length
  );

  /**
   * URL search parameters.
   */
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  useEffect(() => {
    const category: string = searchParams.get("category") || "all";
    const query: string = searchParams.get("query") || "";
    const sortBy: string = searchParams.get("sort") || "date";
    const sortOrder: string = searchParams.get("order") || "asc";

    projectCardsDispatch({ type: "SET_CATEGORY", payload: category });
    projectCardsDispatch({ type: "SET_QUERY", payload: query });
    projectCardsDispatch({ type: "SET_SORT_BY", payload: sortBy });
    projectCardsDispatch({ type: "TOGGLE_SORT_ORDER", payload: sortOrder });
  }, [searchParams]);

  /**
   * Handles input in the search bar to filter the project cards
   */
  function resetInput(e: React.MouseEvent): void {
    const inputElement = e.currentTarget as HTMLInputElement;
    inputElement.value = "";

    projectCardsDispatch({
      type: "SET_QUERY",
      payload: "",
    });

    // Clone the existing search params to make modifications
    updateSearchParams({ query: "" });

    setShowResetButton(false);

    const searchInputElement = searchInputRef.current as HTMLInputElement;

    searchInputElement.focus();
  }

  /**
   * Handles input in the search bar to filter the project cards
   * @param {FormEvent<HTMLInputElement>} e - The input event.
   */
  function handleSearchInput(e: FormEvent<HTMLInputElement>): void {
    e.preventDefault();
    // Update the URL with the new query parameter
    const inputElement = searchInputRef.current as HTMLInputElement;
    const newQuery: string = inputElement.value;

    setShowResetButton(inputElement.value !== "");

    projectCardsDispatch({
      type: "SET_QUERY",
      payload: newQuery,
    });

    // Clone the existing search params to make modifications
    updateSearchParams({ query: newQuery });
  }

  /**
   * List of values for the search input's datalist.
   */
  const dataListValues = useMemo(() => {
    return [
      { value: "DW", description: "OC path: Web developer" },
      { value: "JS-React", description: "OC path: Front-end developer" },
      { value: "Java-Angular", description: "OC path: Fullstack developer" },
      { value: "Audio", description: "Personal project" },
      { value: "Color converter", description: "NPM library" },
    ] as const;
  }, []);

  /**
   * List of sorting options.
   */
  const sortOptions = useMemo(() => {
    return ["title", "date"] as const;
  }, []);

  /**
   * Reference for the `<select>` element
   */
  const selectValueRef = useRef<HTMLSelectElement>(null);

  /**
   * Reference for the `<input type="search" /> element`
   */
  const searchInputRef = useRef<HTMLInputElement>(null);

  /**
   * Reference for the `<input type="checkbox" />` element
   */
  const checkboxValueRef = useRef<HTMLInputElement>(null);

  /**
   * Filters an array of projects based on the provided query.
   * @param {projectsMadeType} data - The array of projects to filter.
   * @param {string} query - The search query.
   * @returns {projectsMadeType} - The filtered array of projects.
   */
  function filterProjectsData(
    data: projectsMadeType,
    query: string
  ): projectsMadeType {
    return data.filter((project) => {
      const normalizedQuery: string = removeAccents(query.toLowerCase());
      const normalizedProjectTitle: string = removeAccents(
        project.title.toLowerCase()
      );

      return normalizedProjectTitle.includes(normalizedQuery);
    });
  }

  /**
   * Sorts an array of projects by the specified options.
   * @param {projectsMadeType} data - The array of projects to sort.
   * @param {(typeof sortOptions)[number]} sortBy - The property to sort by.
   * @param {string} sortOrder - The sorting order ('asc' or 'desc').
   * @returns {projectsMadeType} - The sorted array of projects.
   */
  function sortProjectsData(
    data: projectsMadeType,
    sortBy: (typeof sortOptions)[number],
    sortOrder: string
  ): projectsMadeType {
    const sortedData = data.sort((a, b) => {
      const valueA: string | Date = a[sortBy];
      const valueB: string | Date = b[sortBy];

      switch (sortBy) {
        case "date": {
          return (valueA as Date).getTime() > (valueB as Date).getTime()
            ? 1
            : -1;
        }
        case "title": {
          return (valueA as string).localeCompare(valueB as string);
        }
        default: {
          const randomNumberIsOverTen: boolean = Math.random() * 20 >= 10;
          return randomNumberIsOverTen ? 1 : -1;
        }
      }
    });

    return sortOrder === "asc" ? sortedData : sortedData.reverse();
  }

  /**
   * Changes the set of cards based on the selected category.
   * @param {string} category - The selected category.
   * @returns {projectsMadeType} The updated set of projects.
   */
  function changeCards(category: string): projectsMadeType {
    switch (category) {
      case "openclassrooms": {
        //openclassroomsProjects
        return openClassroomsProjects;
      }
      case "personal": {
        //personalProjects
        return personalProjects;
      }
      case "professional": {
        //professionalProjects
        return professionalProjects;
      }
      case "npm": {
        //npmProjects
        return npmProjects;
      }
      case "extensions": {
        //browserExtensionProjects
        return browserExtensionProjects;
      }
      default: {
        return allProjects;
      }
    }
  }

  /**
   * Handles a change in the selected category.
   * @param {string} category - The selected category.
   */
  function handleCategoryChange(category: string): () => void {
    return () => {
      // // * When the view transition API will be available for all browsers we'll be able to use it
      // const supportsViewTransitionApi: boolean = Boolean(
      //   // @ts-ignore
      //   document.startViewTransition
      // );
      // if (supportsViewTransitionApi) {
      //   // *Makes a nice transition whenever we click on a category (currently not supported on other browsers)
      //   document
      //     // @ts-ignore
      //     .startViewTransition(() => {});
      // }

      projectCardsDispatch({ type: "SET_CATEGORY", payload: category });
      changeCards(category);

      updateSearchParams({ category });
    };
  }

  /**
   * Handles a change in the selected sort option.
   * @param {ChangeEvent<HTMLSelectElement>} e - The select change event.
   */
  function handleSelectChange(e: ChangeEvent<HTMLSelectElement>): void {
    const sortByValue: string = e.target.value;
    projectCardsDispatch({ type: "SET_SORT_BY", payload: sortByValue });

    updateSearchParams({ sort: sortByValue });
  }

  /**
   * Handles a change in the sorting order.
   * @param {ChangeEvent<HTMLInputElement>} e - The checkbox change event.
   */
  function handleSortingOrderChange(e: ChangeEvent<HTMLInputElement>): void {
    const isReverse: string = e.target.checked ? "asc" : "desc";
    projectCardsDispatch({ type: "TOGGLE_SORT_ORDER", payload: isReverse });

    updateSearchParams({ order: isReverse });
  }

  /**
   * Updates the URL search parameters based on the provided parameters.
   * @param {{ [key: string]: string }} params - The parameters to update in the URL.
   * @returns {void}
   * @description This function updates the URL search parameters based on the provided parameters object.
   * It retrieves the key from the object property and sets the corresponding value in the URL search parameters.
   * The updated URL is then used to replace the current URL without a full page reload.
   */
  function updateSearchParams(params: { [key: string]: string }): void {
    const newSearchParams = new URLSearchParams(searchParams);

    for (const [key, value] of Object.entries(params)) {
      newSearchParams.set(key, value);
    }

    router.replace({ search: String(newSearchParams) }, undefined, {
      shallow: true,
    });
  }

  return (
    <>
      <MetaData
        title={portfolio.title}
        description={portfolio.description}
        pageUri={portfolio.pageUri}
        needsIndexation={portfolio.needsIndexation}
        allowRobotCrawlers={portfolio.allowRobotCrawlers}
        openGraph={OPEN_GRAPH}
      />

      <section
        className="portfolio-page page-section"
        ref={portfolioPageSectionRef}
      >
        <Link href="#top" className={"portfolio-page__anchor"} target="_top">
          <Icons.UpArrow width={24} height={24} fill={"currentColor"} />
        </Link>

        <CanvasComponent parentElement={portfolioPageSectionRef} />

        <h1 className="portfolio-page__title" id="top">
          Portfolio
        </h1>
        <h2 className="portfolio-page__subtitle">
          A showcase of my personal and professional work
        </h2>

        {/*
         // * Once support on React TSX I'll need to replace the `<form>` with a `<search>`
         */}
        <form className="portfolio-page__inputs-container">
          <fieldset className="portfolio-page__label-input">
            {!showResetButton && (
              <label htmlFor="search" className="portfolio-page__label">
                <Icons.Search />
              </label>
            )}

            {showResetButton && (
              <button
                type="reset"
                className="portfolio-page__input-reset-button"
                onClick={resetInput}
              >
                ×
              </button>
            )}

            <input
              ref={searchInputRef}
              type="search"
              name="search"
              id="search"
              list="search-datalist"
              value={projectCardsState.query}
              placeholder="Search for a project by its title"
              className="portfolio-page__input"
              onInput={handleSearchInput}
            />
            <datalist id="search-datalist">
              {dataListValues.map((dataListValue, index) => {
                const { value, description } = dataListValue;
                return (
                  <option value={value} key={index}>
                    {description}
                  </option>
                );
              })}
            </datalist>
          </fieldset>
          <fieldset className="portfolio-page__select-container">
            <select
              name="sort"
              id="sort"
              ref={selectValueRef}
              className="portfolio-page__select"
              onChange={handleSelectChange}
              value={projectCardsState.sortBy || "---"}
            >
              <option className="portfolio-page__option" value="---">
                ---
              </option>
              {sortOptions.map((option, index) => {
                return (
                  <option
                    className="portfolio-page__option"
                    value={option}
                    key={index}
                  >
                    {option}
                  </option>
                );
              })}
            </select>
            <label
              className="portfolio-page__select-label"
              htmlFor="sort"
            ></label>
          </fieldset>
          {/* The  */}
          <fieldset className="portfolio-page__sorting-order-label-input">
            <label
              htmlFor="sort-order"
              className="portfolio-page__sorting-order-label"
            >
              {projectCardsState.sortOrder === "desc"
                ? "Descending"
                : "Ascending"}{" "}
              <span
                className={`portfolio-page__sorting-order-label-arrow ${
                  projectCardsState.sortOrder === "desc" &&
                  "portfolio-page__sorting-order-label-arrow--rotate"
                }`}
              >
                ↑
              </span>
            </label>
            <input
              type="checkbox"
              name="sort-order"
              id="sort-order"
              className="portfolio-page__sorting-order-button hide"
              ref={checkboxValueRef}
              onChange={handleSortingOrderChange}
              value={String(projectCardsState.sortBy === "asc")}
            />
          </fieldset>
        </form>

        <div className="portfolio-page__categories-container">
          <div className="portfolio-page__counter">
            <p className="portfolio-page__counter-paragraph">
              <span className="portfolio-page__counter-text">
                Projects created:
              </span>
              <span className="portfolio-page__counter-value">
                {formattedAmountOfProjects}
              </span>
            </p>
          </div>

          <nav className="portfolio-page__categories">
            {/* Categories   */}
            {projectCategories.map((category: string, index: number) => {
              const lowerCaseCategory = formatStringCase(category, "lowercase");
              return (
                <Button
                  key={index}
                  onClick={handleCategoryChange(lowerCaseCategory)}
                  type="button"
                  arrayOfClasses={`portfolio-page__filter-button ${
                    projectCardsState.category === lowerCaseCategory &&
                    "portfolio-page__filter-button--active"
                  }  portfolio-page__filter-button-all`.split(" ")}
                >
                  {category}
                </Button>
              );
            })}
          </nav>
        </div>

        <ul className="portfolio-page__project-cards-container">
          {/* Project cards */}
          {filteredAndSortedData.map((project) => {
            const { title, image, link, date, type } = project;

            return (
              <PortfolioProjectCard
                title={title}
                image={image}
                date={date}
                link={link}
                type={type}
                key={`${title}-${link}`}
              />
            );
          })}

          {!filteredAndSortedData.length && projectCardsState.query !== "" && (
            <p className="portfolio-page__project-cards-container-not-found">
              Sorry, we couldn&apos;t find any results matching your search for:
              &quot;{(searchInputRef.current as HTMLInputElement).value}
              &quot;
              <br />
              ಠ_ಠ
            </p>
          )}
        </ul>
      </section>
    </>
  );
}
