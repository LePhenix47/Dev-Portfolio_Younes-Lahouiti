//React
import { useState } from "react";

//Next
import Head from "next/head";
import Image from "next/image";

//Utils
import {
  openClassroomsProjects,
  personalProjects,
  professionalProjects,
  npmProjects,
  browserExtensionProjects,
} from "@/react-utils/variables/projects.variables";

export default function Portfolio(): JSX.Element {
  /**
   * State containing the data for the cards in the container
   */
  const [allCardInfos, setCardInfos] = useState<any[]>([]);

  return (
    <>
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="
          Check out my latest work! This page showcases some of my most recent projects, from simple landing pages to complex web applications. Each project highlights my technical skills and my commitment to delivering high-quality and user-friendly web experiences."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Portfolio page" />
        <meta
          property="og:description"
          content="
          Check out my latest work! This page showcases some of my most recent projects, from simple landing pages to complex web applications. Each project highlights my technical skills and my commitment to delivering high-quality and user-friendly web experiences."
        />
        <meta property="og:image" content="/favicon.ico" />

        <meta
          property="og:url"
          content="www.younes-lahouiti-portfolio.com/portfolio"
        />

        {/*
         <!--Title--> 
         */}
        <title>Portfolio page</title>
      </Head>
      <section className="portfolio-page">
        <h1 className="portfolio-page__title">Portfolio</h1>
        <h2 className="portfolio-page__subtitle">
          A showcase of my personal and professional work
        </h2>
      </section>
    </>
  );
}
