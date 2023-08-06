//React

import React, { useEffect, useRef, useState } from "react";

//Next
import { NextRouter, useRouter } from "next/router";
import {
  CanvasComponent,
  MetaData,
} from "@components/shared/shared.components";

import {
  PAGE_METADATA,
  OPEN_GRAPH,
} from "@utilities/variables/shared/index-shared.variables";

/**
 * Page component representing the custom 404 (Page Not Found) error page.
 * This page is displayed when the user navigates to a non-existent page.
 *
 * @returns {JSX.Element | null} The JSX element representing the 404 error page or null if the component is not yet initialized.
 */
export default function Error404(): JSX.Element | null {
  const { error404 } = PAGE_METADATA;
  const section404Ref = useRef<HTMLElement>(null);

  const router: NextRouter = useRouter();

  const { route, pathname, query, asPath } = router;

  const [initialRender, setInitialRender] = useState<boolean>(false);

  useEffect(() => {
    setInitialRender(true);
  }, []);

  const isFirstRender: boolean = !initialRender;
  if (isFirstRender) {
    return null;
  }

  return (
    <>
      <MetaData
        title={error404.title}
        description={error404.description}
        pageUri={error404.pageUri}
        needsIndexation={error404.needsIndexation}
        allowRobotCrawlers={error404.allowRobotCrawlers}
        openGraph={OPEN_GRAPH}
      />
      <section className="error-404" ref={section404Ref}>
        <CanvasComponent parentElement={section404Ref} />
        <h1 className="error-404__main-title">404</h1>
        <h2 className="error-404__title">Oops!</h2>
        <h3 className="error-404__subtitle">
          It looks like you&apos;ve stumbled upon a missing page ¯\_(ツ)_/¯
        </h3>
        <p className="error-404__paragraph">
          The <code>{asPath}</code> page you were searching for went out for a
          coffee break and forgot to come back.
          <br />
          <br />
          Don&apos;t worry though, you can head back to the homepage or drop me
          a line and I&apos;ll see what I can do to reunite you with your page.
        </p>
      </section>
    </>
  );
}
