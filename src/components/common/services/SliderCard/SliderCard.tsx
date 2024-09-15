//React
import React, { forwardRef, Ref, useImperativeHandle, useRef } from "react";

//Next
import Image, { StaticImageData } from "next/image";

export interface SliderCardRef {
  getCardRef: () => HTMLElement | null;
}

// Define props interface
type SliderCardProps = {
  image: StaticImageData;
  name: string;
  description: string;
};

/**
 * Represents a card used in the Slider component.
 *
 * @param {StaticImageData} image - The image to be displayed on the card.
 * @param {string} name - The name of the customer associated with the card.
 * @param {string} description - The description text to be displayed on the card.
 * @returns {JSX.Element} A JSX element representing the SliderCard component.
 *
 * @example
@component
 * // Example usage:
 * <SliderCard
 *   image={imageData}
 *   name="John Doe"
 *   description="This is a testimonial from a satisfied customer."
 * />
 */
function SliderCard(
  { image, name, description }: SliderCardProps,
  ref: Ref<SliderCardRef>
): JSX.Element {
  const cardRef = useRef<HTMLElement>(null);

  useImperativeHandle(ref, () => ({ getCardRef: () => cardRef.current }), []);

  return (
    <figure className="slider__card card" ref={cardRef}>
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
export default forwardRef(SliderCard);
