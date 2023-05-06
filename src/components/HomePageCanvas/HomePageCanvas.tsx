import { LineEffect } from "@/react-utils/classes/line-effect.class";
import { error, log } from "@/react-utils/functions/helper-functions";
import React, { RefObject, useEffect, useRef, useState } from "react";

export default function CanvasComponent({
  parentElement,
}: {
  parentElement: RefObject<HTMLElement>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [effectHandler, setEffectHandler] = useState<LineEffect>();

  const AMOUNT_OF_PARTICLES: number = 100;

  function animateParticles() {
    effectHandler?.animateParticles();
  }

  function setCanvasSize(
    canvas: HTMLCanvasElement,
    width: number,
    height: number
  ) {
    const argumentPassedAreIncorrect = !width || !height;
    if (argumentPassedAreIncorrect) {
      error(
        "Argument passed are not correct! Please enter numerical values only"
      );
      return;
    }
    canvas.width = width;
    canvas.height = height;
  }

  /**
   * Clears the canvas by removing all content.
   * @returns {void}
   */
  function clearOldCanvas(canvas: HTMLCanvasElement): void {
    const canvasDoesNotExist = !canvas;
    if (canvasDoesNotExist) {
      return;
    }

    const canvasContext = canvas.getContext("2d");
    //@ts-ignore
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  }

  /**
   * Animates the canvas by clearing it and applying effects.
   * @returns {void}
   */
  function animate(): void {
    //@ts-ignore
    clearOldCanvas(canvasRef.current);
    animateParticles();
    requestAnimationFrame(animate);
  }

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;

    //@ts-ignore
    const { clientWidth, clientHeight } = parentElement.current;
    log({ clientWidth, clientHeight });

    const handleWindowResize = () => {
      if (canvas) {
        //If the canvas exists
        setCanvasSize(
          canvas,
          //@ts-ignore
          parentElement.current.clientWidth,
          //@ts-ignore
          parentElement.current.clientHeight
        );

        setEffectHandler(() => {
          return new LineEffect(canvas, AMOUNT_OF_PARTICLES);
        });
      }

      // Perform any additional drawing or logic based on the resized dimensions
    };

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize(); // Set initial dimensions on component mount

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    animate();

    log("changed width");
  }, [canvasRef.current?.clientHeight, canvasRef.current?.clientWidth]);

  return <canvas className="home-page__canvas" ref={canvasRef}></canvas>;
}
