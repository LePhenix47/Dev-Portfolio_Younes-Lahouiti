//React
import { MutableRefObject, useRef } from "react";

//Next

//Variables
import { contactMethods } from "@utilities/variables/common/contact/contact-methods.variables";

//Components

//Libraries
//EmailJS
//TanStack Query
import { useMutation } from "@tanstack/react-query";
import {
  BufferLoader,
  Button,
  CanvasComponent,
  MetaData,
} from "@components/shared/shared.components";

import {
  PAGE_METADATA,
  OPEN_GRAPH,
} from "@utilities/variables/shared/index-shared.variables";

import {
  ContactInputLabel,
  ContactMethodCard,
} from "@components/common/contact/contact-page.components";
import Icons from "@components/shared/icons/Icons";
import {
  formatStringCase,
  testRegExp,
} from "@utilities/helpers/string.helpers";
import { getRealStringLength } from "@utilities/helpers/internalization.helpers";

/**
 * Contact page: `/contact`
 *
 * This component represents the Contact page of the website. It allows users to get in touch with the developer through various contact methods and a form. The form includes fields for first name, last name, email, and a project message. The form input values are validated to ensure they meet specific criteria. Users can submit the form to send an email with their project details to the developer using the EmailJS API.
 *
 * @returns {JSX.Element} The JSX element representing the Contact page.
 */
