//React
import React from "react";

//Link
import Link from "next/link";
import Icons from "@components/shared/icons/Icons";

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <section className="footer__github-links">
        <Link
          href="https://github.com/LePhenix47/Dev-Portfolio_Younes-Lahouiti"
          className="footer__link"
          target="_blank"
        >
          View the source code for the portfolio?{" "}
          <Icons.OpenLink width={18} height={18} fill={"currentColor"} />
        </Link>
        <Link
          href="https://github.com/LePhenix47/Dev-Portfolio_Younes-Lahouiti/issues"
          className="footer__link"
          target="_blank"
        >
          Report a bug?{" "}
          <Icons.Bug width={18} height={18} fill={"currentColor"} />
        </Link>
      </section>

      <section className="footer__github-links--mobile">
        <Link
          href="https://github.com/LePhenix47/Dev-Portfolio_Younes-Lahouiti"
          className="footer__link"
          target="_blank"
        >
          <Icons.OpenLink width={18} height={18} fill={"currentColor"} />
        </Link>
        <Link
          href="https://github.com/LePhenix47/Dev-Portfolio_Younes-Lahouiti/issues"
          className="footer__link"
          target="_blank"
        >
          <Icons.Bug width={18} height={18} fill={"currentColor"} />
        </Link>
      </section>

      <small className="footer__copyright">
        Younes Lahouiti © 2021-{currentYear}. All rights reserved.
      </small>
    </footer>
  );
}
