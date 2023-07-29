import { LineEffect } from "@/react-utils/classes/line-effect.class";
import { warn } from "@/react-utils/functions/helpers/console-helper.functions";
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

  const AMOUNT_OF_PARTICLES: number = 50;

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
      warn(
        `Argument passed are not correct! Expected both dimensions to be valid numbers but instead got:
        \n width: ${width}, height: ${height}`
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
    const hasNotFoundCanvas = !canvasRef.current;
    if (hasNotFoundCanvas) {
      return;
    }

    //We clear the canvas from old paint
    clearCanvas(canvasRef.current);

    //We animate the particles
    setParticlesEffect();

    //We loop the animation
    animationIdRef.current = requestAnimationFrame(animateCanvas);
  }

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;

    const handleWindowResize: () => void = () => {
      const isNotHtmlCanvas = !canvas;
      if (isNotHtmlCanvas) {
        return;
      }

      const { clientWidth, clientHeight } =
        parentElement.current as HTMLElement;

      setCanvasSize(canvas, clientWidth, clientHeight);

      setEffectHandler(() => {
        return new LineEffect(
          canvas,
          AMOUNT_OF_PARTICLES + clientHeight / AMOUNT_OF_PARTICLES
        );
      });
      // Perform any additional drawing or logic based on the resized dimensions
    };

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize(); // Set initial dimensions on component mount

    // Clean up the event listener on component unmount
    return () => {
      cancelAnimation();
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [parentElement.current]);

  useEffect(() => {
    cancelAnimation();
    animateCanvas();
  }, [canvasRef.current, parentElement.current]);

  return <canvas className="canvas" ref={canvasRef}></canvas>;
}
