//React
import React from "react";

//Utils
import { serviceType } from "@utilities/types/services/services.types";
import Icons from "@components/shared/icons/Icons";

type ServicesModalContentProps = {
  title: string;
  description: string;
  qualities: serviceType;
};

/**
 * Represents the content of a modal that displays information about a service.
 *
 * @param {string} title - The title of the service.
 * @param {string} description - The description of the service.
 * @param {serviceType} qualities - An array containing the qualities/features of the service.
 * @returns {JSX.Element} A JSX element representing the ServicesModalContent component.
 *
 * @example
@component
 * // Example usage:
 * <ServicesModalContent
 *   title="Sample Service"
 *   description="This is a sample service description."
 *   qualities={['Quality 1', 'Quality 2', 'Quality 3']}
 * />
 */
export default function ServicesModalContent({
  title,
  description,
  qualities,
}: ServicesModalContentProps): JSX.Element {
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
