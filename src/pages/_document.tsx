import { Html, Head, Main, NextScript } from "next/document";

/**
 *The _document file is a file for the structure in the entire app
 *This file should *only be changed if you want to*:
 *  -Add a meta tag to every single page
 *  -Add a class to the body
 *  -Change the langage of the website
 *
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Color scheme meta tag */}
        <meta name="color-scheme" content="dark light" />

        {/*
         <!--Page logo--> 
        */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
