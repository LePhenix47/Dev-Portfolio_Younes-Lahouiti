//React
import { useState } from "react";

//Next
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

//

/**
 * Contact page: `/contact`
 */
export default function Contact(): JSX.Element {
  const [isInputActive, setIsInputActive] = useState<boolean>(false);

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
        <meta property="og:image" content="/favicon.ico" />

        <meta
          property="og:url"
          content="www.younes-lahouiti-portfolio.com/contact"
        />

        {/*
         <!--Title--> 
         */}
        <title>Contact page</title>
      </Head>
      <section className="contact-page">
        <h1 className="contact-page__title">Contact me</h1>
        <h2 className="contact-page__subtitle">Get in touch</h2>
        <section className="contact-page__main-container">
          <div className="contact-page__contact-cards-container">
            <h3 className="contact-page__contact-cards-container-title">
              Let&apos;s chat!
            </h3>

            {/*     Beginning         */}
            <div className="contact-page__contact-card card">
              <div className="contact-page__contact-card-icon-container">
                <Image
                  src=""
                  alt=""
                  width={32}
                  height={32}
                  className="contact-page__contact-card-icon"
                />
              </div>
              <div className="contact-page__contact-card-text">
                <h4 className="contact-page__contact-card-platform">Email</h4>
                <p className="contact-page__contact-card-user-name">
                  user@gmail.com
                </p>
                <a href="#" className="contact-page__contact-card-link">
                  Link
                </a>
              </div>
            </div>
            {/*      End        */}
          </div>
          <form
            action="#"
            className="contact-page__form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <fieldset className="contact-page__fieldset">
              <legend className="contact-page__legend">
                Write me your project!
              </legend>

              <section className="contact-page__input-label-container">
                <label htmlFor="first-name" className="contact-page__label">
                  First name
                </label>
                <input
                  type="text"
                  className="contact-page__input"
                  id="first-name"
                />
              </section>

              <section className="contact-page__input-label-container">
                <label htmlFor="last-name" className="contact-page__label">
                  Last name
                </label>
                <input
                  type="text"
                  className="contact-page__input"
                  id="last-name"
                />
              </section>

              <section className="contact-page__input-label-container">
                <label htmlFor="email" className="contact-page__label">
                  Email
                </label>
                <input
                  type="email"
                  className="contact-page__input"
                  id="email"
                />
              </section>

              <section className="contact-page__input-label-container">
                <label
                  htmlFor="project"
                  className="contact-page__label contact-page__label--text-area"
                >
                  Project
                </label>
                <textarea
                  name="project"
                  id="project"
                  className="contact-page__text-area"
                  spellCheck={true}
                ></textarea>
              </section>
            </fieldset>
            <button
              type="submit"
              className="link-button contact-page__send-form-button"
            >
              Hit me up!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </form>
        </section>
      </section>
    </>
  );
}
