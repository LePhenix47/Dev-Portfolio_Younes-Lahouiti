import { useRef, ReactNode } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

/**
 * Component representing the layout for the entire website.
 * It includes the header, main content, and footer sections.
 *
 * @param {Object} props - The props for the PageLayout component.
 * @param {ReactNode} props.children - The children elements to be rendered inside the main content section.
 * @returns {JSX.Element} The JSX element representing the page layout.
 */
export default function PageLayout(props: {
  children: ReactNode;
}): JSX.Element {
  const mainElementRef = useRef<HTMLElement>(null);

  const { children } = props;

  return (
    <>
      {/* The header section */}
      <Header />

      {/* The main content section */}
      <main className="page-layout" ref={mainElementRef} id={"main-content"}>
        {children}
      </main>

      {/* The footer section */}
      <Footer />
    </>
  );
}
