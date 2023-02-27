//Next
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";

//SASS
import "../sass/main.scss";

//Components
import PageLayout from "../components/PageLayout/PageLayout";

//Framer motion library
import { motion } from "framer-motion";

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

/*
  
*/

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <PageLayout>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
              x: "-100vw",
            },
            pageAnimate: {
              opacity: 1,
              x: 0,
            },
            pageExit: {
              opacity: 0,
              x: "100vw",
            },
          }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.5,
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </PageLayout>
    </>
  );
}
