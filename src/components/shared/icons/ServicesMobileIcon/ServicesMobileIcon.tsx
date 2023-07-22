import React from "react";

export default function ServicesMobileIcon({
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
          d="M7 21h10V7h-1V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H7zm3-15.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4zM19 7v14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zM5 7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z"
          data-name="briefcase"
        />
      </g>
    </svg>
  );
}
