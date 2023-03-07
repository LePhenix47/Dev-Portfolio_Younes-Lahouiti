//React
import React from "react";

//Link
import Link from "next/link";

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  const IconsProportions = { height: 12, width: 12 };
  return (
    <footer className="footer">
      <section className="footer__github-links">
        <Link
          href="https://github.com/LePhenix47/Dev-Portfolio_Younes-Lahouiti"
          className="footer__link"
          target="_blank"
        >
          View the source code for the portfolio?{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
          </svg>
        </Link>
        <Link
          href="https://github.com/LePhenix47/Dev-Portfolio_Younes-Lahouiti/issues"
          className="footer__link"
          target="_blank"
        >
          Report a bug?{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1792 1792"
            width="18"
            height="18"
            fill="currentColor"
          >
            <path d="M1696 960q0 26-19 45t-45 19h-224q0 171-67 290l208 209q19 19 19 45t-19 45q-18 19-45 19t-45-19l-198-197q-5 5-15 13t-42 28.5-65 36.5-82 29-97 13V640H832v896q-51 0-101.5-13.5t-87-33-66-39T534 1418l-15-14-183 207q-20 21-48 21-24 0-43-16-19-18-20.5-44.5T240 1525l202-227q-58-114-58-274H160q-26 0-45-19t-19-45 19-45 45-19h224V602L211 429q-19-19-19-45t19-45 45-19 45 19l173 173h844l173-173q19-19 45-19t45 19 19 45-19 45l-173 173v294h224q26 0 45 19t19 45zm-480-576H576q0-133 93.5-226.5T896 64t226.5 93.5T1216 384z" />
          </svg>
        </Link>
      </section>

      <section className="footer__github-links--mobile">
        <Link
          href="https://github.com/LePhenix47/Dev-Portfolio_Younes-Lahouiti"
          className="footer__link"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
          </svg>
        </Link>
        <Link
          href="https://github.com/LePhenix47/Dev-Portfolio_Younes-Lahouiti/issues"
          className="footer__link"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1792 1792"
            width="18"
            height="18"
            fill="currentColor"
          >
            <path d="M1696 960q0 26-19 45t-45 19h-224q0 171-67 290l208 209q19 19 19 45t-19 45q-18 19-45 19t-45-19l-198-197q-5 5-15 13t-42 28.5-65 36.5-82 29-97 13V640H832v896q-51 0-101.5-13.5t-87-33-66-39T534 1418l-15-14-183 207q-20 21-48 21-24 0-43-16-19-18-20.5-44.5T240 1525l202-227q-58-114-58-274H160q-26 0-45-19t-19-45 19-45 45-19h224V602L211 429q-19-19-19-45t19-45 45-19 45 19l173 173h844l173-173q19-19 45-19t45 19 19 45-19 45l-173 173v294h224q26 0 45 19t19 45zm-480-576H576q0-133 93.5-226.5T896 64t226.5 93.5T1216 384z" />
          </svg>
        </Link>
      </section>

      <small className="footer__copyright">
        Younes Lahouiti © 2021-{currentYear}. All rights reserved.
      </small>
    </footer>
  );
}
