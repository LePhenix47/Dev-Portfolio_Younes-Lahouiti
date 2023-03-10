//Next
import { StaticImageData } from "next/image";

/**
 * Type for the slider cards
 */
export type sliderCardTypes = {
  image: StaticImageData;
  name: string;
  description: string;
  link?: string;
}[];
