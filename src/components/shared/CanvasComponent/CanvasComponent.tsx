import { LineEffect } from "@utilities/classes/line-effect.class";
import { warn } from "@utilities/helpers/console.helpers";
import React, { RefObject, useEffect, useRef, useState } from "react";

/**
 * A component that renders a canvas element with the LineEffect effect.
 *
 * This component creates a canvas element and applies the LineEffect effect to it, animating particles that move across the canvas.
 *
 * @param {Object} props - The component props.
 * @param {RefObject<HTMLElement>} props.parentElement - The parent element of the canvas element.
 *
 * @returns {JSX.Element} The rendered canvas element.
 *
 * @example
 * // Usage:
 * function App() {
 *   const parentElement = useRef(null);
 *   return <CanvasComponent parentElement={parentElement} />;
 * }
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
   * Handles window resize event to adjust the canvas size based on the parent element's dimensions.
   *
   * @param {HTMLCanvasElement} canvas - The canvas element to resize.
   * @returns {void}
   */
  function handleWindowResize(canvas: HTMLCanvasElement): void {
    const canvasDoesNotExist: boolean = !canvas;
    if (canvasDoesNotExist) {
      return;
    }

    const { clientWidth, clientHeight } = parentElement.current as HTMLElement;

    changeCanvasSize(canvas, clientWidth, clientHeight);

    setEffectHandler(() => {
      return new LineEffect(
        canvas,
        AMOUNT_OF_PARTICLES + Math.floor(clientHeight / AMOUNT_OF_PARTICLES)
      );
    });
  }

  // Function to handle resizing of the canvas
  function handleParentDimensionsChange(entries: ResizeObserverEntry[]) {
    const canvas: HTMLCanvasElement | null = canvasRef.current;

    const { width, height } = entries[0].contentRect;
    changeCanvasSize(canvas as HTMLCanvasElement, width, height);
  }

  /**
   * Initializes the canvas element, setting up a resize event listener and calling `handleWindowResize`
   * to set the initial dimensions on component mount.
   *
   * @returns {void}
   */
  function initializeCanvasListeners(): void {
    const canvas: HTMLCanvasElement | null = canvasRef.current;

    const canvasDoesNotExist = !canvas;
    if (canvasDoesNotExist) {
      return;
    }

    window.addEventListener("resize", () => {
      handleWindowResize(canvas);
    });
    handleWindowResize(canvas); // Set initial dimensions on component mount
  }

  /**
   * Removes the canvas-related event listeners, cleaning up the canvas setup.
   *
   * @returns {void}
   */
  function removeCanvasListeners(): void {
    const canvas: HTMLCanvasElement | null = canvasRef.current;

    const canvasDoesNotExist = !canvas;
    if (canvasDoesNotExist) {
      return;
    }

    window.removeEventListener("resize", () => {
      handleWindowResize(canvas);
    });
  }

  /**
   * Animates the particles in the LineEffect effect.
   *
   * @returns {void}
   */
  function startParticlesEffect(): void {
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
  function changeCanvasSize(
    canvas: HTMLCanvasElement,
    width: number,
    height: number
  ): void {
    const canvasDoesNotExist: boolean = !canvas;
    if (canvasDoesNotExist) {
      return;
    }

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
    startParticlesEffect();

    //We loop the animation
    animationIdRef.current = requestAnimationFrame(animateCanvas);
  }

  useEffect(() => {
    initializeCanvasListeners();

    // Create a ResizeObserver instance to watch for changes in the parent element's size
    const resizeObserver: ResizeObserver = new ResizeObserver(
      handleParentDimensionsChange
    );

    // Observe the parent element
    const parentElementExists: boolean = !!parentElement.current;
    if (parentElementExists) {
      resizeObserver.observe(parentElement.current as HTMLElement);
    }

    // Clean up the event listener on component unmount
    return () => {
      cancelAnimation();
      resizeObserver.disconnect();
      removeCanvasListeners();
    };
  }, [parentElement.current]);

  useEffect(() => {
    cancelAnimation();
    animateCanvas();
  }, [canvasRef.current, parentElement.current]);

  return <canvas className="canvas" ref={canvasRef}></canvas>;
}
