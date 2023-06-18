import { useState } from "react";
import "./contact.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs
      .sendForm(
        "service_naqlabp",
        "template_0jb0ubr",
        form.current,
        "TjZZ70u5d47mMXZGs"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("email successfully sent");
        },
        (error) => {
          console.log(error.text);
          alert("email sent failed");
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" name="user_email" placeholder="Email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
