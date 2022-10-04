import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSent(true);
    setInput({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    // emailjs
    //   .sendForm(
    //     process.env.REACT_APP_EMAILJS_SERVICE_ID,
    //     process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    //     form.current,
    //     process.env.REACT_APP_EMAILJS_USER_ID
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    console.log(isSent);
  };

  let returnMessage = <></>;
  if (isSent) {
    returnMessage = (
      <p className="return-message">
        Thank you for your Message! <br /> I will look at it as soon as I can.
      </p>
    );
  }

  return (
    <div className="contact">
      <h1 className="header-title header-contact">contact</h1>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" value={input.name} placeholder="Name" onChange={handleChange} />
        <input type="email" name="email" value={input.email} placeholder="Email" onChange={handleChange} />
        <input type="text" name="subject" value={input.subject} placeholder="Subject" onChange={handleChange} />
        <textarea name="message" value={input.message} placeholder="Message" onChange={handleChange} ></textarea>
        <button className="submit-button" type="submit">
          Send
        </button>
        {returnMessage}
      </form>
    </div>
  );
}
