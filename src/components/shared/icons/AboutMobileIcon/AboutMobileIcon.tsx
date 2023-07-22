import React from "react";

export default function AboutMobileIcon({
  width,
  height,
  fill,
}: {
  width: number;
  height: number;
  fill: string;
}) {
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
