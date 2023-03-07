import { nextJSImageType } from "./next-js-image.type";

export type serviceType = {
  icon: nextJSImageType;
  title: string;
  description: string;
  qualities: string[];
}[];
