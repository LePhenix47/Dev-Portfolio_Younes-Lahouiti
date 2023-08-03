//React
import {
  CanvasComponent,
  MetaData,
} from "@/components/shared/shared.components";

import {
  PAGE_METADATA,
  OPEN_GRAPH,
} from "@/react-utils/variables/shared/index-shared.variables";

import React, { useRef } from "react";

export default function Error500(): JSX.Element {
  const { error500 } = PAGE_METADATA;
  const section500Ref = useRef<HTMLElement>(null);

  return (
    <>
      <MetaData
        title={error500.title}
        description={error500.description}
        pageUri={error500.pageUri}
        needsIndexation={error500.needsIndexation}
        needsRobotCrawlers={error500.needsRobotCrawlers}
        openGraph={OPEN_GRAPH}
      />
      <section className="error-500" ref={section500Ref}>
        <CanvasComponent parentElement={section500Ref} />
        <h1 className="error-500__main-title">500</h1>
        <h2 className="error-500__title">Oops!</h2>
        <h3 className="error-500__subtitle">
          It looks like our servers are experiencing some technical difficulties
          right now. (╯°□°）╯︵ ┻━┻
        </h3>
        <p className="error-500__paragraph">
          Sorry, it looks like our servers are currently taking a coffee break
          and enjoying some downtime.
          <br />
          <br />
          They&apos;re probably chatting away about the latest tech gossip and
          not too concerned about getting back to work anytime soon.
          <br />
          <br />
          In the meantime, feel free to grab a cup of coffee yourself and come
          back later when the servers have finished their break.
        </p>
      </section>
    </>
  );
}
