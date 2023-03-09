//React
import React from "react";

//Next
import { StaticImageData } from "next/image";

export default function SliderCard({
  image,
  title,
  description,
}: {
  image: StaticImageData;
  title: string;
  description: string;
}) {
  return <div className="slider__card card">SliderCard</div>;
}
