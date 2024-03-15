//Next
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import Head from "next/head";
import Link from "next/link";

//SASS
import "@sass/main.scss";

//Utils
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
  Hydrate,
} from "@tanstack/react-query";
import PageLayout from "@components/common/layout/PageLayout";
import Icons from "@components/shared/icons/Icons";
import PageTransition from "@components/common/layout/PageTransition/PageTransition";

/**
 * The `_app.tsx` file is the root component where all pages will pass through. It sets up the global layout, providers, and configurations for the entire app.
 *
 * This file should only be modified in the following scenarios:
 *
 * - If you want to set a common page layout for all pages, you can make changes to the `PageLayout` component imported from `@components/common/layout/PageLayout`.
 *
 * - If you want to add a provider for a global state management library (e.g., React Context, Redux, TanStack Query), you can do so by wrapping the components with the respective provider(s).
 *
 * **Note:** When modifying this file, ensure that you do not break the page's structure, and consider any limitations or considerations related to providers and layout changes.
 *
 * @param {AppProps} props - The AppProps object containing the `Component` and `pageProps`.
 * @returns {JSX.Element} The root JSX element for the entire app.
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  /**
   * This `queryClient` constant ensures that data is not shared between different users and requests, while still only creating the QueryClient once per component lifecycle.
   */
  const queryClient: QueryClient = new QueryClient();

  const pathname: string = usePathname();

  return (
    <>
      <Head>
        <meta name="author" content="Younes Lahouiti" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <TanStackProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <PageLayout>
            {/* 
           // ? Because the parent element of this anchor uses the `transform` property for the pages transitions, 
           // ? child elements need to be positioned to the flow of the document, thus why we cannot use position: sticky nor position: fixed.
            */}
            <Link
              href="#top"
              className={`portfolio-page__anchor ${
                !pathname.includes("/portfolio") && "hide"
              }`}
              target="_top"
            >
              <Icons.UpArrow width={24} height={24} fill={"currentColor"} />
            </Link>
            <PageTransition pathname={pathname}>
              <Component {...pageProps} />
            </PageTransition>
          </PageLayout>
        </Hydrate>
      </TanStackProvider>
    </>
  );
}
