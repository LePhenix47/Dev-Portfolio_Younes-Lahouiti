//React
import { MutableRefObject, useRef } from "react";

//Next
import Head from "next/head";

//Variables
import { contactMethods } from "@/react-utils/variables/contact-methods.variables";

//Components

//Libraries
//EmailJS
import { EmailJSResponseStatus, send } from "@emailjs/browser";
//TanStack Query
import { useMutation } from "@tanstack/react-query";
import {
  BufferLoader,
  CanvasComponent,
} from "@/components/shared/shared.components";
import {
  ContactInputLabel,
  ContactMethodCard,
} from "@/components/common/contact/contact-page.components";
import { PaperPlaneIcon } from "@/components/shared/icons/icons-index.components";
import {
  formatStringCase,
  testRegExp,
} from "@/react-utils/functions/helpers/string-helper.functions";
import {
  error,
  log,
} from "@/react-utils/functions/helpers/console-helper.functions";

/**
 * Contact page: `/contact`
 */
export default function Contact(): JSX.Element {
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
   * Function that sends the form with their field values
   */
  function submitForm() {
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

    log({ firstName, lastName, email, projectIdea });

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
   * Function that send the email to `EmailJS`
   */
  async function sendEmail(formValue: any) {
    //Variables to make the call to the API
    const SERVICE_ID = "service_fqz2fbf";
    const TEMPLATE_ID = "template_bxtugu9";
    const PUBLIC_KEY = "tv3PAMq9iM2pMiB62";

    const { firstName, lastName, email, projectIdea } = formValue;

    /**
     * Template parameters under this form:
     *
     *  New message sent through the portfolio form by {{name}} at {{email}}:
     *
     * {{message}}
     *
     * Best wishes,
     * EmailJS team
     */
    const templateParams = {
      name: `${firstName} ${lastName}`,
      email,
      message: projectIdea,
    };

    try {
      const sendEmail: EmailJSResponseStatus = await send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      const badQuery: boolean = sendEmail.status > 299;
      if (badQuery) {
        throw `The email was not sent, status: ${sendEmail.status}`;
      }

      log(
        "%cSUCCESSFULLY sent the email!",
        "background: green; color: white; padding: 5px"
      );
    } catch (apiError) {
      error(apiError);
    }
  }

  /**
   * Mutator that makes the POST API call to resend the form and send an email
   */
  const emailMutation = useMutation({
    mutationFn: (formValues: object) => {
      return sendEmail(formValues);
    },
    onMutate: () => {
      log("Attempting to send email");
    },
    onSuccess: (data: any, variables: any) => {
      log("Attempt SUCCEEDED!", data, variables);
    },
    onError: (error: any, variables: any) => {
      log("Attempt FAILED", error, variables);
    },
  });

  /**
   * Verifies if a given string is a valid name, based on the following criteria:
   * 1. Must not include numbers
   * 2. Can include characters with accents, dashes and apostrophes (for instance: Da'Shawn, François or Marie-Antoinette)
   * 3. The length of the name is between 2 and 50
   *
   * @param event - The event object from the input element that triggered the function.
   * @returns - A boolean value indicating whether the given string is a valid name.
   */
  function verifyNames(
    reference: React.ChangeEvent<HTMLTextAreaElement> | MutableRefObject<any>
  ) {
    //We get the value of the input
    let valueOfInput: string =
      (reference as React.ChangeEvent<HTMLTextAreaElement>).target.value ??
      (reference as MutableRefObject<any>).current.value;
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

    //We verify that the length of the name is between 2 and 50
    const nameIsAtRightLength: boolean =
      valueOfInput.length >= 2 && valueOfInput.length <= 50;

    return (
      valueDoesNotContainNumbers &&
      valueContainsValidCharacters &&
      nameIsAtRightLength
    );
  }

  /**
   * Verifies if a given string is a valid email, based on the following criteria:
   * 1. The email should respect the format of nickname@domain.domain (can also contain a subdomain)
   *
   * @param event - The event object from the input element that triggered the function.
   * @returns  - A boolean value indicating whether the given string is a valid email.
   */
  function verifyEmail(
    reference: React.ChangeEvent<HTMLTextAreaElement> | MutableRefObject<any>
  ) {
    //We get the value of the input
    let valueOfInput: string =
      (reference as React.ChangeEvent<HTMLTextAreaElement>).target.value ??
      (reference as MutableRefObject<any>).current.value;
    valueOfInput = valueOfInput.trim();

    //We verify that the email respect this format: nickname@domain.domain (can also contain a subdomain)
    const emailREGEX: RegExp =
      /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    const respectsEmailFormat: boolean = testRegExp(valueOfInput, emailREGEX);

    return respectsEmailFormat;
  }

  /**
   * Verify if the message has a proper length
   *
   * @param event - The event that triggered the function
   * @returns - Returns true if the message has a proper length, otherwise false
   */
  function verifyMessage(
    reference: React.ChangeEvent<HTMLTextAreaElement> | MutableRefObject<any>
  ) {
    //We get the value of the input
    let valueOfInput: string =
      (reference as React.ChangeEvent<HTMLTextAreaElement>).target.value ??
      (reference as MutableRefObject<any>).current.value;
    valueOfInput = valueOfInput.trim();

    const messageIsAtRightLength: boolean =
      valueOfInput.length >= 50 && valueOfInput.length <= 2_000;

    log({ messageIsAtRightLength });

    return messageIsAtRightLength;
  }

  return (
    <>
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="
          Let's get in touch! I'm always eager to connect with new people and discuss exciting projects. On this page, you'll find different ways to reach out to me, from email to social media. Don't hesitate to drop me a message and let's create something amazing together!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact page" />
        <meta
          property="og:description"
          content="
          Let's get in touch! I'm always eager to connect with new people and discuss exciting projects. On this page, you'll find different ways to reach out to me, from email to social media. Don't hesitate to drop me a message and let's create something amazing together!"
        />
        <meta property="og:image" content="/jpg/profile-pic.jpg" />
        <meta property="og:image:width" content="130" />
        <meta property="og:image:height" content="170" />
        <meta
          property="og:url"
          content="https://younes-portfolio-dev.vercel.app/contact"
        />
        {/*
         <!--Title--> 
         */}
        <title>Contact page</title>
      </Head>
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
            <button
              type="submit"
              className="link-button contact-page__send-form-button"
            >
              Hit me up!
              <PaperPlaneIcon width={24} height={24} fill={"currentColor"} />
            </button>

            {emailMutation.isIdle && null}

            {emailMutation.isLoading && <BufferLoader width={75} />}

            {emailMutation.isSuccess && <p>Email sent successfully!</p>}

            {emailMutation.isError && <p>{emailMutation.error}</p>}
          </form>
        </section>
      </section>
    </>
  );
}
