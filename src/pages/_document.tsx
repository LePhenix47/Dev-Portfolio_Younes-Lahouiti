import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

/**
 *The _document file is a file for the structure in the entire app
 *This file should *only be changed if you want to*:
 *  - Add a `<meta>` tag to every single page
 *  - Add a class to the body
 *  - Change the language of the website
 *  - Add fonts or icons
 *
 */
export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        {/* Page logo */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />

        {/*  Canonical link  */}
        <link rel="canonical" href="https://younes-portfolio-dev.vercel.app/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
