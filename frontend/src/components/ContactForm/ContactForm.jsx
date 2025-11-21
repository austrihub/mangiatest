import React from "react";
import './ContactForm.css';

export default function ContactForm() {
  return (
    <section className="contact-section">
      <h2>Contáctanos</h2>

      <form className="contact-form">
        <input type="text" placeholder="Tu nombre" />
        <input type="email" placeholder="Tu correo" />
        <textarea placeholder="Tu mensaje"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
