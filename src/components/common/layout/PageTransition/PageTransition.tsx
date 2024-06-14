"use client";
import React, {
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";
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
 * @returns {ReactNode} - The rendered page transition animation.
 */
function PageTransition({ children }: PageTransitionProps): JSX.Element {
  const [displayedChildren, setDisplayedChildren] =
    useState<ReactNode>(children);
  const divElementRef = useRef<HTMLDivElement>(null);
  const { timeline } = usePageTransitionContext();
  const { contextSafe } = useGSAP();
  const router = useRouter();

  const exit = contextSafe(handleGsapPageChange);

  function showTransition() {
    // @ts-ignore
    const didNotChangePage = children!.key === displayedChildren!.key;
    if (didNotChangePage) {
      return;
    }

    // @ts-ignore
    console.log(children!.key, displayedChildren!.key);

    opacityTransition();
  }

  /**
   * Executes a GSAP page change animation and updates the displayed children.
   *
   * @return {Promise<void>} A promise that resolves when the animation is complete.
   */
  function handleGsapPageChange() {
    timeline.play().then(() => {
      setDisplayedChildren(children);
      window.scrollTo(0, 0); // Window object method
      timeline.pause().clear();
    });
  }

  useLayoutEffect(() => {
    showTransition();
  }, [children]);

  useLayoutEffect(() => {
    showTransition();
  }, []);

  function opacityTransition() {
    gsap.to(divElementRef.current, { opacity: 0 }).then(() => {
      setDisplayedChildren(children);
      gsap.to(divElementRef.current, { opacity: 1 });
      scrollTo(0, 0);
    });
  }

  return (
    <div className="page-transition" ref={divElementRef}>
      {displayedChildren}
    </div>
  );
}

export default PageTransition;
