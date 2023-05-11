import { LineEffect } from "@/react-utils/classes/line-effect.class";
import { error, log } from "@/react-utils/functions/helper-functions";
import React, { RefObject, useEffect, useRef, useState } from "react";

/**
 * A component that renders a canvas element with a LineEffect effect.
 * @param {Object} props - The component props.
 * @param {RefObject<HTMLElement>} props.parentElement - The parent element of the canvas element.
 *
 * @returns {JSX.Element} - The rendered canvas element.
 *
 * @component
 */
export default function CanvasComponent({
  parentElement,
}: {
  parentElement: RefObject<HTMLElement>;
}): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const animationIdRef = useRef<number>(0);

  const [effectHandler, setEffectHandler] = useState<LineEffect>();

  const AMOUNT_OF_PARTICLES: number = 100;

  /**
   * Animates the particles in the LineEffect effect.
   *
   * @returns {void}
   */
  function setParticlesEffect(): void {
    effectHandler?.animateParticles();
  }

  function cancelAnimation() {
    const id: number = animationIdRef.current;
    cancelAnimationFrame(id);
  }
  /**
   * Sets the size of the canvas element.
   *
   * @param {HTMLCanvasElement} canvas - The canvas element to resize.
   * @param {number} width - The new width of the canvas element.
   * @param {number} height - The new height of the canvas element.
   *
   * @returns {void}
   */
  function setCanvasSize(
    canvas: HTMLCanvasElement,
    width: number,
    height: number
  ): void {
    const dimensionsPassedAreInvalid: boolean = isNaN(width) || isNaN(height);
    if (dimensionsPassedAreInvalid) {
      error(
        "Argument passed are not correct! Please enter numerical values only"
      );
      return;
    }
    canvas.width = width;
    canvas.height = height;
  }

  /**
   * Clears the content of the canvas element.
   *
   * @param {HTMLCanvasElement} canvas - The canvas element to clear.
   *
   * @returns {void}
   */
  function clearCanvas(canvas: HTMLCanvasElement): void {
    const canvasContext: CanvasRenderingContext2D | null =
      canvas.getContext("2d");

    if (canvasContext) {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  /**
   * Animates the canvas element by clearing it and applying the LineEffect effect.
   * @returns {void}
   */
  function animateCanvas(): void {
    if (!canvasRef.current) {
      return;
    }

    //We claer the canvas from old paint
    clearCanvas(canvasRef.current);

    //We animate the particles
    setParticlesEffect();

    //We loop the animation
    animationIdRef.current = requestAnimationFrame(animateCanvas);
  }

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;

    const handleWindowResize = () => {
      if (canvas) {
        setCanvasSize(
          canvas,
          //@ts-ignore
          parentElement.current.clientWidth,
          //@ts-ignore
          parentElement.current.clientHeight
        );
        setEffectHandler(() => {
          return new LineEffect(
            canvas,
            AMOUNT_OF_PARTICLES +
              //@ts-ignore
              parentElement.current.clientHeight / AMOUNT_OF_PARTICLES
          );
        });
      }
      // Perform any additional drawing or logic based on the resized dimensions
    };

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize(); // Set initial dimensions on component mount

    // Clean up the event listener on component unmount
    return () => {
      cancelAnimation();
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    cancelAnimation();
    animateCanvas();
    log("changed width");
  }, [canvasRef.current?.clientHeight, canvasRef.current?.clientWidth]);

  return <canvas className="home-page__canvas" ref={canvasRef}></canvas>;
}
