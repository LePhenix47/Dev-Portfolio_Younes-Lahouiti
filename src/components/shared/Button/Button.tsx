import {
  addClass,
  calculateOffset,
  setStyleProperty,
} from "@utilities/helpers/dom.helpers";
import React, {
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
  useImperativeHandle,
  Ref,
  useRef,
} from "react";
import { Bubble } from "../shared.components";
import { createRoot } from "react-dom/client";

type ButtonProps = {
  children: ReactNode;
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"]; // Correcting the type
  arrayOfClasses?: string[];
  onClick?: (...args: any) => any;
};

type ButtonRef = {
  // Define the functions or properties you want to expose
  getButtonRef: () => HTMLButtonElement | null;
};

/**
 * Renders a button element with optional CSS classes and event handling.
 * @example
 * ```tsx
 * import React, { useRef } from "react";
 *
 * const buttonRef = useRef(null);
 *
 * const handleClick = () => {
 *   buttonRef.current.getButtonRef()?.focus();
 * };
 *
 * return (
 *   <Button ref={buttonRef} onClick={handleClick}>
 *     Click me
 *   </Button>
 * );
 * ```
 *
 * @param {React.ReactNode} children - The content to be displayed inside the button.
 * @param {ButtonHTMLAttributes["type"]} type - The type of the button element.
 * @param {string[]} arrayOfClasses - An array of CSS classes to be applied to the button.
 * @param {(...args: any) => any} onClick - The function to be called when the button is clicked.
 * @param {React.Ref<ButtonRef>} ref - The ref object to access the button element's reference.
 * @returns {JSX.Element} The rendered button element.
 */
function Button(
  { children, type, arrayOfClasses, onClick }: ButtonProps,
  ref: Ref<ButtonRef>
): JSX.Element {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      /**
       * Gets the reference to the button element.
       *
       * @function
       * @returns {HTMLButtonElement | null} The button element reference.
       */
      getButtonRef: (): HTMLButtonElement | null => {
        const buttonElement = buttonRef.current;
        return buttonElement;
      },
    }),
    []
  );

  /**
   * Animates the button with a bubble effect.
   *
   * @function
   * @param {number} mouseX - The X-coordinate of the mouse click event.
   * @param {number} mouseY - The Y-coordinate of the mouse click event.
   */
  function animateBubble(mouseX: number, mouseY: number): void {
    const buttonElement: HTMLButtonElement | null = buttonRef.current;

    if (!buttonElement) {
      return;
    }

    // Create a span as a target container for the portal
    const portalContainer: HTMLSpanElement = document.createElement("span");

    const bubbleJsxElement: JSX.Element = (
      <Bubble
        mouseX={mouseX}
        mouseY={mouseY}
        onAnimationEnd={() => {
          // Handle animation end if needed
          buttonElement.removeChild(portalContainer);
        }}
      />
    );

    // Use createRoot to render the Bubble component
    createRoot(portalContainer).render(bubbleJsxElement);

    // Append the portal container to the body
    buttonElement.appendChild(portalContainer);
  }

  /**
   * Handles the button click event.
   *
   * @function
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event - The button click event.
   */
  function handleButtonClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    const { offsetX, offsetY } = calculateOffset(
      buttonRef.current as HTMLButtonElement,
      event.nativeEvent,
      {
        withClientCoords: true,
      }
    );

    animateBubble(offsetX, offsetY);

    onClick?.(event);
  }

  return (
    <button
      className={`button ${arrayOfClasses?.join(" ")}`}
      type={type}
      onClick={handleButtonClick}
      ref={buttonRef}
    >
      {children}
    </button>
  );
}

export default forwardRef(Button);
