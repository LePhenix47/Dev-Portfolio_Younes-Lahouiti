//React
import React from "react";

//Utils
import { sliderCardTypes } from "@/react-utils/types/slider.types";

//Components
import SliderCard from "../SliderCard/SliderCard";

export default function Slider({
  sliderCards,
}: {
  sliderCards: sliderCardTypes;
}): JSX.Element {
  return (
    <section className="slider">
      {sliderCards.map((card, index: number) => {
        const { image, title, description } = card;

        return (
          <SliderCard
            key={`${index}-${title}-${description}`}
            image={image}
            title={title}
            description={description}
          />
        );
      })}
      <div className="slider__indexation"></div>
    </section>
  );
}
