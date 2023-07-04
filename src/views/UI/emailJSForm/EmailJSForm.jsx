import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { message } from 'antd';
import { useTranslation } from 'react-i18next'
import BorderComposition from '@/views/UI/borderComposition'
import './emailJSForm.scss';

const EmailJSForm = () => {
  const form = useRef();
  const { t } = useTranslation();
  const [messageApi, contextHolder] = message.useMessage();
  const { VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, VITE_EMAIL_PUBLIC_KEY } = import.meta.env
  const [nameInput, setNameInput] = useState(false)
  const [nameValue, setNameValue] = useState("")
  const [emailInput, setEmailInput] = useState(false)
  const [emailValue, setEmailValue] = useState("")
  const [msgInput, setMsgInput] = useState(false)
  const [msgValue, setMsgValue] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();

    messageApi.open({
      type: 'loading',
      content: `${t("antDesignMessage_content")}`,
      duration: 0,
    });

    emailjs.sendForm(VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, form.current, VITE_EMAIL_PUBLIC_KEY)
      .then(() => {
        messageApi.destroy()
        setNameValue("")
        setEmailValue("")
        setMsgValue("")
        Swal.fire({
          title: `${t("sweetAlert_success_title")}`,
          icon: 'success',
          confirmButtonText: `${t("sweetAlert_confirmBtn")}`,
          customClass: {
            popup: 'swal-custom-background',
            title: 'swal-custom-title',
            confirmButton: 'swal-custom-button',
          }
        })
      }, (error) => {
        messageApi.destroy()
        Swal.fire({
          title: `${t("sweetAlert_error_title")}`,
          text: `Error: ${error}`,
          icon: 'error',
          confirmButtonText: `${t("sweetAlert_confirmBtn")}`,
          customClass: {
            popup: 'swal-custom-background',
            title: 'swal-custom-title',
            text: 'swal-custom-title',
            confirmButton: 'swal-custom-button',
          }
        })
      });
  };

  useEffect(() => {
    (function handleFullWidthSizing() {
      let scrollbarWidth = window.innerWidth - document.body.clientWidth

      if (scrollbarWidth > 25) {
        scrollbarWidth = 0;
      }

      document.querySelector('.emailjs-form__shape').style.maxWidth = `calc(100vw - ${scrollbarWidth}px)`
    })()
  }, [])

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="emailjs-form">
        <h3 className="emailjs-form__title">{t("emailJSForm_title")}</h3>
        <div className="emailjs-form__wrap">
          <span className="emailjs-form__wrap--section">
            <BorderComposition style={!nameInput} />
            <input
              type="text"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              onFocus={() => setNameInput(true)}
              onBlur={() => setNameInput(false)}
              onInvalid={(e) => e.target.setCustomValidity(`${t("emailJSForm_name_placeholder")} ${t("emailJSForm_emptyMsg")}`)}
              onInput={(e) => e.target.setCustomValidity('')}
              name="user_name"
              className="input-text"
              required
            />
            <span className="floating-label">{t("emailJSForm_name_placeholder")}</span>
          </span>
          <span className="emailjs-form__wrap--section">
            <BorderComposition style={!emailInput} />
            <input
              type="text"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              onFocus={() => setEmailInput(true)}
              onBlur={() => setEmailInput(false)}
              onInvalid={(e) => e.target.setCustomValidity(`${t("emailJSForm_name_placeholder")} ${t("emailJSForm_emptyMsg")}`)}
              onInput={(e) => e.target.setCustomValidity('')}
              name="user_email"
              className="input-text"
              required
            />
            <span className="floating-label">{t("emailJSForm_email_placeholder")}</span>
          </span>
          <span className="emailjs-form__wrap--section section-text-area">
            <BorderComposition style={!msgInput} type={"textarea"} />
            <textarea
              type="text"
              value={msgValue}
              onChange={(e) => setMsgValue(e.target.value)}
              onFocus={() => setMsgInput(true)}
              onBlur={() => setMsgInput(false)}
              onInvalid={(e) => e.target.setCustomValidity(`${t("emailJSForm_name_placeholder")} ${t("emailJSForm_emptyMsg")}`)}
              onInput={(e) => e.target.setCustomValidity('')}
              name="message"
              className="input-text section-input-area"
              rows="5"
              required
            />
            <span className="floating-label">{t("emailJSForm_msg_placeholder")}</span>
          </span>
          <button type="submit" className="emailjs-form__wrap--submit">{t("emailJSForm_submitBtn")}</button>
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