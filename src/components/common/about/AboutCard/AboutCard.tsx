//React
import React from "react";

import Image from "next/image";

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
        <Image src={svgIcon} alt={title} className="svg-icon" />
        {title}
      </h3>
      <p className="card__description">{description}</p>
    </div>
  );
}
