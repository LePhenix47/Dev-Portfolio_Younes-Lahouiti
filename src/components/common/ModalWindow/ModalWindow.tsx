//React
import { Dispatch, SetStateAction, useRef, useState } from "react";

//Utils
import { log } from "@/react-utils/functions/helper-functions";

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
  const dialogRef: React.MutableRefObject<null> = useRef(null);

  /**
   * Boolean to check if the window opened only once
   */
  //@ts-ignore
  const openedOnlyOnce: boolean = !dialogRef?.current?.attributes.open;

  /**
   * Function that closes the modal with a fading animation
   */
  function closeModal() {
    //@ts-ignore
    dialogRef?.current?.classList.add("fade-out");

    setTimeout(() => {
      //@ts-ignore
      dialogRef?.current?.close();

      setIsOpen(false);

      //@ts-ignore
      dialogRef?.current?.classList.remove("fade-out");
    }, 500);
  }

  /**
   * Structural condifiton to open the window
   */
  if (isOpen && openedOnlyOnce) {
    //@ts-ignore
    dialogRef?.current?.showModal();

    //@ts-ignore
    dialogRef?.current?.classList.add("fade-in");

    setTimeout(() => {
      //@ts-ignore
      dialogRef?.current?.classList.remove("fade-in");
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
