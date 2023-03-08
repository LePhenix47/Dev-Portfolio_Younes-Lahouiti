//React
import React, { MutableRefObject, useState } from "react";

//Utils
import { inputType } from "@/react-utils/types/input.types";
import { voidCallback } from "@/react-utils/types/void-callback.type";

export default function ContactInputLabel({
  labelText = "",
  id = "",
  reference,
  onChangeCallback,
  inputType = "text",
  placeholder = "",
  isTextArea = false,
  inputDefaultValue = "",
}: {
  labelText: string;
  id: string;
  reference: MutableRefObject<any>;
  onChangeCallback?: voidCallback;
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

  return (
    <section className="contact-page__input-label-container">
      <label
        htmlFor={id}
        className={`contact-page__label ${isInputActive ? "active" : ""}`}
      >
        {labelText}
      </label>

      {isTextArea ? (
        <textarea
          className={`contact-page__text-area ${isInputActive ? "active" : ""}`}
          id={id}
          name={id}
          ref={reference}
          placeholder={placeholder}
          defaultValue={inputDefaultValue}
          onChange={(e) => {
            let inputIsValid = onChangeCallback?.(e);
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
          onChange={(e) => {
            let inputIsValid = onChangeCallback?.(e);
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
    </section>
  );
}
