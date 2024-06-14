import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

//Framer motion library
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePageTransitionContext } from "@context/PageTransition.context";

gsap.registerPlugin(useGSAP);

type PageTransitionProps = {
  children: ReactNode;
};

/**
 * Renders a page transition animation using the GSAP library.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be rendered within the page transition.
 * @param {string} props.pathname - The current pathname.
 * @returns {ReactNode} - The rendered page transition animation.
 */
function PageTransition({ children }: PageTransitionProps): JSX.Element {
  const routes = [
    "/",
    "/about",
    "/skills",
    "/services",
    "/portfolio",
    "/contact",
  ] as const;

  const [displayedChildren, setDisplayedChildren] =
    useState<ReactNode>(children);

  const divElementRef = useRef<HTMLDivElement>(null);

  const { timeline } = usePageTransitionContext();

  /**
   * Executes a GSAP page change animation and updates the displayed children.
   *
   * @return {Promise<void>} A promise that resolves when the animation is complete.
   */
  function handleGsapPageChange() {
    timeline.play().then(() => {
      setDisplayedChildren(children);
      scrollTo(0, 0); // * Window object method

      timeline.pause().clear();
    });
  }

  useGSAP(() => {
    // @ts-ignore We have check if the component changed
    const didNotChangePage: boolean = children!.key === displayedChildren!.key;
    if (didNotChangePage) {
      console.log("Did not");
      return;
    }

    handleGsapPageChange();
  }, [children]);

  return (
    <div className="page-transition" ref={divElementRef}>
      {displayedChildren}
    </div>
  );
}
export default PageTransition;
