//React
import { CalendarIcon } from "@/components/shared/icons/icons-index.components";
import { time } from "console";
import React from "react";

export default function Timeline({
  arrayOfTimeLines,
  reverse = false,
}: {
  arrayOfTimeLines: any[];
  reverse?: boolean | undefined;
}): JSX.Element {
  return (
    <div className="timeline__container">
      <section className="timeline">
        {arrayOfTimeLines.map((timeline: any, index: number) => {
          const { education, experience, establishment, yearSpan } = timeline;

          const title = !!education ? education : experience;

          return (
            <div
              className={`timeline__dot ${
                !reverse ? "timeline__dot--reverse" : "timeline__dot--normal"
              }`}
              key={`${timeline}-${index}`}
            >
              <div className="timeline__card">
                <h4 className="timeline__card-title" title={title}>
                  {title}
                </h4>
                <p className="timeline__card-establishment">{establishment}</p>
                <p className="timeline__card-year-span">
                  <span>
                    <CalendarIcon width={22} height={22} />
                  </span>
                  {yearSpan}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
