import { useRef } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function PageLayout(props: any): JSX.Element {
  const mainElementRef = useRef<HTMLElement>(null);
  return (
    <>
      <Header />
      <main className="page-layout" ref={mainElementRef}>
        {props.children}
      </main>
      <Footer />
    </>
  );
}
