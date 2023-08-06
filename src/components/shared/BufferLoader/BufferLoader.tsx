/**
 * Represents a buffer loader component with a circular animation.
 *
 * @param {Object} props - The props for the BufferLoader component.
 * @param {number} props.width - The width of the buffer loader.
 * @returns {JSX.Element} A JSX element representing the BufferLoader component.
 *
 * @example
@component
 * // Example usage:
 * <BufferLoader width={50} />
 *
 * @component
 */
export default function BufferLoader({
  width,
}: {
  width: number;
}): JSX.Element {
  return (
    <section>
      <svg viewBox="0 0 100 100" className="buffer-loader" width={width}>
        <circle
          cx="50"
          cy="50"
          r="25"
          className="buffer-loader__circle"
        ></circle>
      </svg>
    </section>
  );
}
