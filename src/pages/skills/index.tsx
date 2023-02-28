//Next
import Head from "next/head";
import Image from "next/image";

export default function Skills() {
  return (
    <>
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="
          Take a closer look at my technical skills as a web developer. From front-end to back-end technologies, I'm proficient in a range of tools and languages that can help bring your projects to life"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Skills page" />
        <meta
          property="og:description"
          content="
          Take a closer look at my technical skills as a web developer. From front-end to back-end technologies, I'm proficient in a range of tools and languages that can help bring your projects to life"
        />
        <meta property="og:image" content="/favicon.ico" />

        <meta
          property="og:url"
          content="www.younes-lahouiti-portfolio.com/skills"
        />

        {/*
         <!--Title--> 
         */}
        <title>Skills page</title>
      </Head>
      <section className="skills-page">
        <h1 className="skills-page__title">Skills</h1>
        <h2 className="skills-page__subtitle">My technical level</h2>
        <div className="skills-page__skills-container">
          <div className="skills-page__card card">
            <h3 className="card__title">Front-end skills</h3>
            <ul className="skills-page__skills-front-end">
              <li className="skills-page__skill-front-end">
                <div className="skill-card-test">
                  <h4>Test</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.0"
                    viewBox="0 0 700 700"
                  >
                    <g
                      transform="translate(0,700) scale(0.10,-0.10)"
                      fill="currentColor"
                    >
                      <path d="M3365 6700 c-164 -12 -364 -68 -510 -143 -160 -82 -330 -207 -419 -309 l-44 -51 -129 -2 c-135 -3 -299 -24 -373 -48 -25 -8 -70 -22 -100 -32 -304 -94 -630 -361 -788 -645 -82 -145 -139 -297 -166 -435 -23 -121 -39 -301 -31 -361 l6 -53 -83 -83 c-214 -212 -346 -458 -410 -763 -29 -141 -29 -419 0 -550 34 -147 39 -166 83 -274 72 -181 225 -403 363 -529 l47 -42 -6 -55 c-8 -63 8 -253 31 -365 27 -132 96 -312 165 -429 43 -75 140 -201 211 -276 69 -73 241 -210 316 -253 127 -71 280 -131 412 -162 89 -20 325 -42 384 -35 l58 6 52 -56 c147 -163 391 -318 610 -390 155 -51 268 -67 456 -68 185 0 293 15 440 64 238 77 468 222 628 394 47 50 57 57 84 53 52 -8 308 11 388 28 466 100 870 438 1048 879 76 187 124 460 107 606 l-7 59 62 57 c118 109 269 322 329 463 42 99 81 223 102 325 29 143 30 409 0 550 -63 305 -195 552 -409 763 l-85 84 6 59 c13 115 -22 365 -70 509 -36 109 -123 283 -189 380 -101 149 -316 346 -464 429 -137 76 -268 126 -415 161 -95 22 -338 43 -394 34 -38 -6 -42 -4 -78 36 -69 77 -220 200 -325 264z" />
                      <path
                        fill="var(--bg-secondary)"
                        d="M4543 4344 c-42 -20 -174 -147 -687 -660 -349 -349 -640 -634 -648 -634 -7 0 -170 157 -363 348 -223 222 -365 356 -390 368 -61 29 -185 27 -245 -4 -61 -32 -107 -77 -136 -134 -33 -64 -34 -188 -3 -251 24 -47 944 -978 993 -1003 41 -23 116 -44 153 -44 32 0 56 7 128 41 55 25 1554 1527 1584 1586 29 58 29 182 1 244 -32 72 -97 133 -169 157 -60 21 -160 14 -218 -14z"
                      />
                    </g>
                  </svg>
                </div>
              </li>
              <li className="skills-page__skill-front-end">
                <div className="skill-card-test">test</div>
              </li>
              <li className="skills-page__skill-front-end">
                <div className="skill-card-test">test</div>
              </li>
              <li className="skills-page__skill-front-end">
                <div className="skill-card-test">test</div>
              </li>
              <li className="skills-page__skill-front-end">
                <div className="skill-card-test">test</div>
              </li>
              <li className="skills-page__skill-front-end">
                <div className="skill-card-test">test</div>
              </li>
            </ul>
          </div>
          <div className="skills-page__card card">
            <h3 className="card__title">Back-end skills</h3>
            <ul className="skills-page__skills-back-end">
              <li className="skills-page__skill-back-end"></li>
            </ul>
          </div>
        </div>

        <h2>Qualifications</h2>
        <h3>My path of growth and development</h3>
        <div className="skills-page__qualifications-container"></div>
      </section>
    </>
  );
}
