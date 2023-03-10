//React
import React from "react";

//Next
import Image, { StaticImageData } from "next/image";

export default function SliderCard({
  image,
  name,
  description,
}: {
  image: StaticImageData;
  name: string;
  description: string;
}) {
  return (
    <figure className="slider__card card">
      <Image
        src={image}
        alt={`Customer: ${name}`}
        width={50}
        height={50}
        className="slider__card-image"
      />

      <figcaption className="slider__card-title">{name}</figcaption>
      <blockquote className="slider__card-text" cite="">
        <p className="slider__card-description">{`"${description}"`}</p>
      </blockquote>
    </figure>
  );
}
