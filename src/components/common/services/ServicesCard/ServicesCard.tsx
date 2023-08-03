//React
import React from "react";

//Next
import Image from "next/image";

//Utils
import { formatStringCase } from "@utilities/helpers/string-helper.functions";
import { voidCallback } from "@utilities/types/void-callback.type";

export default function ServicesCard({
  icon,
  title,
  description,
  callback,
}: {
  icon: any;
  title: string;
  description: string;
  callback: voidCallback;
}): JSX.Element {
  return (
    <div className="services-page__card card" key={`${title}-${description}`}>
      <div className="services-page__card-icon">
        <Image
          src={icon}
          alt={`${title}, ${description}`}
          width={32}
          height={32}
        />
      </div>
      <div className="services-page__card-text">
        <h2 className="services-page__card-title">{title}</h2>
        <a
          className="services-page__card-link"
          onClick={(e) => {
            callback(e);
            e.preventDefault();
          }}
          title={`View more about ${formatStringCase(title, "lowercase")}?`}
          data-type={title}
        >
          View more <span className="services-page__card-link-arrow">→</span>
        </a>
      </div>
    </div>
  );
}
