//React
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

          let title = !!education ? education : experience;

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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 22 22"
                      width={22}
                      height={22}
                    >
                      <path
                        d="M19,4h-1V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H8V3c0-0.6-0.4-1-1-1S6,2.4,6,3v1H5C3.3,4,2,5.3,2,7v1h20V7C22,5.3,20.7,4,19,4z
	 M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-9H2V19z M17,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S16.4,12,17,12z M17,16
	c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S16.4,16,17,16z M12,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S11.4,12,12,12z M12,16
	c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S11.4,16,12,16z M7,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S6.4,12,7,12z M7,16
	c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S6.4,16,7,16z"
                        fill="var(--color-secondary)"
                      />
                    </svg>
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
