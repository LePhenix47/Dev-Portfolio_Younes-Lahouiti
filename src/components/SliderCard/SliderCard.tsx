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
    <figure className="slider__card card">
      <Image
        src={image}
        alt={`Customer: ${title}`}
        width={50}
        height={50}
        className="slider__card-image"
      />

      <figcaption className="slider__card-title">{title}</figcaption>
      <blockquote className="slider__card-text" cite="">
        <p className="slider__card-description">{`"${description}"`}</p>
      </blockquote>
    </figure>
  );
}
