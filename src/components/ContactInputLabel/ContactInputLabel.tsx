//React
import React, { MutableRefObject, useEffect, useState } from "react";

//Next
import Image from "next/image";

//Utils
import { inputType } from "@/react-utils/types/input.types";
import { voidCallback } from "@/react-utils/types/void-callback.type";
import { log } from "@/react-utils/functions/helper-functions";

export default function ContactInputLabel({
  labelText = "",
  id = "",
  reference,
  onChangeCallback,
  errorInputMessage = "Invalid",
  validInputMessage = "Valid",
  inputType = "text",
  placeholder = "",
  isTextArea = false,
  inputDefaultValue = "",
}: {
  labelText: string;
  id: string;
  reference: MutableRefObject<any>;
  onChangeCallback?: voidCallback;
  errorInputMessage?: string;
  validInputMessage?: string;
  inputType?: inputType | "";
  placeholder?: string;
  isTextArea?: boolean;
  inputDefaultValue?: string;
}): JSX.Element {
  /**
   * State for the input to get the effect with the label
   */
  const [isInputActive, setIsInputActive] = useState<boolean>(false);

  /**
   * State for the input to validate or invalidate the input
   */
  const [isValid, setIsInputValid] = useState<boolean>(false);

  /**
   * State to know if the input is empty
   */
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  return (
    <section className={`contact-page__input-label-container`}>
      <label
        htmlFor={id}
        className={`contact-page__label ${isInputActive ? "active" : ""}`}
      >
        {labelText}
      </label>

      {/* 
           We return either a textarea or an input depending on this boolean prop
      */}
      {isTextArea ? (
        <textarea
          className={`contact-page__text-area ${isInputActive ? "active" : ""}`}
          id={id}
          name={id}
          ref={reference}
          placeholder={placeholder}
          defaultValue={inputDefaultValue}
          onChange={(e) => {
            let inputIsValid: boolean = onChangeCallback?.(e) || false;

            log({ inputIsValid });
            setIsInputValid(inputIsValid);
          }}
          onInput={(e) => {
            let inputValueIsEmpty: boolean = !e.currentTarget.value.length;

            if (inputValueIsEmpty) {
              setIsEmpty(false);
            } else {
              setIsEmpty(true);
            }
          }}
          onFocus={() => {
            setIsInputActive(true);
          }}
          onBlur={(e) => {
            let valueOfInput: string = e.target.value.trim();

            const inputIsEmpty: boolean = !valueOfInput;

            if (inputIsEmpty) {
              setIsInputActive(false);
            }
          }}
        ></textarea>
      ) : (
        <input
          type={inputType}
          className="contact-page__input"
          id={id}
          name={id}
          ref={reference}
          placeholder={placeholder}
          defaultValue={inputDefaultValue}
          onInput={(e) => {
            let inputValueIsEmpty: boolean = !e.currentTarget.value.length;

            if (inputValueIsEmpty) {
              setIsEmpty(false);
            } else {
              setIsEmpty(true);
            }
          }}
          onChange={(e) => {
            let inputIsValid: boolean = onChangeCallback?.(e) || false;

            log({ inputIsValid });
            setIsInputValid(inputIsValid);

            let inputValueIsEmpty = !reference.current?.value.length;

            if (inputValueIsEmpty) {
              setIsEmpty(true);
            } else {
              setIsEmpty(false);
            }
          }}
          onFocus={() => {
            setIsInputActive(true);
          }}
          onBlur={(e) => {
            let valueOfInput: string = e.target.value.trim();

            const inputIsEmpty: boolean = !valueOfInput;

            if (inputIsEmpty) {
              setIsInputActive(false);
            }
          }}
        />
      )}
      <p
        className={`contact-page__input-label-message contact-page__input-label-message--error ${
          !isEmpty && !isValid ? "" : "hide"
        }`}
      >
        {errorInputMessage}
        <svg
          height={16}
          width={16}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="exclamation-circle"
          role="img"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentcolor"
            d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
          />
        </svg>
      </p>
      <p
        className={`contact-page__input-label-message contact-page__input-label-message--success ${
          !isEmpty && isValid ? "" : "hide"
        }`}
      >
        {validInputMessage}
        <svg
          height={16}
          width={16}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentcolor"
          focusable="false"
          data-prefix="fas"
          data-icon="check-circle"
          role="img"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentcolor"
            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
          />
        </svg>
      </p>
    </section>
  );
}