export default function Contact(): JSX.Element {
  const { contact } = PAGE_METADATA;
  const contactPageSectionRef = useRef<HTMLElement>(null);
  // References to get the value of their inputs

  /**
   * Reference for the **first name**
   */
  const firstNameRef = useRef<any>(null);

  /**
   * Reference for the **first name**
   */
  const lastNameRef = useRef<any>(null);

  /**
   * Reference for the **first name**

   */
  const emailRef = useRef<any>(null);

  /**
   * Reference for the **first name**

   */
  const textAreaRef = useRef<any>(null);

  /*

  # To validate the form

  The first name & last name inputs:
  - Must be strings not containing numbers, RegExp: /^[^0-9]*$/
  - Must be between 2 and 50 characters long: char.length >= 2 && char.length <= 50 
  - Can include dashes and apostrophes (like Da'Shawn or Marie-Antoinette), RegExp: /^[a-zA-Z'-]+(?:\s?[a-zA-Z'-]+)*$/

  The email input:
  - Must be an email under this format: nickname@domain.TLD(.subdomain), RegExp:  /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/


  The project text-area:
  - Must be between 50 and 2 000 chars long: char.length >= 50 && char.length <= 2_000 


  # To send the form as an email

  We can use the EmailJS API: https://www.emailjs.com/ to send the email
  */

  /**
   * Function that sends the form with their field values.
   *
   * This function is triggered when the user submits the form. It validates the input fields and sends an email with the project details if all fields are valid.
   *
   * @returns {void}
   */
  function submitForm(): void {
    //We get their values
    const firstName: string = formatStringCase(
      firstNameRef.current.value,
      "titlecase"
    );
    const lastName: string = formatStringCase(
      lastNameRef.current.value,
      "titlecase"
    );
    const email: string = emailRef.current.value;
    const projectIdea: string = textAreaRef.current.value;

    //We verify that each one of them is correct
    const namesInputsAreValid: boolean =
      verifyNames(firstNameRef) && verifyNames(lastNameRef);

    const emailInputIsValid: boolean = verifyEmail(emailRef);

    const projectTextAreaIsValid: boolean = verifyMessage(textAreaRef);

    const formInputsAreValid: boolean =
      namesInputsAreValid && emailInputIsValid && projectTextAreaIsValid;

    //If they are we send the form, otherwise we do nothing
    if (formInputsAreValid) {
      emailMutation.mutate({ firstName, lastName, email, projectIdea });
    }
  }

  /**
   * Sends an email with the provided form values using a Discord webhook
   *
   * @param formValue - The form values containing the first name, last name, email, and project idea.
   * @returns A Promise that resolves to void.
   * @throws Error if the fetch request fails.
   */
  async function sendEmail(formValue: {
    firstName: string;
    lastName: string;
    email: string;
    projectIdea: string;
  }): Promise<void> {
    const { firstName, lastName, email, projectIdea } = formValue;

    const webhookURL = new URL(
      "https://discord.com/api/webhooks/1189973123232182313/gmBkw_mr6Sn_r-nVgb07jTwAII_rxVnEJ_gC4HYHwh0h0oOtw4AdxajQa0P2mOGy5dEF"
    );

    const payload = {
      embeds: [
        {
          title: `Project idea from ${firstName} ${lastName}:`,
          description: projectIdea,
          color: 6448228,
          author: { name: `Email: ${email}` },
        },
      ],
    };

    const response: Response = await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Fetch failed, result: ${response}`);
    }
  }

  /**
   * Mutator that makes the POST API call to resend the form and send an email
   */
  const emailMutation = useMutation({
    mutationFn: (formValues: {
      firstName: string;
      lastName: string;
      email: string;
      projectIdea: string;
    }) => {
      return sendEmail(formValues);
    },
    onMutate: () => {
      console.log(
        "%cAttempting to send email",
        "background: darkblue; font-size: 16px; color: white; padding: 5px"
      );
    },
    onSuccess: (data: any, variables: any) => {
      console.log(
        "%cAttempt SUCCEEDED!",
        "background: darkgreen; font-size: 16px; color: white; padding: 5px",
        data,
        variables
      );
    },
    onError: (error: any, variables: any) => {
      console.log(
        "%cAttempt FAILED",
        "background: darkred; font-size: 16px; color: white; padding: 5px",
        error,
        variables
      );
    },
  });

  /**
   * Verifies if a given string is a valid name.
   *
   * This function checks whether the given string meets the following criteria:
   * 1. Must not include numbers
   * 2. Can include characters with accents, dashes, and apostrophes (e.g., Da'Shawn, François, or Marie-Antoinette)
   * 3. The length of the name is between 2 and 50 characters.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement> | MutableRefObject<any>} reference - The event object from the input element that triggered the function or a mutable reference to the input element.
   * @returns {boolean} A boolean value indicating whether the given string is a valid name.
   */
  function verifyNames(
    reference: React.ChangeEvent<HTMLTextAreaElement> | MutableRefObject<any>
  ): boolean {
    //We get the value of the input
    let valueOfInput: string =
      (reference as React.ChangeEvent<HTMLTextAreaElement>).target?.value ??
      (reference as MutableRefObject<any>).current?.value;
    valueOfInput = valueOfInput.trim();

    //String must not include numbers
    const stringWithoutNumbersREGEX: RegExp = /^[^0-9]*$/;

    const valueDoesNotContainNumbers: boolean = testRegExp(
      valueOfInput,
      stringWithoutNumbersREGEX
    );

    // Can include characters with accents, dashes and apostrophes (for instance: Da'Shawn, François or Marie-Antoinette)
    const validNameCharsREGEX: RegExp = /^[a-zA-ZÀ-ÿ]+(?:['-][a-zA-ZÀ-ÿ]+)*$/;

    const valueContainsValidCharacters: boolean = testRegExp(
      valueOfInput,
      validNameCharsREGEX
    );

    const realStringLength: number = getRealStringLength(valueOfInput);

    //We verify that the length of the name is between 2 and 50
    const nameIsAtRightLength: boolean =
      realStringLength >= 2 && realStringLength <= 50;

    return (
      valueDoesNotContainNumbers &&
      valueContainsValidCharacters &&
      nameIsAtRightLength
    );
  }

  /**
   * Verifies if a given string is a valid email.
   *
   * This function checks whether the given string is a valid email address based on the following criteria:
   * 1. The email should be in the format "nickname@domain.domain" and can also contain a subdomain.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement> | MutableRefObject<any>} reference - The event object from the input element that triggered the function or a mutable reference to the input element.
   * @returns {boolean} A boolean value indicating whether the given string is a valid email address.
   */
  function verifyEmail(
    reference: React.ChangeEvent<HTMLTextAreaElement> | MutableRefObject<any>
  ): boolean {
    //We get the value of the input
    let valueOfInput: string =
      (reference as React.ChangeEvent<HTMLTextAreaElement>).target?.value ??
      (reference as MutableRefObject<any>).current?.value;
    valueOfInput = valueOfInput.trim();

    //We verify that the email respect this format: nickname@domain.domain (can also contain a subdomain)
    const emailREGEX: RegExp =
      /^(?!\.)(?!.*\.\.)[a-zA-Z0-9.-]+@[a-zA-Z0-9]+(\.[a-zA-Z]{2,8})+(\.[a-zA-Z]{2,8})?$/;
    const respectsEmailFormat: boolean = testRegExp(valueOfInput, emailREGEX);

    return respectsEmailFormat;
  }

  /**
   * Verifies if the project message has a proper length.
   *
   * This function checks whether the project message is between 50 and 2,000 characters long.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement> | MutableRefObject<any>} reference - The event object from the input element that triggered the function or a mutable reference to the input element.
   * @returns {boolean} A boolean value indicating whether the project message has a proper length.
   */
  function verifyMessage(
    reference: React.ChangeEvent<HTMLTextAreaElement> | MutableRefObject<any>
  ): boolean {
    //We get the value of the input
    let valueOfInput: string =
      (reference as React.ChangeEvent<HTMLTextAreaElement>).target?.value ??
      (reference as MutableRefObject<any>).current?.value;
    valueOfInput = valueOfInput.trim();

    const realStringLength: number = getRealStringLength(valueOfInput);

    const messageIsAtRightLength: boolean =
      realStringLength >= 50 && realStringLength <= 2_000;

    return messageIsAtRightLength;
  }

  return (
    <>
      <MetaData
        title={contact.title}
        description={contact.description}
        pageUri={contact.pageUri}
        needsIndexation={contact.needsIndexation}
        allowRobotCrawlers={contact.allowRobotCrawlers}
        openGraph={OPEN_GRAPH}
      />
      <section className="contact-page" ref={contactPageSectionRef}>
        <CanvasComponent parentElement={contactPageSectionRef} />

        <h1 className="contact-page__title">Contact me</h1>
        <h2 className="contact-page__subtitle">Get in touch</h2>
        <section className="contact-page__main-container">
          <div className="contact-page__contact-cards-container">
            <h3 className="contact-page__contact-cards-container-title">
              Let&apos;s chat!
            </h3>

            {/*     Beginning         */}
            {contactMethods.map((method) => {
              const { icon, platform, link, user } = method;

              return (
                <ContactMethodCard
                  key={`${user}-${platform}`}
                  icon={icon}
                  link={link}
                  platform={platform}
                  user={user}
                />
              );
            })}

            {/*      End        */}
          </div>
          <form
            action="#"
            className="contact-page__form"
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
          >
            <fieldset className="contact-page__fieldset">
              <legend className="contact-page__legend">
                Write me your project!
              </legend>
              {/*  Could create a for loop here*/}
              <ContactInputLabel
                name="first-name"
                labelText="First name"
                reference={firstNameRef}
                inputType="text"
                onChangeCallback={verifyNames}
                validInputMessage={"Valid"}
                errorInputMessage={
                  "First name is incorrect, must be a string between 2 and 50 chars long"
                }
              />

              <ContactInputLabel
                name="last-name"
                labelText="Last name"
                reference={lastNameRef}
                inputType="text"
                onChangeCallback={verifyNames}
                validInputMessage={"Valid"}
                errorInputMessage={
                  "Last name is incorrect, must be a string between 2 and 50 chars long"
                }
              />

              <ContactInputLabel
                name="email"
                labelText="Email"
                reference={emailRef}
                inputType="email"
                onChangeCallback={verifyEmail}
                validInputMessage={"Valid"}
                errorInputMessage={
                  "Email does not respect this format: nickname@extension.domain"
                }
              />

              <ContactInputLabel
                name="project"
                labelText="Project"
                reference={textAreaRef}
                isTextArea
                onChangeCallback={verifyMessage}
                validInputMessage={"Valid"}
                errorInputMessage={
                  "The message must be between 50 and 2,000 characters long"
                }
              />
            </fieldset>
            <Button
              type="submit"
              arrayOfClasses={"link-button contact-page__send-form-button".split(
                /\s/g
              )}
            >
              Hit me up!
              <Icons.PaperPlane width={24} height={24} fill={"currentColor"} />
            </Button>

            {emailMutation.isIdle && null}

            {emailMutation.isLoading && <BufferLoader width={75} />}

            {emailMutation.isSuccess && (
              <p className="contact-page__send-form-feedback contact-page__send-form-feedback--positive">
                Email sent successfully!
              </p>
            )}

            {emailMutation.isError && (
              <p className="contact-page__send-form-feedback contact-page__send-form-feedback--negative">
                An unexpected error occured: {emailMutation.error.message}
              </p>
            )}
          </form>
        </section>
      </section>
    </>
  );
}
