//Next
import { StaticImageData } from "next/image";

export type ProjectsMadeType = {
  title: string;
  image: StaticImageData;
  link: string;
  type: string;
  date: Date;
}[];
