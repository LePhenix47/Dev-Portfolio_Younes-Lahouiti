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
  const dialogRef: React.MutableRefObject<null> = useRef(null);

  //@ts-ignore
  const openedOnlyOnce: boolean = !dialogRef?.current?.attributes.open;

  const [fadingClassAnimation, setFadingClassAnimation] = useState<string>("");

  function closeModal() {
    //@ts-ignore
    dialogRef?.current?.close();
    setFadingClassAnimation("fade-out");
    log("fading out");
    setIsOpen(false);
    setFadingClassAnimation("");
  }

  if (isOpen && openedOnlyOnce) {
    setFadingClassAnimation("fade-in");
    //@ts-ignore
    dialogRef?.current?.showModal();
  }
  return (
    <dialog className={`modal-window ${fadingClassAnimation}`} ref={dialogRef}>
      <div className="modal-window__content-wrapper">
        <button
          className="modal-window__close-button"
          onClick={() => {
            //Add a function that create a transition when closing the window here:
            log({ fadingClassAnimation });
            closeModal();
          }}
        ></button>
        {content}
      </div>
    </dialog>
  );
}
