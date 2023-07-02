/* eslint-disable react-hooks/exhaustive-deps */
//React
import { useEffect, useRef, useState } from "react";

//Next
import Head from "next/head";

//Variables
import {
  openClassroomsProjects,
  personalProjects,
  professionalProjects,
  npmProjects,
  browserExtensionProjects,
  allProjects,
} from "@/react-utils/variables/projects.variables";

import {
  sortArrayOfObjects,
  filterArrayByString,
  formatText,
  formatDateToShort,
} from "@/react-utils/functions/helper-functions";

import { projectCategories } from "@/react-utils/variables/projects-categories.variables";
import { projectsMadeType } from "@/react-utils/types/projects.types";
import { CanvasComponent } from "@/components/common/common.components";
import { PortfolioProjectCard } from "@/components/portfolio/portfolio-page.components";

//Components

/**
 * Portfolio page: `/portfolio`
 */
export default function Portfolio(): JSX.Element {
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
    let sortedData: any[] = sortArrayOfObjects(
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
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="
          Check out my latest work! This page showcases some of my most recent projects, from simple landing pages to complex web applications. Each project highlights my technical skills and my commitment to delivering high-quality and user-friendly web experiences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Portfolio page" />
        <meta
          property="og:description"
          content="
          Check out my latest work! This page showcases some of my most recent projects, from simple landing pages to complex web applications. Each project highlights my technical skills and my commitment to delivering high-quality and user-friendly web experiences."
        />
        <meta property="og:image" content="/profile-pic.jpg" />
        <meta property="og:image:width" content="130" />
        <meta property="og:image:height" content="170" />
        <meta
          property="og:url"
          content="https://younes-portfolio-dev.vercel.app/portfolio"
        />
        {/*
         <!--Title--> 
         */}
        <title>Portfolio page</title>
      </Head>

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
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 700 700"
              >
                <g
                  transform="translate(0.00,700) scale(0.10,-0.10)"
                  fill="currentColor"
                  stroke="none"
                >
                  <path
                    d="M2305 6908 c-22 -5 -78 -13 -125 -18 -47 -5 -116 -15 -155 -24 -38
-8 -91 -19 -116 -25 -25 -5 -56 -14 -70 -19 -13 -6 -51 -18 -84 -27 -69 -21
-99 -31 -138 -51 -16 -8 -32 -14 -37 -14 -27 0 -277 -125 -337 -167 -17 -13
-34 -23 -37 -23 -9 0 -184 -121 -211 -146 -13 -12 -52 -43 -86 -70 -122 -94
-275 -259 -442 -478 -82 -108 -277 -473 -277 -519 0 -9 -4 -18 -9 -22 -5 -3
-13 -20 -17 -37 -3 -18 -10 -39 -14 -48 -12 -25 -32 -83 -40 -120 -4 -19 -13
-48 -18 -65 -28 -81 -60 -263 -66 -377 -3 -48 -10 -96 -15 -107 -14 -26 -14
-304 0 -318 5 -5 14 -59 19 -119 4 -60 16 -145 25 -189 9 -44 20 -100 24 -125
4 -25 11 -51 16 -59 4 -8 12 -31 16 -50 8 -42 55 -178 69 -203 6 -10 10 -23
10 -29 0 -7 14 -41 30 -76 53 -111 90 -187 103 -208 7 -10 30 -49 51 -85 166
-278 383 -519 652 -722 35 -26 65 -48 67 -48 2 0 37 -22 78 -49 162 -106 389
-214 559 -267 30 -9 59 -21 64 -25 6 -5 19 -9 30 -9 12 0 41 -6 66 -14 191
-61 541 -94 815 -75 88 5 173 15 189 20 16 5 45 9 64 9 33 0 69 8 217 47 93
25 296 93 333 112 9 5 73 37 142 71 69 34 144 74 167 88 24 15 76 48 116 73
l73 46 290 -280 c318 -308 622 -606 1109 -1086 177 -174 379 -372 451 -441 71
-69 186 -180 254 -246 129 -126 179 -160 280 -194 150 -50 336 -2 460 120 60
59 114 153 125 220 4 22 11 42 16 46 15 9 10 147 -6 168 -8 11 -15 28 -15 37
0 30 -36 102 -76 154 -22 28 -120 129 -219 225 -99 96 -418 409 -710 695 -291
287 -577 566 -635 621 -58 54 -230 223 -384 375 -250 248 -278 278 -271 300 4
13 10 26 14 29 7 6 25 39 86 160 68 134 114 240 141 330 9 30 21 59 25 65 5 5
9 22 9 38 0 15 5 38 12 50 12 22 21 62 38 172 6 33 15 73 20 89 6 16 10 49 10
73 0 24 7 103 16 176 14 113 15 148 4 247 -7 63 -16 156 -21 205 -4 50 -15
126 -24 170 -9 44 -19 100 -23 125 -4 25 -12 51 -17 59 -4 8 -12 31 -16 50 -7
37 -23 84 -46 138 -7 17 -13 36 -13 42 0 6 -4 19 -9 29 -10 21 -33 74 -56 127
-68 163 -206 388 -331 541 -52 63 -356 374 -366 374 -5 0 -32 19 -61 43 -29
23 -79 60 -112 82 -33 22 -66 46 -73 53 -7 6 -18 12 -24 12 -5 0 -24 10 -41
23 -38 26 -67 44 -87 52 -8 4 -28 14 -45 23 -112 59 -231 108 -400 163 -49 17
-108 34 -130 39 -22 5 -71 16 -110 25 -38 8 -108 20 -155 25 -47 5 -107 14
-133 20 -60 12 -398 11 -452 -2z m477 -688 c122 -27 147 -32 191 -39 26 -4 53
-13 59 -19 7 -7 25 -12 40 -12 16 0 36 -4 46 -9 9 -5 58 -26 107 -46 212 -87
358 -182 573 -372 59 -52 195 -212 238 -279 10 -16 21 -31 24 -34 21 -19 124
-209 168 -310 8 -19 18 -42 22 -50 4 -8 15 -42 24 -75 10 -33 24 -77 32 -98 8
-20 14 -49 14 -63 0 -14 5 -35 11 -46 27 -50 49 -435 31 -548 -13 -80 -30
-178 -42 -245 -11 -63 -33 -142 -43 -151 -4 -4 -7 -14 -7 -23 0 -9 -7 -29 -15
-45 -8 -15 -15 -32 -15 -37 0 -5 -21 -53 -47 -106 -84 -177 -191 -334 -313
-458 -175 -180 -245 -238 -397 -332 -68 -43 -106 -62 -248 -128 -28 -13 -112
-42 -232 -79 -28 -9 -62 -16 -75 -16 -13 0 -45 -8 -73 -17 -74 -24 -579 -24
-645 0 -25 9 -62 17 -82 17 -20 0 -40 5 -43 10 -3 5 -14 10 -24 10 -24 0 -195
57 -239 79 -9 5 -30 14 -47 21 -16 7 -37 16 -45 21 -8 4 -37 20 -65 34 -56 28
-62 32 -153 93 -59 39 -99 68 -162 116 -51 40 -233 233 -284 301 -117 157
-213 337 -269 500 -47 139 -57 173 -57 199 0 15 -6 39 -14 54 -42 84 -39 571
4 742 36 140 85 292 109 338 5 9 23 46 40 82 18 36 37 74 44 85 139 230 272
391 422 510 27 22 56 46 63 53 82 77 394 248 532 290 19 6 51 16 70 23 19 6
55 15 80 20 59 11 146 28 190 38 50 12 452 13 502 1z"
                  ></path>
                </g>
              </svg>
            </label>
            <input
              ref={inputValueRef}
              type="search"
              name="search"
              id="search"
              placeholder="Search for a project by their title or date"
              className="portfolio-page__input"
              onInput={(e) => {
                let valueOfInput: string = e.currentTarget.value.trim();

                inputValueRef.current = valueOfInput;

                let valueIsEmpty: boolean = !valueOfInput.length;

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

                // We don't want to sort if they have the default value selected
                const isPlaceholderValue: boolean =
                  valueOfSelect.includes("---");

                if (isPlaceholderValue) {
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
              {!isInReverse ? "Ascending" : "Descending"}{" "}
              <span
                className={`portfolio-page__sorting-order-label-arrow ${
                  !isInReverse
                    ? ""
                    : "portfolio-page__sorting-order-label-arrow--rotate"
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
                let isChecked: boolean = e.currentTarget.checked;

                setIsInReverse(isChecked);
              }}
            />
          </div>
        </div>

        <div className="portfolio-page__categories-container">
          {/* Categories   */}
          {projectCategories.map((category: string, index: number) => {
            let lowerCaseCategory = formatText(category, "lowercase");
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
                  categoryState === lowerCaseCategory
                    ? "portfolio-page__filter-button--active"
                    : ""
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

            let formattedDate = formatDateToShort(date);

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
              Sorry, we find any results matching your search. ಠ_ಠ
            </p>
          )}
          {/*            */}
        </div>
      </section>
    </>
  );
}
