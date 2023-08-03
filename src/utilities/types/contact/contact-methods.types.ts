import { nextJSImageType } from "@utilities/types/next-js-image.type";

export type contactMethodType = {
  icon: nextJSImageType;
  platform: string;
  user: string;
  link: string;
}[];
