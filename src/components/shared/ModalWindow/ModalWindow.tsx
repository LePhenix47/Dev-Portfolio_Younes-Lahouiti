//React
import { log } from "@utilities/helpers/console.helpers";
import {
  addClass,
  getStyleProperty,
  removeClass,
} from "@utilities/helpers/dom.helpers";
import { Dispatch, SetStateAction, useRef } from "react";

//Utils

/**
 * Pop-up window
 *
 * Useful methods to use:
 *
 * - `showModal()` to open the window
 *
 * - `close()` to close it
 *
 */
export default function ModalWindow({
  children,
  isOpen,
  setIsOpen,
}: {
  children: JSX.Element | null;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  /**
   * Modal window as a reference to access its DOM methods
   */
  const dialogRef = useRef<HTMLDialogElement>(null);

  const modalWindow: HTMLDialogElement = dialogRef.current as HTMLDialogElement;

  const TRANSITION_DURATION: number = 350;

  /**
   * Boolean to check if the window opened only once
   */
  const openedOnlyOnce: boolean = !modalWindow?.hasAttribute("open");

  /**
   * Function that closes the modal with a fading animation
   */
  function closeModal() {
    addClass(modalWindow, "fade-out");

    setTimeout(() => {
      modalWindow.close();

      setIsOpen(false);

      removeClass(modalWindow, "fade-out");
    }, TRANSITION_DURATION);
  }

  /**
   * Checks if a click event occurred outside of a modal window and closes the modal if it did.
   *
   * @param e - The click event object.
   */
  function checkIfCloseDialog(
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ) {
    e.stopPropagation();
    const modalDomRect: DOMRect = modalWindow.getBoundingClientRect();

    const clickedOutsideOnXAxis: boolean =
      e.pageX < modalDomRect.left || e.pageX > modalDomRect.right;
    const clickedOutsideOnYAxis: boolean =
      e.pageY < modalDomRect.top || e.pageY > modalDomRect.bottom;

    const clickedOutsideModel: boolean =
      clickedOutsideOnXAxis || clickedOutsideOnYAxis;

    if (clickedOutsideModel) {
      closeModal();
    }
  }

  /**
   * Structural condition to open the window
   */
  if (isOpen && openedOnlyOnce) {
    modalWindow.showModal();

    addClass(modalWindow, "fade-in");

    setTimeout(() => {
      removeClass(modalWindow, "fade-in");
    }, TRANSITION_DURATION);
  }
  return (
    <dialog
      className="modal-window"
      ref={dialogRef}
      onClick={checkIfCloseDialog}
    >
      <div className="modal-window__content-wrapper">
        <button
          className="modal-window__close-button"
          onClick={closeModal}
        ></button>
        {children}
      </div>
    </dialog>
  );
}
