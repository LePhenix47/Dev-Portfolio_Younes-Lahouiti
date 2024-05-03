//Utils
import { serviceType } from "@utilities/types/services/services.types";

//Images
import { SVG_ICONS } from "@assets/index.assets";

export const offeredServices: serviceType = [
  {
    icon: SVG_ICONS.servicesIcons.INTEGRATION,
    title: "Integration and dynamization",
    description:
      " Integrate various systems and technologies to work together seamlessly",
    qualities: [
      "Strong problem-solving skills",
      "Knowledge of different programming languages",
      "Attention to detail",
      "Good communication skills",
      "Ability to work in a team",
    ],
  },
  {
    icon: SVG_ICONS.servicesIcons.SETTINGS,
    title: "Debugging and testing",
    description: " Identify and fix issues in code, and optimize performance",
    qualities: [
      "Strong analytical skills",
      "Ability to work under pressure",
      "Familiarity with debugging tools and techniques",
      "Adaptability to changing requirements",
      "Ability to make unit and integration tests",
    ],
  },
  {
    icon: SVG_ICONS.servicesIcons.CODE,
    title: "API creation",
    description:
      "Design, develop and maintain APIs for use in software applications",
    qualities: [
      "Strong coding skills",
      "Knowledge of API design principles and best practices",
      "Ability to write clear and concise documentation",
      "Familiarity with REST APIs",
      "Continuous learning and improvement mindset",
    ],
  },
];
