import React, { useState } from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { AlertComponent } from "../Alert/Alert";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [borderName, setBorderName] = useState("");
  const [borderEmail, setBorderEmail] = useState("");
  const [borderMessage, setBorderMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    if ((name !== "" && email !== "", message !== "")) {
      emailjs.sendForm(
        "service_eqole5e",
        "template_721dftj",
        e.target,
        "haHhV4kDe5zAxMprK"
      );
      showAlert();
      e.target.reset();
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setShow(null);
      }, 2000);
    } else {
      if (name === "") {
        setBorderName("border");
      }
      if (email === "") {
        setBorderEmail("border");
      }
      if (message === "") {
        setBorderMessage("border");
      }
    }
  };
  const [show, setShow] = useState(null);
  const showAlert = () => {
    setShow(true);
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
          <form onSubmit={(e) => sendEmail(e)}>
            <input
              className={`${borderName}`}
              type="text"
              name="name"
              value={name}
              placeholder="Your Full Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={`${borderEmail}`}
              type="email"
              name="email"
              value={email}
              placeholder="Your E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className={`${borderMessage}`}
              name="message"
              rows="7"
              value={message}
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Send Message{" "}
            </button>
          </form>
        </div>
      </div>
      {show !== null ? <AlertComponent /> : ""}
    </section>
  );
};
