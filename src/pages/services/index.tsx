//Next
import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";

//Components
import ModalWindow from "@/components/ModalWindow/ModalWindow";

//Utils
import { offeredServices } from "@/react-utils/variables/services.variables";
import { formatText, log } from "@/react-utils/functions/helper-functions";

export default function Services(): JSX.Element {
  /**
   * State to tell the `<ModalWindow />` component whether it should open or not
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [windowContent, setWindowContent] = useState<any>(null);

  // let content = (
  //   <section className="services-page__card-content">
  //     <h2 className="services-page__card-title">Title</h2>
  //     <p className="services-page__card-description">Description</p>
  //     <ul className="services-page__card-qualities-list">
  //       <li className="services-page__card-qualities-item">
  //         <span className="services-page__card-qualities-item-icon">
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             width="24"
  //             height="24"
  //             viewBox="0 0 24 24"
  //             fill="var(--color-secondary)"
  //           >
  //             <path fill="none" d="M0 0h24v24H0V0z" />
  //             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z" />
  //           </svg>
  //         </span>
  //         Quality
  //       </li>
  //     </ul>
  //   </section>
  // );

  /**
   * Function that opens the
   */
  function openWindow(event: any) {
    /**
     * Data attribute of the element clicked
     */
    const dataType = event.target.dataset.type;

    let dataObject: any = offeredServices.filter((serviceOffered) => {
      const { title } = serviceOffered;
      return dataType === title;
    });

    const { title, description, qualities } = dataObject[0];

    let content = (
      <section className="services-page__card-content">
        <h2 className="services-page__card-title">{title}</h2>
        <p className="services-page__card-description">{description}</p>
        <ul className="services-page__card-qualities-list">
          {qualities.map((quality: any, index: number) => {
            return (
              <li
                className="services-page__card-qualities-item"
                key={`${quality}-${index}`}
              >
                <span className="services-page__card-qualities-item-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="var(--color-secondary)"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z" />
                  </svg>
                </span>
                {quality}
              </li>
            );
          })}
        </ul>
      </section>
    );

    /**
     * Set the content of the modal window
     */
    setWindowContent(content);
    log(content);
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

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Services page" />
        <meta
          property="og:description"
          content="
          Welcome to my services page. As a skilled web developer with experience in integrating mockups and conducting unit and integration tests with Jest, I offer services in website development. I specialize in building dynamic and responsive websites using modern web technologies to enhance user experience. Whether you need a website built from scratch or require debugging of an existing one, I can help. Let's work together to bring your ideas to life"
        />
        <meta property="og:image" content="/favicon.ico" />

        <meta
          property="og:url"
          content="www.younes-lahouiti-portfolio.com/services"
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
        <div className="services-page__cards-container">
          {/*      Beginning        */}
          {offeredServices.map((service) => {
            const { icon, title, description, qualities } = service;
            return (
              <div
                className="services-page__card card"
                key={`${title}-${description}`}
              >
                <div className="services-page__card-icon">
                  <Image
                    src={icon}
                    alt={`${title}, ${description}`}
                    width={32}
                    height={32}
                  />
                </div>
                <div className="services-page__card-text">
                  <h2 className="services-page__card-title">{title}</h2>
                  <a
                    href="#"
                    className="services-page__card-link"
                    onClick={(e) => {
                      openWindow(e);
                    }}
                    title={`View moer about ${formatText(title, "lowercase")}?`}
                    data-type={title}
                  >
                    View more{" "}
                    <span className="services-page__card-link-arrow">→</span>
                  </a>
                </div>
              </div>
            );
          })}
          {/* <div className="services-page__card card">
            <div className="services-page__card-icon">
              <Image src="/x" alt={""} width={32} height={32} />
            </div>
            <div className="services-page__card-text">
              <h2 className="services-page__card-title">Test 1234 test</h2>
              <a
                href="#"
                className="services-page__card-link"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                View more{" "}
                <span className="services-page__card-link-arrow">→</span>
              </a>
            </div>
          </div> */}

          {/*      End      */}
        </div>
      </section>
    </>
  );
}
