//Next
import type { AppProps } from "next/app";
import { NextRouter, useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

//SASS
import "../sass/main.scss";

//Components
import PageLayout from "../components/PageLayout/PageLayout";

//Framer motion library
import { motion } from "framer-motion";

//Utils
import { log } from "@/react-utils/functions/helper-functions";

//TanStack Query
/**
 * We need to use the Hydrate component to enable pre-fetching on the `getServerSideProps` method when using SSR
 *
 * To view a more detailed reason as to why we need these,
 * check out the doc about how to use TanStack Query in a Next.js app using SSR (Server-side rendering):
 *
 * https://tanstack.com/query/latest/docs/react/guides/ssr
 */
import {
  QueryClient,
  QueryClientProvider as TanStackProvider,
} from "@tanstack/react-query";

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
  /**
   * This `queryClient` constant ensures that data is not shared between different users and requests, while still only creating the QueryClient once per component lifecycle.
   */
  const queryClient = new QueryClient();

  const router: NextRouter = useRouter();

  const { route } = router;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <TanStackProvider client={queryClient}>
        <PageLayout>
          <Link
            href="#top"
            className={`portfolio-page__anchor ${
              !route.includes("/portfolio") ? "hide" : ""
            }`}
            target="_top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M17 10c-.3 0-.5-.1-.7-.3l-5-5c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l5 5c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z" />
              <path d="M7 10c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-5 5c-.2.2-.4.3-.7.3z" />
              <path d="M12 21c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1s1 .4 1 1v16c0 .6-.4 1-1 1z" />
            </svg>
          </Link>
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
      </TanStackProvider>
    </>
  );
}
