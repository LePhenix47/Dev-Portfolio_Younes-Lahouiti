//React
import React from "react";

//Utils
import { serviceType } from "@/react-utils/types/services.types";

export default function ServicesModalContent({
  title,
  description,
  qualities,
}: {
  title: string;
  description: string;
  qualities: serviceType;
}) {
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="var(--color-secondary)"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z" />
                </svg>
              </span>
              {quality}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
