//React
import { addClass, removeClass } from "@utilities/helpers/dom.helpers";
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

  const TRANSITION_DURATION_IN_MS: number = 350;

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
    }, TRANSITION_DURATION_IN_MS);
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
      e.clientX < modalDomRect.left || e.clientX > modalDomRect.right;
    const clickedOutsideOnYAxis: boolean =
      e.clientY < modalDomRect.top || e.clientY > modalDomRect.bottom;

    const clickedOutsideModal: boolean =
      clickedOutsideOnXAxis || clickedOutsideOnYAxis;

    if (clickedOutsideModal) {
      closeModal();
    }
  }

  /**
   * Structural condition to open the window even on Strict mode
   */
  if (isOpen && openedOnlyOnce) {
    modalWindow.showModal();

    addClass(modalWindow, "fade-in");

    setTimeout(() => {
      removeClass(modalWindow, "fade-in");
    }, TRANSITION_DURATION_IN_MS);
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
