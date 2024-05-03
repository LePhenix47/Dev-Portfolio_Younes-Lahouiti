import React from "react";

import Image, { StaticImageData } from "next/image";

type LazyImageLoaderProps = {
  src: string;
  alt: string;
  height: number;
  width: number;
  imageClassName?: string;
  containerClassName?: string;
  id?: string;
  backgroundImageUrl: string;
  isPriority?: boolean;
};

/**
 * Renders a lazy-loaded image component with a background image.
 *
 * @param {LazyImageLoaderProps} props - The component props.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.alt - The alternative text for the image.
 * @param {number} [props.width=1920] - The width of the image.
 * @param {number} [props.height=1080] - The height of the image.
 * @param {string} [props.id] - The ID of the image element.
 * @param {string} [props.imageClassName] - The CSS class name for the image element.
 * @param {string} [props.containerClassName] - The CSS class name for the container element.
 * @param {string} props.backgroundImageUrl - The URL of the background image.
 * @param {boolean} [props.isPriority] - Whether the image should be loaded with priority.
 * @returns {JSX.Element} The rendered lazy image loader component.
 */
export default function LazyImageLoader({
  src,
  alt,
  width = 1_920,
  height = 1_080,
  id,
  imageClassName,
  containerClassName,
  backgroundImageUrl,
  isPriority,
}: LazyImageLoaderProps): JSX.Element {
  /**
   * Handles the event when the image is loaded.
   *
   * @param {React.SyntheticEvent<HTMLImageElement, Event>} e - The event object.
   */
  function onImageLoaded(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    const imageElement = e.currentTarget as HTMLImageElement;

    imageElement.classList.add("lazy-image-loader-loaded");
  }

  return (
    <picture
      className={`lazy-image-loader__container ${containerClassName || ""}`}
      style={{
        // @ts-ignore
        "--_url": `url(${backgroundImageUrl})`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        className={`lazy-image-loader ${imageClassName}`}
        id={id}
        onLoad={onImageLoaded}
        priority={isPriority}
      />
    </picture>
  );
}
