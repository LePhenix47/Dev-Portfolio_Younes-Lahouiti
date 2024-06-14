import gsap from "gsap";
import React, { ReactNode, createContext, useContext, useState } from "react";

type PageTransitionContextType = {
  timeline: gsap.core.Timeline;
  setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
};

/**
 * The context for page transitions.
 *
 * @type {React.Context<PageTransitionContextType | null>}
 */
const PageTransitionContext = createContext<PageTransitionContextType | null>(
  null
);

type PageTransitionProviderProps = { children: ReactNode };
/**
 * Creates a `PageTransitionProvider` component that provides a context with the current page transition timeline and a function to set the timeline.
 *
 * @param {PageTransitionProviderProps} props - The props for the component.
 * @param {ReactNode} props.children - The children components that will be wrapped by the PageTransitionProvider.
 * @return {JSX.Element} The PageTransitionProvider component.
 */
function PageTransitionProvider({
  children,
}: PageTransitionProviderProps): JSX.Element {
  const [timeline, setTimeline] = useState<gsap.core.Timeline>(
    gsap.timeline({ paused: true })
  );

  const hasNoChildren = React.Children.count(children) === 0;
  if (hasNoChildren) {
    console.warn(
      "No children were provided inside the <PageTransitionProvider> context provider component"
    );
  }

  return (
    <PageTransitionContext.Provider value={{ timeline, setTimeline }}>
      {children}
    </PageTransitionContext.Provider>
  );
}

/**
 * Custom hook that retrieves the page transition context from the React context.
 *
 * @return {PageTransitionContextType | null} The page transition context, or null if it is out of scope.
 * @throws {RangeError} If the usePageTransitionContext() hook is used outside of a <PageTransitionProvider>.
 */
function usePageTransitionContext(): PageTransitionContextType | never {
  const pageTransitionContext = useContext(PageTransitionContext);

  const contextIsOutOfScope = !pageTransitionContext;
  if (contextIsOutOfScope) {
    throw new RangeError(
      `Invalid React context scope, the usePageTransitionContext() hook must be used in a component nested within a <PageTransitionProvider>`
    );
  }

  return pageTransitionContext;
}

export { usePageTransitionContext };
export default PageTransitionProvider;
