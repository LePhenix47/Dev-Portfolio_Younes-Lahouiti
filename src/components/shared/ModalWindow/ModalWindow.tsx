//React
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
  content,
  isOpen,
  setIsOpen,
}: {
  content: JSX.Element | null;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  /**
   * Modal window as a reference to access its DOM methods
   */
  const dialogRef = useRef<HTMLDialogElement>(null);

  /**
   * Boolean to check if the window opened only once
   */
  const openedOnlyOnce: boolean = !dialogRef.current?.hasAttribute("open");

  /**
   * Function that closes the modal with a fading animation
   */
  function closeModal() {
    (dialogRef.current as HTMLDialogElement).classList.add("fade-out");

    setTimeout(() => {
      (dialogRef.current as HTMLDialogElement).close();

      setIsOpen(false);

      (dialogRef.current as HTMLDialogElement).classList.remove("fade-out");
    }, 500);
  }

  /**
   * Structural condition to open the window
   */
  if (isOpen && openedOnlyOnce) {
    (dialogRef.current as HTMLDialogElement).showModal();

    (dialogRef.current as HTMLDialogElement).classList.add("fade-in");

    setTimeout(() => {
      (dialogRef.current as HTMLDialogElement).classList.remove("fade-in");
    }, 500);
  }
  return (
    <dialog className="modal-window" ref={dialogRef}>
      <div className="modal-window__content-wrapper">
        <button
          className="modal-window__close-button"
          onClick={() => {
            //Add a function that create a transition when closing the window here:
            closeModal();
          }}
        ></button>
        {content}
      </div>
    </dialog>
  );
}
