//React
import React from "react";

//Utils
import { serviceType } from "@/react-utils/types/services.types";
import Icons from "@/components/shared/icons/Icons";

export default function ServicesModalContent({
  title,
  description,
  qualities,
}: {
  title: string;
  description: string;
  qualities: serviceType;
}): JSX.Element {
  return (
    <section className="services-page__card-content">
      <h2 className="services-page__card-title">{title}</h2>
      <p className="services-page__card-description">{description}</p>
      <ul className="services-page__card-qualities-list">
        {qualities.map((quality: any, index: number) => {
          return (
            <li
              className="services-page__card-qualities-item"
              key={`${quality}-${index}`}
            >
              <span className="services-page__card-qualities-item-icon">
                <Icons.HollowCheck width={24} height={24} />
              </span>
              {quality}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
