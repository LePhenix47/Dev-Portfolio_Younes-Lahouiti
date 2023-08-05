/* eslint-disable react-hooks/exhaustive-deps */
//React
import { useEffect, useRef, useState } from "react";

//Next

//Variables
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
import {
  CanvasComponent,
  MetaData,
} from "@components/shared/shared.components";

import {
  PAGE_METADATA,
  OPEN_GRAPH,
} from "@utilities/variables/shared/index-shared.variables";

import { PortfolioProjectCard } from "@components/common/portfolio/portfolio-page.components";
import Icons from "@components/shared/icons/Icons";
import {
  filterArrayByString,
  sortArrayOfObjects,
} from "@utilities/helpers/arrays.helpers";
import { formatStringCase } from "@utilities/helpers/string.helpers";
import { formatShortDate } from "@utilities/helpers/internalization.helpers";

//Components

/**
 * Portfolio page: `/portfolio`
 */
export default function Portfolio(): JSX.Element {
  const { portfolio } = PAGE_METADATA;
  const portfolioPageSectionRef = useRef<HTMLElement>(null);
  /**
   * State that holds the data for the cards within the container
   */
  const [dataToShow, setDataToShow] = useState<projectsMadeType>(allProjects);

  /**
   * State that stores the copied data for the data to show to make the filtering work
   */
  const [copiedData, setCopiedData] = useState<any>(allProjects);
  /**
   * Reference for the `<select>` element
   */
  const selectValueRef = useRef<any>(null);

  /**
   * Reference for the `<input type="text" /> element`
   */
  const inputValueRef = useRef<any>(null);

  /**
   * Reference for the `<input type="checkbox" />` element
   */
  const checkboxValueRef = useRef<any>(null);
  /**
   * State that determines the category of the cards to be displayed
   */
  const [categoryState, setCategory] = useState<string>("all");

  /**
   * State that determines if the cards need to be sorted
   */
  const [needsSorting, setNeedsSorting] = useState<boolean>(false);

  /**
   * State that stores the value of the `<select>`
   */
  const [selectValue, setSelectValue] = useState<string>("title");

  /**
   * State that determines if the cards need to be filtered
   */
  const [needsFiltering, setNeedsFiltering] = useState<boolean>(false);

  /**
   * State that sets the value to be filtered by
   */
  const [filterValue, setFilterValue] = useState<string>("");

  /**
   * State that determines if the cards needs to be sorted in reverse
   */
  const [isInReverse, setIsInReverse] = useState<boolean>(false);

  /**
   * Function that sorts randomly the cards
   */
  function randomSort() {
    return Math.random() - 0.5;
  }

  /**
   * Function that changes the cards to shown to the container
   */
  function changeCards(category: string) {
    switch (category) {
      case "openclassrooms": {
        //openclassroomsProjects
        setCardsToShow(openClassroomsProjects, category);
        break;
      }
      case "personal": {
        //personalProjects
        setCardsToShow(personalProjects, category);
        break;
      }
      case "professional": {
        //professionalProjects
        setCardsToShow(professionalProjects, category);
        break;
      }
      case "npm": {
        //npmProjects
        setCardsToShow(npmProjects, category);
        break;
      }
      case "extensions": {
        //browserExtensionProjects
        setCardsToShow(browserExtensionProjects, category);
        break;
      }
      default: {
        setCardsToShow(allProjects, category);
        break;
      }
    }
  }

  /**
   * Function that sets the cards to show
   *
   * @returns {void}
   */
  function setCardsToShow(cards: projectsMadeType, category: string): void {
    setDataToShow(cards.sort(randomSort));
    setCopiedData(cards);
    setCategory(category);
  }

  /**
   * Will update the component whenever the user
   * inputs something in the field
   *
   */
  useEffect(() => {
    /**
     * We take the original unfiltered data and we then filter it
     */
    const filteredData: any[] = filterArrayByString(copiedData, filterValue);

    if (needsFiltering) {
      //We set the state to be equal to the filtered data
      setDataToShow(filteredData);
    }
  }, [needsFiltering, filterValue]);

  /**
   * Will update the component whenever the user
   * changes the select value or the order of the sorting
   */
  useEffect(() => {
    const sortedData: any[] = sortArrayOfObjects(
      dataToShow,
      selectValue,
      isInReverse
    );

    if (needsSorting) {
      setDataToShow(sortedData);
    }
  }, [needsSorting, selectValue, isInReverse]);

  /**
   * Function that resets the cards when the input is empty
   */
  function resetDataToShow() {
    setDataToShow(copiedData);
  }

  return (
    <>
      <MetaData
        title={portfolio.title}
        description={portfolio.description}
        pageUri={portfolio.pageUri}
        needsIndexation={portfolio.needsIndexation}
        needsRobotCrawlers={portfolio.needsRobotCrawlers}
        openGraph={OPEN_GRAPH}
      />

      {/* 
      Because the parent element uses the `transform` property for the pages transitions, 
      child elements need to be positioned to the flow of the document, thus why we cannot use position: sticky nor position: fixed.
     */}

      <section className="portfolio-page" ref={portfolioPageSectionRef}>
        <CanvasComponent parentElement={portfolioPageSectionRef} />

        <h1 className="portfolio-page__title" id="top">
          Portfolio
        </h1>
        <h2 className="portfolio-page__subtitle">
          A showcase of my personal and professional work
        </h2>

        <div className="portfolio-page__inputs-container">
          <div className="portfolio-page__label-input">
            <label htmlFor="search" className="portfolio-page__label">
              <Icons.Search />
            </label>
            <input
              ref={inputValueRef}
              type="search"
              name="search"
              id="search"
              placeholder="Search for a project by their title or date"
              className="portfolio-page__input"
              onInput={(e) => {
                const valueOfInput: string = e.currentTarget.value.trim();

                inputValueRef.current = valueOfInput;

                const valueIsEmpty: boolean = !valueOfInput.length;

                if (valueIsEmpty) {
                  setFilterValue("");
                  setNeedsFiltering(false);

                  resetDataToShow();
                  return;
                }

                setNeedsFiltering(true);
                setFilterValue(valueOfInput);
              }}
            />
          </div>
          <div className="portfolio-page__select-container">
            <select
              name="sort"
              id="sort"
              ref={selectValueRef}
              className="portfolio-page__select"
              onChange={(e) => {
                const valueOfSelect: string = e.target.value;

                // We don't want to sort if they have the default value: "---" selected
                const isInitialPlaceholderValue: boolean =
                  valueOfSelect.includes("---");

                if (isInitialPlaceholderValue) {
                  return;
                }

                setSelectValue(valueOfSelect);

                setNeedsSorting(true);
              }}
            >
              <option className="portfolio-page__option" value="---">
                ---
              </option>
              <option className="portfolio-page__option" value="title">
                Title
              </option>
              <option className="portfolio-page__option" value="date">
                Date
              </option>
            </select>
            <label
              className="portfolio-page__select-label"
              htmlFor="sort"
            ></label>
          </div>

          <div className="portfolio-page__sorting-order-label-input">
            <label
              htmlFor="sort-order"
              className="portfolio-page__sorting-order-label"
            >
              {isInReverse ? "Descending" : "Ascending"}{" "}
              <span
                className={`portfolio-page__sorting-order-label-arrow ${
                  isInReverse &&
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
              onClick={(e) => {
                const isChecked: boolean = e.currentTarget.checked;

                setIsInReverse(isChecked);
              }}
            />
          </div>
        </div>

        <div className="portfolio-page__categories-container">
          {/* Categories   */}
          {projectCategories.map((category: string, index: number) => {
            const lowerCaseCategory = formatStringCase(category, "lowercase");
            return (
              <button
                key={`${category}`}
                onClick={() => {
                  changeCards(lowerCaseCategory);

                  setNeedsFiltering(false);
                  setFilterValue("");
                }}
                type="button"
                className={`portfolio-page__filter-button ${
                  categoryState === lowerCaseCategory &&
                  "portfolio-page__filter-button--active"
                }  portfolio-page__filter-button-all`}
              >
                {category}
              </button>
            );
          })}
          {/*            */}
        </div>

        <div className="portfolio-page__project-cards-container">
          {/*     Project Cards       */}
          {dataToShow.map((project, index: number) => {
            const { title, image, link, date, type } = project;

            const formattedDate = formatShortDate(date);

            return (
              <PortfolioProjectCard
                title={title}
                image={image}
                formattedDate={formattedDate}
                link={link}
                type={type}
                key={`${index}-${title}-${link}`}
              />
            );
          })}

          {!dataToShow.length && needsFiltering && (
            <p className="portfolio-page__project-cards-container-not-found">
              Sorry, we find any results matching your search: &quot;
              {inputValueRef.current}&quot;
              <br />
              ಠ_ಠ
            </p>
          )}
          {/*            */}
        </div>
      </section>
    </>
  );
}
