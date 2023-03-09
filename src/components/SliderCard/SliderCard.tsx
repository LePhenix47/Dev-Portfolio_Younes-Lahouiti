//React
import React from "react";

//Next
import Image, { StaticImageData } from "next/image";

export default function SliderCard({
  image,
  title,
  description,
}: {
  image: StaticImageData;
  title: string;
  description: string;
}) {
  return (
    <div className="slider__card card">
      <Image
        src={image}
        alt={`Customer: ${title}`}
        width={50}
        height={50}
        className="slider__card-image"
      />

      <div className="slider__card-text">
        <h4 className="slider__card-title">{title}</h4>
        <p className="slider__card-description">{description}</p>
      </div>
    </div>
  );
}
