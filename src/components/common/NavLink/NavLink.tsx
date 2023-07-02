//React
import { useRouter } from "next/router";

/**
 * Function component for the radar chart
 * @param {children: any; href: string;} props Unknown elements inside the component and the props of the route path
 * @returns {JSX.Element}
 */
export default function NavLink({
  children,
  href,
  id,
}: {
  children: any;
  href: string;
  id?: string;
}): JSX.Element {
  const router = useRouter();

  /**
   * Checks if the link is active by comparing the route added as props to the route of the app
   */
  const linkIsActive: boolean = router.asPath === href;
  /**
   * Function that redirects the user to the `href` value added as props in the `<NavLink />` component
   *
   * @param {any} event Takes in parameters the click event
   * @returns {void}
   */
  function pushToHref(event: any): void {
    //Prevents the page from reloading when switching page
    event.preventDefault();

    //Redirets the user to the page they want to be in
    router.push(href);
  }

  return (
    <a href={href} onClick={pushToHref} id={id}>
      {children}
    </a>
  );
}
