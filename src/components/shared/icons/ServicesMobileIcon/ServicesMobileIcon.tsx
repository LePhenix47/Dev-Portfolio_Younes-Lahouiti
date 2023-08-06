import React from "react";

/**
 * ServicesMobileIcon component used in the <header> when the user has a small viewport device.
 *
 * @param {number} width - The width of the icon.
 * @param {number} height - The height of the icon.
 * @param {string} fill - The fill color of the icon.
 *
 * @returns {JSX.Element} - The rendered ServicesMobileIcon component.
 *
 * @component
 *
 * @example
 * // Usage
 * import Icons from "@components/shared/icons/Icons";
 *
 * <Icons.ServicesMobile width={24} height={24} fill="currentColor" />
 *
 * @component
 */
export default function ServicesMobileIcon({
  width,
  height,
  fill,
}: {
  width: number;
  height: number;
  fill: string;
}): JSX.Element {
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
          d="M7 21h10V7h-1V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H7zm3-15.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4zM19 7v14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zM5 7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z"
          data-name="briefcase"
        />
      </g>
    </svg>
  );
}
