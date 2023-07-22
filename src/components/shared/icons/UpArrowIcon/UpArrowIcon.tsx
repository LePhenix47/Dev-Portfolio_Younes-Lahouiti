import React from "react";

export default function UpArrowIcon({
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
      width={width}
      height={height}
      fill={fill}
    >
      <path d="M17 10c-.3 0-.5-.1-.7-.3l-5-5c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l5 5c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"></path>
      <path d="M7 10c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-5 5c-.2.2-.4.3-.7.3z"></path>
      <path d="M12 21c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1s1 .4 1 1v16c0 .6-.4 1-1 1z"></path>
    </svg>
  );
}
