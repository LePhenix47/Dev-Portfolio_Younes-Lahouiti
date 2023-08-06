import React from "react";

/**
 * RoundCheckIcon component.
 *
 * @param {number} width - The width of the icon.
 * @param {number} height - The height of the icon.
 * @param {string} fill - The color to fill the icon.
 *
 * @returns {JSX.Element} - The rendered RoundCheckIcon component.
 *
 * @component
 *
 * @example
 * // Usage
 * import Icons from "@components/shared/icons/Icons";
 *
 * <Icons.RoundCheck width={24} height={24} fill="green" />
 */
export default function RoundCheckIcon({
  width,
  height,
  fill,
}: {
  width: number;
  height: number;
  fill: string;
}): JSX.Element {
  const enlargedWidth = width * 32;
  const enlargedHeight = height * 32;
  return (
    <svg
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill={fill}
      viewBox={`0 0 ${enlargedWidth} ${enlargedHeight}`}
    >
      <path
        fill={fill}
        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
      />
    </svg>
  );
}
