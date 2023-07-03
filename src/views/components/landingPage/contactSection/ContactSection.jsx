import EmailJSForm from "@/views/UI/emailJSForm";
import './contactSection.scss'

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-section__container">
        <h3 className="contact-section__container--header">04. What's Next?</h3>
        <h2 className="contact-section__container--title">Get In Touch</h2>
        <p className="contact-section__container--text">
          Want to know more about me? Feel free to leave a message, I'm always open to know new people and opportunities.
        </p>
      </div>
      <EmailJSForm />
    </section>
  );
};

export default ContactSection;