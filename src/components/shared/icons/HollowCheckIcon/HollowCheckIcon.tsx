import React from "react";
import { IconProps } from "../Icons";

/**
 * HollowCheckIcon component.
 *
 * @param {number} width - The width of the icon.
 * @param {number} height - The height of the icon.
 *
 * @returns {JSX.Element} - The rendered HollowCheckIcon component.
 *
 * @component
 *
 * @example
 * // Usage
 * import Icons from "@components/shared/icons/Icons";
 *
 * <Icons.HollowCheck width={24} height={24} />
 */
export default function HollowCheckIcon({
  width,
  height,
}: Omit<IconProps, "fill">): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      fill="var(--color-secondary)"
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z" />
    </svg>
  );
}
