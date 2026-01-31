/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3idv1de",
        "template_3n827oe",
        form.current,
        "DlFiZc8sEupnsToCv"
      )
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully! 📩", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send message. Please try again!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <ToastContainer />

      <h2 className="section__title">Get In Touch 📩</h2>
      <span className="section__subtitle">
        Ready to start your project? <br />
        Contact me for a free consultation.
      </span>

      <div className="contact__container container grid">
        {/* ===== Talk To Me Section ===== */}
        <div className="contact__content">
          <h3 className="contact__title">
            Talk To Me <i className="uil uil-calling"></i>
          </h3>

          <div className="contact__info">
            {/* Email Card */}
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                parimalmaity852@gmail.com
              </span>

              <a
                href="mailto:parimalmaity852@gmail.com"
                className="contact__button"
              >
                Write Me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">(+91) 7407806094</span>

              <a
                href="https://api.whatsapp.com/send?phone=917407806094&text=Hello Parimal, I would like to connect with you!"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                Write Me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        {/* ===== Contact Form ===== */}
        <div className="contact__content">
          <h3 className="contact__title">
            Write Me Your Message <i className="uil uil-message"></i>
          </h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            {/* Name */}
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="user_name"
                className="contact__form-input"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="user_email"
                className="contact__form-input"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message */}
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button className="button button--flex">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
