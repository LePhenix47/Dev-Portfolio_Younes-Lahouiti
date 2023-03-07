//React
import Head from "next/head";
import React from "react";

export default function Error500(): JSX.Element {
  return (
    <>
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="Oops, something went wrong. We apologize for the inconvenience and are working to fix the issue. Please try again later or contact me for assistance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Error 500 - Portfolio" />
        <meta
          property="og:description"
          content="Oops, something went wrong. We apologize for the inconvenience and are working to fix the issue. Please try again later or contact me for assistance."
        />
        <meta property="og:image" content="/profile-pic.jpg" />
        <meta property="og:image:width" content="130" />
        <meta property="og:image:height" content="170" />
        <meta
          property="og:url"
          content="https://younes-portfolio-dev.vercel.app/500"
        />
        {/*
         <!--Title--> 
         */}
        <title>Error 500 - Portfolio</title>
        {/*     Canonical link     */}
        <link
          rel="canonical"
          href="https://https://younes-portfolio-dev.vercel.app/"
        />
      </Head>
      <section className="error-500">
        <h1 className="error-500__main-title">500</h1>
        <h2 className="error-500__title">Oops!</h2>
        <h3 className="error-500__subtitle">
          It looks like our servers are experiencing some technical difficulties
          right now. (╯°□°）╯︵ ┻━┻
        </h3>
        <p className="error-500__paragraph">
          Sorry, it looks like our servers are currently taking a coffee break
          and enjoying some downtime.
          <br />
          <br />
          They&apos;re probably chatting away about the latest tech gossip and
          not too concerned about getting back to work anytime soon.
          <br />
          <br />
          In the meantime, feel free to grab a cup of coffee yourself and come
          back later when the servers have finished their break.
        </p>
      </section>
    </>
  );
}
