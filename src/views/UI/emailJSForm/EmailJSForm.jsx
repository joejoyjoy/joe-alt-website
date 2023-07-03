import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import BorderComposition from '@/views/UI/borderComposition'
import { message } from 'antd';
import './emailJSForm.scss';

const EmailJSForm = () => {
  const form = useRef();
  const [messageApi, contextHolder] = message.useMessage();
  const { VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, VITE_EMAIL_PUBLIC_KEY } = import.meta.env
  const [nameInput, setNameInput] = useState("none")
  const [nameValue, setNameValue] = useState("")
  const [emailInput, setEmailInput] = useState("none")
  const [emailValue, setEmailValue] = useState("")
  const [msgInput, setMsgInput] = useState("none")
  const [msgValue, setMsgValue] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();

    messageApi.open({
      type: 'loading',
      content: 'Sending your message..',
      duration: 0,
    });

    emailjs.sendForm(VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, form.current, VITE_EMAIL_PUBLIC_KEY)
      .then(() => {
        messageApi.destroy()
        setNameValue("")
        setEmailValue("")
        setMsgValue("")
        Swal.fire({
          title: 'Successfully sent!',
          icon: 'success',
          confirmButtonText: 'Close',
          customClass: {
            popup: 'swal-custom-background',
            title: 'swal-custom-title',
            confirmButton: 'swal-custom-button',
          }
        })
      }, (error) => {
        messageApi.destroy()
        Swal.fire({
          title: 'Error occurred!',
          text: `Error: ${error}`,
          icon: 'error',
          confirmButtonText: 'Close',
          customClass: {
            popup: 'swal-custom-background',
            title: 'swal-custom-title',
            text: 'swal-custom-title',
            confirmButton: 'swal-custom-button',
          }
        })
      });
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="emailjs-form">
        <h3 className="emailjs-form__title">Send me a message</h3>
        <div className="emailjs-form__wrap">
          <span className="emailjs-form__wrap--section">
            {nameInput !== "none" && <BorderComposition style={nameInput === "value"} />}
            <input
              type="text"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              onFocus={() => setNameInput("focus")}
              onBlur={(e) =>
                e.target.value === "" ?
                  setNameInput("none") :
                  setNameInput("value")
              }
              onInvalid={(e) => e.target.setCustomValidity('Enter your name here')}
              onInput={(e) => e.target.setCustomValidity('')}
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
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              onFocus={() => setEmailInput("focus")}
              onBlur={(e) =>
                e.target.value === "" ?
                  setEmailInput("none") :
                  setEmailInput("value")
              }
              onInvalid={(e) => e.target.setCustomValidity('Enter your email here')}
              onInput={(e) => e.target.setCustomValidity('')}
              name="user_email"
              className="input-text"
              required
            />
            <span className="floating-label">Enter your email</span>
          </span>
          <span className="emailjs-form__wrap--section section-text-area">
            {msgInput !== "none" && <BorderComposition style={msgInput === "value"} type={"textarea"} />}
            <textarea
              type="text"
              value={msgValue}
              onChange={(e) => setMsgValue(e.target.value)}
              onFocus={() => setMsgInput("focus")}
              onBlur={(e) =>
                e.target.value === "" ?
                  setMsgInput("none") :
                  setMsgInput("value")
              }
              onInvalid={(e) => e.target.setCustomValidity('Enter your message here')}
              onInput={(e) => e.target.setCustomValidity('')}
              name="message"
              className="input-text section-input-area"
              rows="5"
              required
            />
            <span className="floating-label">Write your message</span>
          </span>
          <button type="submit" className="emailjs-form__wrap--submit">Submit</button>
        </div>
        <section className="emailjs-form__shape">
          <div className="emailjs-form__shape--sewers"></div>
        </section>
      </form>
      {contextHolder}
    </>
  );
};

export default EmailJSForm;