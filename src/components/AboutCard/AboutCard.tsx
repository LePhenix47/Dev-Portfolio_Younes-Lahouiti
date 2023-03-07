//React
import React from "react";

export default function AboutCard({
  svgIcon,
  title,
  description,
}: {
  svgIcon: any;
  title: string;
  description: string;
}): JSX.Element {
  return (
    <div className="card">
      <h3 className="card__title">
        {svgIcon}
        {title}
      </h3>
      <p className="card__description">{description}</p>
    </div>
  );
}
