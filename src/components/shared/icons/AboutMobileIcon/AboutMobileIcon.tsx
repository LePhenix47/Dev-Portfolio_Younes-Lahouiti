import React from "react";
import { IconProps } from "../Icons";

/**
 * AboutMobileIcon component used in the <header> when the user has a small viewport device.
 *
 * @param {number} width - The width of the icon.
 * @param {number} height - The height of the icon.
 * @param {string} fill - The fill color of the icon.
 *
 * @returns {JSX.Element} - The rendered AboutMobileIcon component.
 *
 * @component
 *
 * @example
 * // Usage
 * import Icons from "@components/shared/icons/Icons";
 *
 * <Icons.AboutMobile width={24} height={24} fill="currentColor" />
 *
 * @component
 */
export default function AboutMobileIcon({
  width,
  height,
  fill,
}: IconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      width={width}
      height={height}
    >
      <g data-name="Layer 2">
        <path
          d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"
          data-name="person"
        />
      </g>
    </svg>
  );
}
