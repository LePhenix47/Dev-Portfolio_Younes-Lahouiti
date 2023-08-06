import { Html, Head, Main, NextScript } from "next/document";

/**
 * The `_document` file is used to configure the structure of the entire app.
 * This file should *only be changed if you want to*:
 * - Add a `<meta>` tag to every single page
 * - Add a class to the body
 * - Change the language of the website
 * - Add fonts or icons
 *
 * This file must not be nested inside a React Fragment to ensure the proper functioning of Next.js features.
 *
 * @returns {JSX.Element} The JSX element representing the custom document configuration.
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
