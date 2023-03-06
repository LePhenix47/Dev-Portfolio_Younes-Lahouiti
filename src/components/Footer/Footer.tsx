//React
import React from "react";

//Link
import Link from "next/link";

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <small className="footer__copyright">
        Younes Lahouiti © 2021-{currentYear}. All rights reserved.
      </small>

      <Link
        href="https://github.com/LePhenix47/Dev-Portfolio_Younes-Lahouiti"
        className="footer__link"
        target="_blank"
      >
        View the source code for the portfolio?
      </Link>
    </footer>
  );
}
