import { IconProps } from "../Icons";

/**
 * BugIcon component.
 *
 * @param {number} width - The width of the icon.
 * @param {number} height - The height of the icon.
 * @param {string} fill - The color to fill the icon.
 *
 * @returns {JSX.Element} The rendered BugIcon component.
 *
 * @example
 * // Usage
 * import Icons from "@components/shared/icons/Icons";
 *
 * <Icons.Bug width={24} height={24} fill="blue" />
 *
 * @component
 */
export default function BugIcon({
  width,
  height,
  fill,
}: IconProps): JSX.Element {
  const enlargedWidth = width * 100;
  const enlargedHeight = height * 100;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${enlargedWidth} ${enlargedHeight}`}
      width={width}
      height={height}
      fill={fill}
    >
      <path d="M1696 960q0 26-19 45t-45 19h-224q0 171-67 290l208 209q19 19 19 45t-19 45q-18 19-45 19t-45-19l-198-197q-5 5-15 13t-42 28.5-65 36.5-82 29-97 13V640H832v896q-51 0-101.5-13.5t-87-33-66-39T534 1418l-15-14-183 207q-20 21-48 21-24 0-43-16-19-18-20.5-44.5T240 1525l202-227q-58-114-58-274H160q-26 0-45-19t-19-45 19-45 45-19h224V602L211 429q-19-19-19-45t19-45 45-19 45 19l173 173h844l173-173q19-19 45-19t45 19 19 45-19 45l-173 173v294h224q26 0 45 19t19 45zm-480-576H576q0-133 93.5-226.5T896 64t226.5 93.5T1216 384z" />
    </svg>
  );
}
