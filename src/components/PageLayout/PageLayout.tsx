import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function PageLayout(props: any): JSX.Element {
  return (
    <>
      <Header />
      <main className="page-layout">{props.children}</main>
      <Footer />
    </>
  );
}
