import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("hi");
    emailjs.sendForm(
      "service_eqole5e",
      "template_721dftj",
      form.current,
      "haHhV4kDe5zAxMprK"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-container">
          <div className="contact-options">
            <article className="contact-option">
              <MdOutlineMail className="contact-option-icon" />
              <h4>Email</h4>
              <h5>nasirkhan000k@gmail.com</h5>
              <a
                href="mailto:nasirkhan000k@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                Send a message
              </a>
            </article>
            <article className="contact-option">
              <BsWhatsapp className="contact-option-icon" />
              <h4>WhatsApp</h4>
              <h5>+918405842008</h5>
              <a
                href="https://api.whatsapp.com/send?phone+918405842008"
                rel="noreferrer"
                target="_blank"
              >
                Send a message
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={(e) => sendEmail(e)}>
            <input type="text" name="name" placeholder="Your Full Name" />
            <input type="email" name="email" placeholder="Your E-mail" />
            <textarea name="message" rows="7" placeholder="Your Message" />
            <button type="submit" className="btn btn-primary">
              Send Message{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
