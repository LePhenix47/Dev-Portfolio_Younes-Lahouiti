//Next
import type { AppProps } from "next/app";

import Head from "next/head";

//SASS
import "../sass/main.scss";

//Components
import PageLayout from "../components/PageLayout/PageLayout";

/**
 * Root component where all the pages will pass through
 *
 * This file should be changed *only if*:
 *
 * - You want to set a page layout
 *
 * - You want to add a provider for a global state (for React, Redux, TanStackQuery...)
 *
 * This file **must not** be nested inside a React Fragment
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}
