import { PDF_URLS } from "@assets/index.assets";

/**
 * Diplomas I earned
 */
export const diplomas: {
  name: string;
  year: string;
  pdf: any;
}[] = [
  {
    name: "Baccalureate",
    year: "2019-2020",
    pdf: PDF_URLS.baccalaureate,
  },
  {
    name: "Web development RNCP title",
    year: "2021-2022",
    pdf: PDF_URLS.webDevDiploma,
  },
  {
    name: "Front-End development RNCP title",
    year: "2022-2023",
    pdf: PDF_URLS.frontEndDevDiploma,
  },
  {
    name: "Fullstack development RNCP title",
    year: "2023-2024",
    pdf: PDF_URLS.fullstackDevDiploma,
  },
];
