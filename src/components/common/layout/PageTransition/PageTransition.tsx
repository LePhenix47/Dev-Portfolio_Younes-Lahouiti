import React, { ReactNode } from "react";

//Framer motion library
import { motion } from "framer-motion";

/**
 * Renders a page transition animation using Framer Motion.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be rendered within the page transition.
 * @param {string} props.pathname - The current pathname.
 * @returns {ReactNode} - The rendered page transition animation.
 */
function PageTransition({
  children,
  pathname,
}: {
  children: ReactNode;
  pathname: string;
}): JSX.Element {
  return (
    <motion.div
      key={pathname}
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
      {children}
    </motion.div>
  );
}
export default PageTransition;
