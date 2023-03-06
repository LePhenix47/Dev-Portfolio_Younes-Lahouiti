//React
import React, { MutableRefObject, useState } from "react";

//Utils
import { inputType } from "@/react-utils/types/input.types";

export default function ContactInputLabel({
  labelText = "",
  id = "",
  reference,
  inputType = "text",
  placeholder = "",
  isTextArea = false,
  inputDefaultValue = "",
}: {
  labelText: string;
  id: string;
  reference: MutableRefObject<any>;
  inputType: inputType | "";
  placeholder?: string;
  isTextArea?: boolean;
  inputDefaultValue?: string;
}): JSX.Element {
  /**
   * State for the input
   */
  const [isInputActive, setIsInputActive] = useState<boolean>(false);

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
