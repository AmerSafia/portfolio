import "./contact.css";
import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ozo7rh5",
        "template_ihcwuss",
        form.current,
        "K7lQ4mwNJEzkATbm0"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            e.target.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Amer.safia321@gmail.com</h5>
            <a
              href="mailto:Amer.safia321@gmail.com"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              Send a message{" "}
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Amer Safia</h5>
            <a
              href="https://m.me/amer.safia"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              Send a message{" "}
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+962786830335</h5>
            <a
              href="https://api.whatsapp.com/send?phone=962786830335"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              Send a message{" "}
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="6"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
