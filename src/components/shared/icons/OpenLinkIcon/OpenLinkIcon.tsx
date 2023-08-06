import React from "react";

/**
 * OpenLinkIcon component.
 *
 * @param {number} width - The width of the icon.
 * @param {number} height - The height of the icon.
 * @param {string} fill - The color to fill the icon.
 *
 * @returns {JSX.Element} - The rendered OpenLinkIcon component.
 *
 * @component
 *
 * @example
 * // Usage
 * import Icons from "@components/shared/icons/Icons";
 *
 * <Icons.OpenLink width={24} height={24} fill="blue" />
 */
export default function OpenLinkIcon({
  width,
  height,
  fill,
}: {
  width: number;
  height: number;
  fill: string;
}): JSX.Element {
  const enlargedWidth = width * (1 + 1 / 3);
  const enlargedHeight = height * (1 + 1 / 3);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${enlargedWidth} ${enlargedHeight}`}
      width={width}
      height={height}
      fill={fill}
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
    </svg>
  );
}
