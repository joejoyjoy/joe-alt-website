import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import BorderComposition from '@/views/UI/borderComposition'
import './emailJSForm.scss';

const EmailJSForm = () => {
  const form = useRef();
  const { VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, VITE_EMAIL_PUBLIC_KEY } = import.meta.env
  const [nameInput, setNameInput] = useState(false)
  const [emailInput, setEmailInput] = useState(false)

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
          {nameInput && <BorderComposition />}
          <input type="text" onFocus={() => setNameInput(true)} onBlur={(e) => e.target.value === "" && setNameInput(false)} name="user_name" className="input-text" required />
          <span className="floating-label">Enter your name</span>
        </span>
        <span className="emailjs-form__wrap--section">
          {emailInput && <BorderComposition />}
          <input type="email" onFocus={() => setEmailInput(true)} onBlur={() => setEmailInput(false)} name="user_email" className="input-text" required />
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