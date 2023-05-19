import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

/**
 *The _document file is a file for the structure in the entire app
 *This file should *only be changed if you want to*:
 *  - Add a `<meta>` tag to every single page
 *  - Add a class to the body
 *  - Change the langage of the website
 *  - Add fonts or icons
 *
 */
export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        {/* Page logo */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Icons */}
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />

        <Script
          src="https://kit.fontawesome.com/904e9ee361.js"
          crossOrigin="anonymous"
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
