//Types
import { getAmountOfExperience } from "@utilities/helpers/numbers.helpers";
import { SVG_ICONS } from "@assets/index.assets";
import { aboutCardsTypes } from "@utilities/types/about/about-cards.types";

/**
 * Date where I started my fullstack developer career
 */
const startingDate: string = "06/28/2022";
/**
 * The amount of experience in years, calculated by subtracting the `careerDateStart` from the `currentDate`.
 */
export const amountOfExperience: number = getAmountOfExperience(startingDate);

/**
 * Variables for the about cards
 */
export const aboutCardsValues: aboutCardsTypes = [
  {
    svgIcon: SVG_ICONS.aboutIcons.MEDAL,
    title: "Experience",
    description: `+${amountOfExperience} years`,
  },
  {
    svgIcon: SVG_ICONS.aboutIcons.BRIEFCASE,
    title: "Completed",
    description: "20+ Projects",
  },
  {
    svgIcon: SVG_ICONS.aboutIcons.HEADSET,
    title: "Support",
    description: "7/7 Days",
  },
];
