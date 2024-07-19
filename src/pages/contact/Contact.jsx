import React from "react";
import "./contact.css";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import Header from "../../components/Header";

const Contact = () => {
  return (
    <>
      <Header title="Get In touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
        viverra nibh, in malesuada orci. Aliquam in viverra metus, semper
        imperdiet justo.
      </Header>
      <section className="contact">
        <div className="container container__contact">
          <div className="contact__wrapper">
            <a
              href="mailto:support@egator.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="http://www.facebook.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="http://www.whatsapp.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
