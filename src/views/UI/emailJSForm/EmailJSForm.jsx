import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { message } from 'antd';
import { useTranslation } from 'react-i18next'
import './emailJSForm.scss';

const EmailJSForm = () => {
  const form = useRef();
  const { t } = useTranslation();
  const [messageApi, contextHolder] = message.useMessage();
  const { VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, VITE_EMAIL_PUBLIC_KEY } = import.meta.env
  const [nameValue, setNameValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
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

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="emailjs-form">
        <div className="emailjs-form__wrap">
          <span className="emailjs-form__wrap--section">
            <input
              type="text"
              id="inputName"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              onInvalid={(e) => e.target.setCustomValidity(`${t("emailJSForm_name_placeholder")} ${t("emailJSForm_emptyMsg")}`)}
              onInput={(e) => e.target.setCustomValidity('')}
              name="user_name"
              className="input-text"
              required
            />
            <label htmlFor="inputName" className="floating-label">{t("emailJSForm_name_placeholder")}</label>
          </span>
          <span className="emailjs-form__wrap--section">
            <input
              type="text"
              id="inputEmail"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              onInvalid={(e) => e.target.setCustomValidity(`${t("emailJSForm_name_placeholder")} ${t("emailJSForm_emptyMsg")}`)}
              onInput={(e) => e.target.setCustomValidity('')}
              name="user_email"
              className="input-text"
              required
            />
            <label htmlFor="inputEmail" className="floating-label">{t("emailJSForm_email_placeholder")}</label>
          </span>
          <span className="emailjs-form__wrap--section section-text-area">
            <textarea
              type="text"
              id="inputMsg"
              value={msgValue}
              onChange={(e) => setMsgValue(e.target.value)}
              onInvalid={(e) => e.target.setCustomValidity(`${t("emailJSForm_name_placeholder")} ${t("emailJSForm_emptyMsg")}`)}
              onInput={(e) => e.target.setCustomValidity('')}
              name="message"
              className="input-text section-input-area"
              rows="5"
              required
            />
            <label htmlFor="inputMsg" className="floating-label">{t("emailJSForm_msg_placeholder")}</label>
          </span>
          <button type="submit" className="emailjs-form__wrap--submit">{t("emailJSForm_submitBtn")}</button>
        </div>
      </form>
      {contextHolder}
    </>
  );
};

export default EmailJSForm;