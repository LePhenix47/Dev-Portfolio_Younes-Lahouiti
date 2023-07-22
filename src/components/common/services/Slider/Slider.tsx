//React
import React, { useEffect, useRef, useState } from "react";

//Utils
import { sliderCardTypes } from "@/react-utils/types/slider.types";
import {
  log,
  selectRandomElementsInArray,
} from "@/react-utils/functions/helper-functions";
//Components
import SliderCard from "../SliderCard/SliderCard";
import { UpArrowIcon } from "@/components/shared/icons/icons-index.components";

export default function Slider({
  sliderCards,
  cardToBeShown,
}: {
  sliderCards: sliderCardTypes;
  cardToBeShown: number;
}): JSX.Element {
  //Boolean values to buffer the component
  const cardsToBeShownOverflow: boolean = cardToBeShown > sliderCards.length;
  const cardsToBeShownUnderflow: boolean = cardToBeShown < 0;

  if (cardsToBeShownOverflow) {
    cardToBeShown = sliderCards.length;
  }

  if (cardsToBeShownUnderflow) {
    cardToBeShown = 1;
  }
  /**
   * Translation formula for the cards:
   *
   * ```js
   * translateX = -1 * ([Width of card] + [Gap between card]) * currentIndex
   * ```
   *
   *
   * If newIndex > totalAmountOfCards then index = 0
   *
   * If newIndex < 0 then index = totalAmountOfCards.length
   *
   * Otherwise newIndex = index +/- 1
   */
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const [axisXMovement, setAxisXMovement] = useState({});

  /**
   *
   * Reference for the card width and gaps between them
   *
   * Does not change it's memory address with the `useRef` hook
   */
  const cardInfosRef: React.MutableRefObject<any> = useRef<any>({});

  /**
   * ⚠ If this value must ever be changed here, it must also be changed in the SASS code
   */
  cardInfosRef.current = { cardWidth: 400, cardGaps: 25 };

  useEffect(() => {
    const isOnMobile: boolean = window.matchMedia("(max-width: 768px)").matches;

    if (isOnMobile) {
      cardInfosRef.current = { cardWidth: 200, cardGaps: 25 };
    }

    const totalCardWidth: number =
      cardInfosRef.current.cardWidth + cardInfosRef.current.cardGaps;

    //We translate the container to the left → (need to add a negative value)
    setAxisXMovement({
      translate: `${-1 * totalCardWidth * currentIndex}px 0%`,
    });
  }, [currentIndex]);

  /**
   * Decrements the current index by 1 and sets it as the new current index.
   *
   *
   * @returns {void}
   */
  function goToPreviousIndex(): void {
    let newIndex: number = currentIndex - 1;

    const indexUnderflows: boolean = newIndex < 0;

    if (indexUnderflows) {
      newIndex = cardToBeShown - 1;
    }
    setCurrentIndex(newIndex);
  }

  /**
   * Increments the current index by 1 and sets it as the new current index.
   *
   * @returns {void}
   */
  function goToNextIndex(): void {
    let newIndex: number = currentIndex + 1;

    const indexOverflows: boolean = newIndex > cardToBeShown - 1;

    if (indexOverflows) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  }

  return (
    <section className="slider">
      <button
        type="button"
        className="slider__button slider__button--left"
        onClick={goToPreviousIndex}
      >
        <UpArrowIcon width={24} height={24} fill={"currentColor"} />
      </button>
      <button
        type="button"
        className="slider__button slider__button--right"
        onClick={goToNextIndex}
      >
        <UpArrowIcon width={24} height={24} fill={"currentColor"} />
      </button>
      <section className="slider__container" style={axisXMovement}>
        {sliderCards.map((card, index: number) => {
          const cardShouldNotBeShown: boolean = index + 1 > cardToBeShown;

          if (cardShouldNotBeShown) {
            return null;
          }
          const { image, name, description } = card;

          return (
            <SliderCard
              key={`${index}-${name}-${description}`}
              image={image}
              name={name}
              description={description}
            />
          );
        })}
      </section>
      <section className="slider__indexation-container">
        {sliderCards.map((card, index: number) => {
          const buttonShouldNotBeShown: boolean = index + 1 > cardToBeShown;

          if (buttonShouldNotBeShown) {
            return null;
          }
          return (
            <button
              type="button"
              className={`slider__index ${
                currentIndex === index && "slider__index--active"
              }`}
              key={`${card}-${index}`}
              onClick={() => {
                setCurrentIndex(index);
              }}
            ></button>
          );
        })}
      </section>
    </section>
  );
}
