//Next
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

//Components
import ModalWindow from "@/components/ModalWindow/ModalWindow";
import ServicesModalContent from "@/components/ServicesModalContent/ServicesModalContent";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import Slider from "@/components/Slider/Slider";

//Utils
import { offeredServices } from "@/react-utils/variables/services.variables";
import {
  formatText,
  log,
  selectRandomElementsInArray,
} from "@/react-utils/functions/helper-functions";
import { sliderCardsVariables } from "@/react-utils/variables/slider.variables";
import { sliderCardTypes } from "@/react-utils/types/slider.types";

export default function Services(): JSX.Element | null {
  /**
   * State to tell the `<ModalWindow />` component whether it should open or not
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /**
   * Content to show inside the `<ModalWindow />` component
   */
  const [windowContent, setWindowContent] = useState<any>(null);

  let numberOfShownCards = 7;

  /**
   * Function that opens the window modal
   */
  function openWindow(event: any) {
    /**
     * Data attribute of the element clicked
     */
    const dataType = event.target.dataset.type;

    /**
     * We get the details of the image clicked
     */
    let dataObject: any = offeredServices.filter((serviceOffered) => {
      const { title } = serviceOffered;
      return dataType === title;
    });

    /**
     * We destructure the object stored inside the array returned by the `filter()` function
     */
    const { title, description, qualities } = dataObject[0];

    /**
     * Set the JSX content for the window modal
     */
    let content = (
      <ServicesModalContent
        title={title}
        description={description}
        qualities={qualities}
      />
    );

    /**
     * Set the content of the modal window
     */
    setWindowContent(content);

    /**
     * Open the `<ModalWindow />` component
     */
    setIsOpen(true);
  }

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
          Welcome to my services page. As a skilled web developer with experience in integrating mockups and conducting unit and integration tests with Jest, I offer services in website development. I specialize in building dynamic and responsive websites using modern web technologies to enhance user experience. Whether you need a website built from scratch or require debugging of an existing one, I can help. Let's work together to bring your ideas to life"
        />
        {/* Open Graph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Services page" />
        <meta
          property="og:description"
          content="
          Welcome to my services page. As a skilled web developer with experience in integrating mockups and conducting unit and integration tests with Jest, I offer services in website development. I specialize in building dynamic and responsive websites using modern web technologies to enhance user experience. Whether you need a website built from scratch or require debugging of an existing one, I can help. Let's work together to bring your ideas to life"
        />
        <meta property="og:image" content="/profile-pic.jpg" />
        <meta property="og:image:width" content="130" />
        <meta property="og:image:height" content="170" />
        <meta
          property="og:url"
          content="https://younes-portfolio-dev.vercel.app/services"
        />
        {/*
         <!--Title--> 
         */}
        <title>Services page</title>
      </Head>
      <ModalWindow
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content={windowContent}
      />

      <section className="services-page">
        <h1 className="services-page__title">Services</h1>
        <h2 className="services-page__subtitle">My expertise and offerings</h2>
        <section className="services-page__cards-container">
          {offeredServices.map((service, index: number) => {
            /**
             * We get the icon, title and description
             */
            const { icon, title, description } = service;

            return (
              <ServicesCard
                callback={openWindow}
                icon={icon}
                title={title}
                description={description}
                key={`${index}-${title}-${description}`}
              />
            );
          })}
        </section>

        <section className="services-page__testimonials ">
          <h2 className="services-page__testimonials-title">
            Customer Feedback
          </h2>
          <h3 className="services-page__testimonials-subtitle">
            Insights from our clients
          </h3>

          <Slider
            sliderCards={sliderCardsVariables}
            cardToBeShown={numberOfShownCards}
          />
        </section>
      </section>
    </>
  );
}
