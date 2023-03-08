import React from "react";

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
