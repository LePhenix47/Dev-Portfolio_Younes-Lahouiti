import Head from "next/head";
import React from "react";

export default function Error404(): JSX.Element {
  return (
    <>
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="Sorry, the page you were looking for is not available. Please try again or contact me for assistance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Page not found" />
        <meta
          property="og:description"
          content="Sorry, the page you were looking for is not available. Please try again or contact me for assistance."
        />
        <meta property="og:image" content="/profile-pic.jpg" />
        <meta property="og:image:width" content="130" />
        <meta property="og:image:height" content="170" />
        <meta
          property="og:url"
          content="www.younes-lahouiti-portfolio.com/404"
        />
        {/*
         <!--Title--> 
         */}
        <title>Page not found - Your Name</title>
        {/*     Canonical link     */}
        <link
          rel="canonical"
          href="https://www.younes-lahouiti-portfolio.com/"
        />
      </Head>
      <section className="error-404">
        <h1 className="error-404__main-title">404</h1>
        <h2 className="error-404__title">Oops!</h2>
        <h3 className="error-404__subtitle">
          It looks like you&apos;ve stumbled upon a missing page. ¯\_(ツ)_/¯
        </h3>
        <p className="error-404__paragraph">
          The page you were searching for went out for a coffee break and forgot
          to come back.
          <br />
          <br />
          Don&apos;t worry though, you can head back to the homepage or drop me
          a line and I&apos;ll see what I can do to reunite you with your page.
        </p>
      </section>
    </>
  );
}
