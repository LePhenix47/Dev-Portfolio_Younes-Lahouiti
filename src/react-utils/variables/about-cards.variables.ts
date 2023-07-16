//Types
import { SVG } from "../constants/index.constants";
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
    svgIcon: SVG.aboutIcons.MEDAL,
    title: "Experience",
    description: `+${amountOfExperience} year`,
  },
  {
    svgIcon: SVG.aboutIcons.BRIEFCASE,
    title: "Completed",
    description: "20+ Projects",
  },
  {
    svgIcon: SVG.aboutIcons.HEADSET,
    title: "Support",
    description: "7/7 Days",
  },
];
