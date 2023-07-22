//React
import React, { MutableRefObject, useEffect, useId, useState } from "react";

//Next
import Image from "next/image";

//Utils
import { inputType } from "@/react-utils/types/input.types";
import { voidCallback } from "@/react-utils/types/void-callback.type";
import { log } from "@/react-utils/functions/helper-functions";
import {
  RoundCheckIcon,
  RoundExclamationIcon,
} from "@/components/shared/icons/icons-index.components";

export default function ContactInputLabel({
  labelText = "",
  name = "",
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
  name: string;
  reference: MutableRefObject<any>;
  onChangeCallback?: any;
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

  const randomId = useId();

  return (
    <section
      className={`contact-page__input-label-container ${
        !isEmpty ? "contact-page__input-label-container--empty-input" : ""
      }`}
    >
      <label
        htmlFor={`${name}-${randomId}`}
        className={`contact-page__label ${isInputActive ? "active" : ""}`}
      >
        {labelText}
      </label>

      {/* 
           We return either a textarea or an input depending on this boolean prop
      */}
      {isTextArea ? (
        <textarea
          required
          className={`contact-page__text-area ${isInputActive ? "active" : ""}`}
          id={`${name}-${randomId}`}
          name={name}
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
        ></textarea>
      ) : (
        <input
          required
          type={inputType}
          className="contact-page__input"
          id={`${name}-${randomId}`}
          name={name}
          ref={reference}
          placeholder={placeholder}
          defaultValue={inputDefaultValue}
          onInput={(e) => {
            const inputValueIsEmpty: boolean = !e.currentTarget.value.length;

            if (inputValueIsEmpty) {
              setIsEmpty(false);
            } else {
              setIsEmpty(true);
            }
          }}
          onChange={(e) => {
            const inputIsValid: boolean = onChangeCallback?.(e) || false;

            log({ inputIsValid });
            setIsInputValid(inputIsValid);

            const inputValueIsEmpty = !reference.current?.value.length;

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
            const valueOfInput: string = e.target.value.trim();

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
        <RoundExclamationIcon width={16} height={16} fill={"currentColor"} />
      </p>
      <p
        className={`contact-page__input-label-message contact-page__input-label-message--sucess ${
          !isEmpty && isValid ? "" : "hide"
        }`}
      >
        {validInputMessage}
        <RoundCheckIcon width={16} height={16} fill={"currentColor"} />
      </p>
    </section>
  );
}
