import { addClass, setStyleProperty } from "@utilities/helpers/dom.helpers";
import React, {
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
  useImperativeHandle,
  Ref,
  useRef,
  ReactElement,
} from "react";

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
      getButtonRef: () => {
        // Implement the focus logic
        // For example, if you have a button element ref, you can focus it
        // buttonRef.current?.focus();
        console.log("Button focused");
        const buttonElement = buttonRef.current;
        return buttonElement;
      },
    }),
    []
  );

  function animateButton(mouseX: number, mouseY: number): void {
    const bubbleSpanElement = document.createElement("span");

    setStyleProperty("--_mouse-x", `${mouseX}px`, bubbleSpanElement);
    setStyleProperty("--_mouse-y", `${mouseY}px`, bubbleSpanElement);
    addClass(bubbleSpanElement, "button__bubble");

    const buttonElement: HTMLButtonElement | null = buttonRef.current;
    buttonElement?.appendChild(bubbleSpanElement);

    // Set a timeout to remove the bubble element after the animation duration
    setTimeout(() => {
      bubbleSpanElement.remove();
    }, 500); // Adjust the duration as needed
  }

  function handleButtonClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    const offsetX: number = e.nativeEvent.offsetX;
    const offsetY: number = e.nativeEvent.offsetY;

    console.log(offsetX, offsetY);

    animateButton(offsetX, offsetY);

    onClick?.(e);
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
