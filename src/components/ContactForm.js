import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
init(process.env.ID);

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formMsg = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_mi7we4b",
        "template_jgmyj7o",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          form.current.reset();
          formMsg.innerHTML = `<p class="success"> Votre message est bien envoyé !</p>`;

          setTimeout(() => {
            formMsg.innerHTML = "";
          }, 2500);
        },

        (error) => {
          formMsg.innerHTML = `<p class="error"> Une erreur s'est produite, veuillez vérifier votre remplissage du formulaire.</p>`;
          setTimeout(() => {
            formMsg.innerHTML = "";
          }, 5000);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Contactez-moi</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" id="mess" required />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default ContactForm;
