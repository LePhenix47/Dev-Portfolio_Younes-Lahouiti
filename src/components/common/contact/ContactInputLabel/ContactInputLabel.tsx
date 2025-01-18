//React
import React, {
  MutableRefObject,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

//Utils
import { inputType } from "@utilities/types/contact/input.types";
import Icons from "@components/shared/icons/Icons";
import {
  getStyleProperty,
  setStyleProperty,
} from "@utilities/helpers/dom.helpers";
import { roundToFloat } from "@utilities/helpers/numbers.helpers";

type ContactInputLabelProps = {
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
};

/**
 * Represents an input label component for the contact page.
 *
 * @param {string} labelText - The text of the label.
 * @param {string} name - The name of the input element.
 * @param {MutableRefObject<any>} reference - The reference to the input element.
 * @param {Function} [onChangeCallback] - The callback function to validate the input value.
 * @param {string} [errorInputMessage="Invalid"] - The error message to display when the input value is invalid.
 * @param {string} [validInputMessage="Valid"] - The success message to display when the input value is valid.
 * @param {inputType | ""} [inputType="text"] - The type of the input element.
 * @param {string} [placeholder=""] - The placeholder text for the input element.
 * @param {boolean} [isTextArea=false] - A boolean indicating whether to render a textarea instead of an input element.
 * @param {string} [inputDefaultValue=""] - The default value for the input element.
 *
 * @returns {JSX.Element} A JSX element representing the ContactInputLabel component.
 *
@component
 * @example
 * // Example usage:
 * const nameRef = useRef<HTMLInputElement>(null);
 * const onChangeCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
 *   // Your validation logic here...
 *   return true; // Return true if input is valid, false otherwise
 * };
 *
 * <ContactInputLabel
 *   labelText="First Name"
 *   name="first-name"
 *   reference={nameRef}
 *   onChangeCallback={onChangeCallback}
 *   errorInputMessage="Please enter a valid first name."
 *   validInputMessage="First name is valid."
 *   inputType="text"
 *   placeholder="Enter your first name..."
 * />
 */
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
}: ContactInputLabelProps): JSX.Element {
  /**
   * State for the input to validate or invalidate the input
   */
  const [isValid, setIsInputValid] = useState<boolean>(false);

  /**
   * State to know if the input is empty
   */
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  /**
   * Id for the input using a React state
   */
  const randomId: string = useId();

  const inputLabelContainerRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    const { current: containerElement } = inputLabelContainerRef;
    const { current: labelElement } = labelRef;

    if (!containerElement || !labelElement) {
      return;
    }

    const input =
      containerElement.querySelector<HTMLInputElement>("input, textarea")!;

    const labelDomRect = labelElement.getBoundingClientRect();

    const scaleOnFocus: number =
      document.activeElement === input || input.value === ""
        ? Number(
            getStyleProperty("--_label-scale-on-input-focus", containerElement)
          )
        : 1;

    const labelWidthOnFocus = roundToFloat(
      labelDomRect.width * scaleOnFocus,
      2
    );

    setStyleProperty(
      "--_border-clip-width",
      `${labelWidthOnFocus}px`,
      containerElement
    );
  }, []);

  return (
    <section
      className={`contact-page__input-label-container ${
        !isEmpty && "contact-page__input-label-container--empty-input"
      }`}
      ref={inputLabelContainerRef}
    >
      {/* 
           We return either a textarea or an input depending on this boolean prop
      */}
      {isTextArea ? (
        <textarea
          required
          className={`contact-page__text-area`}
          id={`${name}-${randomId}`}
          name={name}
          ref={reference}
          placeholder={placeholder || ""}
          defaultValue={inputDefaultValue}
          onInput={(e) => {
            const textarea = e.currentTarget as HTMLTextAreaElement;
            const textareaValueEmptyTruthiness: boolean =
              !textarea.value.length;

            setIsEmpty(textareaValueEmptyTruthiness);
          }}
          onChange={(e) => {
            const textareaIsValid: boolean = onChangeCallback?.(e) || false;

            setIsInputValid(textareaIsValid);

            const textareaValueEmptyTruthiness =
              !reference.current?.value.length;

            setIsEmpty(textareaValueEmptyTruthiness);
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
          placeholder={placeholder || ""}
          defaultValue={inputDefaultValue}
          onInput={(e) => {
            const input = e.currentTarget as HTMLInputElement;
            const inputValueEmptyTruthiness: boolean = !input.value.length;

            setIsEmpty(inputValueEmptyTruthiness);
          }}
          onChange={(e) => {
            const inputIsValid: boolean = onChangeCallback?.(e) || false;

            setIsInputValid(inputIsValid);

            const inputValueEmptyTruthiness = !reference.current?.value.length;

            setIsEmpty(inputValueEmptyTruthiness);
          }}
        />
      )}

      <label
        htmlFor={`${name}-${randomId}`}
        className={`contact-page__label`}
        ref={labelRef}
      >
        {labelText}
      </label>
      <p
        className={`contact-page__input-label-message contact-page__input-label-message--error ${
          !isEmpty && !isValid ? "" : "hide"
        }`}
      >
        {errorInputMessage}
        <Icons.RoundExclamation width={16} height={16} fill={"currentColor"} />
      </p>
      <p
        className={`contact-page__input-label-message contact-page__input-label-message--success ${
          !isEmpty && isValid ? "" : "hide"
        }`}
      >
        {validInputMessage}
        <Icons.RoundCheck width={16} height={16} fill={"currentColor"} />
      </p>
    </section>
  );
}
