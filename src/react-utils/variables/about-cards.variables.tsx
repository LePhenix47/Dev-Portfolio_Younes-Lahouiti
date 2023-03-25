//Types
import { aboutCardsTypes } from "../types/about-cards.types";

/**
 * Calculates the amount of experience in years based on the current year and the year when my career started.
 * @returns {number} The amount of experience in years.
 */
function getAmountOfExperience(): number {
  /**
   * The current year as a number.
   */
  const currentDate: number = new Date().getFullYear();

  /**
   * The year when the career started as a number.
   */
  const careerDateStart: number = new Date("06/28/2022").getFullYear();

  return currentDate - careerDateStart;
}

/**
 * The amount of experience in years, calculated by subtracting the `careerDateStart` from the `currentDate`.
 */
const amountOfExperience: number = getAmountOfExperience();

/**
 * Variables for the about cards
 */
export const aboutCardsValues: aboutCardsTypes = [
  {
    svgIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12,1A7,7,0,0,0,7,12.89V22a1,1,0,0,0,1.45.89L12,21.12l3.55,1.77A1,1,0,0,0,16,23a1,1,0,0,0,.53-.15A1,1,0,0,0,17,22V12.89A7,7,0,0,0,12,1Zm3,19.38-2.55-1.27a1,1,0,0,0-.9,0L9,20.38V14.32a7,7,0,0,0,2,.6V16a1,1,0,0,0,2,0V14.92a7,7,0,0,0,2-.6ZM12,13a5,5,0,1,1,5-5A5,5,0,0,1,12,13Z"
        />
      </svg>
    ),
    title: "Experience",
    description: `+${amountOfExperience} year`,
  },
  {
    svgIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
          <path
            fill="currentColor"
            d="M7 21h10V7h-1V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H7zm3-15.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4zM19 7v14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zM5 7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z"
            data-name="briefcase"
          />
        </g>
      </svg>
    ),
    title: "Completed",
    description: "20+ Projects",
  },
  {
    svgIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M6 19H4c-2.2 0-4-1.8-4-4v-1c0-2.2 1.8-4 4-4h2c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1zm-2-7c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2h1v-5H4zm16 7h-2c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h2c2.2 0 4 1.8 4 4v1c0 2.2-1.8 4-4 4zm-1-2h1c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2h-1v5z"
        />
        <path
          fill="currentColor"
          d="M20.9 12.1h-.2c-.5-.1-.9-.6-.8-1.1 0-.3.1-.6.1-1 0-4.4-3.6-8-8-8s-8 3.6-8 8c0 .4 0 .7.1 1 .1.5-.3 1.1-.8 1.1-.5.1-1.1-.3-1.1-.8-.2-.4-.2-.8-.2-1.3C2 4.5 6.5 0 12 0s10 4.5 10 10c0 .5 0 .9-.1 1.3-.1.5-.5.8-1 .8zM12 24c-2.2 0-3-1.8-3-3s.8-3 3-3 3 1.8 3 3c0 .2 0 .4-.1.6 2.2-.6 3.7-2 4.5-4 .2-.5.8-.8 1.3-.6.5.2.8.8.6 1.3-1 2.6-3.5 5.7-9.3 5.7zm0-4c-.8 0-1 .6-1 1s.2 1 1 1 1-.6 1-1-.2-1-1-1z"
        />
      </svg>
    ),
    title: "Support",
    description: "7/7 Days",
  },
];
