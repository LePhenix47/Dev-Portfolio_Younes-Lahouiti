import React, { useEffect, useRef } from "react";
import {
  setStyleProperty,
  addClass,
  getParent,
} from "@utilities/helpers/dom.helpers";

type BubbleProps = {
  mouseX: number;
  mouseY: number;
  onAnimationEnd?: (...args: any) => void;
};

function Bubble({ mouseX, mouseY, onAnimationEnd }: BubbleProps) {
  const bubbleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    console.log(
      "%cRendered bubble!",
      "background: green; padding: 10px; font-size: 16px"
    );

    const bubbleSpanElement: HTMLSpanElement | null = bubbleRef.current;

    if (!bubbleSpanElement) {
      return;
    }

    setStyleProperty("--_mouse-x", `${mouseX}px`, bubbleSpanElement);
    setStyleProperty("--_mouse-y", `${mouseY}px`, bubbleSpanElement);
    addClass(bubbleSpanElement, "button__bubble");
  }, []);

  function handleAnimationEnd(e: React.AnimationEvent<HTMLSpanElement>) {
    onAnimationEnd?.();

    const bubbleSpanElement: HTMLSpanElement | null = bubbleRef.current;
    if (bubbleSpanElement) {
      bubbleSpanElement.remove();
    }
  }

  return <span ref={bubbleRef} onAnimationEnd={handleAnimationEnd}></span>;
}

export default Bubble;
