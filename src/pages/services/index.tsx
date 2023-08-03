//Next

import { useRef, useState } from "react";

//Components

import {
  CanvasComponent,
  ModalWindow,
  MetaData,
} from "@/components/shared/shared.components";

import {
  PAGE_METADATA,
  OPEN_GRAPH,
} from "@/react-utils/variables/shared/index-shared.variables";

import {
  ServicesCard,
  ServicesModalContent,
  Slider,
} from "@/components/common/services/services-page.components";

//Utils
import { offeredServices } from "@/react-utils/variables/common/services/services.variables";

import { sliderCardsVariables } from "@/react-utils/variables/common/services/slider.variables";

export default function Services(): JSX.Element | null {
  const { services } = PAGE_METADATA;
  const servicesPageSectionRef = useRef<HTMLElement>(null);
  /**
   * State to tell the `<ModalWindow />` component whether it should open or not
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /**
   * Content to show inside the `<ModalWindow />` component
   */
  const [windowContent, setWindowContent] = useState<any>(null);

  const numberOfShownCards: number = 7;

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
    const dataObject: any = offeredServices.find((serviceOffered) => {
      const { title } = serviceOffered;
      return dataType === title;
    });

    /**
     * We destructure the object stored inside the array returned by the `filter()` function
     */
    const { title, description, qualities } = dataObject;

    /**
     * Set the JSX content for the window modal
     */
    const content = (
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
      <MetaData
        title={services.title}
        description={services.description}
        pageUri={services.pageUri}
        needsIndexation={services.needsIndexation}
        needsRobotCrawlers={services.needsRobotCrawlers}
        openGraph={OPEN_GRAPH}
      />
      <ModalWindow
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content={windowContent}
      />

      <section className="services-page" ref={servicesPageSectionRef}>
        <CanvasComponent parentElement={servicesPageSectionRef} />

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
