import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import BorderComposition from '@/views/UI/borderComposition'
import './emailJSForm.scss';

const EmailJSForm = () => {
  const form = useRef();
  const { VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, VITE_EMAIL_PUBLIC_KEY } = import.meta.env
  const [nameInput, setNameInput] = useState("none")
  const [emailInput, setEmailInput] = useState("none")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, form.current, VITE_EMAIL_PUBLIC_KEY)
      .then((result) => {
        // show the user a success message
        console.log(result);
      }, (error) => {
        // show the user an error
        console.log(error);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="emailjs-form">
      <h3 className="emailjs-form__title">Send me a Message</h3>
      <div className="emailjs-form__wrap">
        <span className="emailjs-form__wrap--section">
          {nameInput !== "none" && <BorderComposition style={nameInput === "value"} />}
          <input
            type="text"
            onFocus={() => setNameInput("focus")}
            onBlur={(e) =>
              e.target.value === "" ?
                setNameInput("none") :
                setNameInput("value")
            }
            name="user_name"
            className="input-text"
            required
          />
          <span className="floating-label">Enter your name</span>
        </span>
        <span className="emailjs-form__wrap--section">
          {emailInput !== "none" && <BorderComposition style={emailInput === "value"} />}
          <input
            type="text"
            onFocus={() => setEmailInput("focus")}
            onBlur={(e) =>
              e.target.value === "" ?
                setEmailInput("none") :
                setEmailInput("value")
            }
            name="user_email"
            className="input-text"
            required
          />
          <span className="floating-label">Enter your email</span>
        </span>
        <span className="emailjs-form__wrap--section">
          <textarea name="message" className="input-text" required />
          <span className="floating-label">Write your message</span>
        </span>
      </div>
      <input type="submit" value="Submit" className="emailjs-form__submit" />
    </form>
  );
};

export default EmailJSForm;