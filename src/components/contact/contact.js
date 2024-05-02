import "./contact.css";
import { createButtonSanti } from "../hero/button/button";
import { contactInfo } from "../../data/data";

export function contact() {
  const buttonsText = contactInfo.buttonTexts
    .map((text) => createButtonSanti(text, "m", "m_buttonCTO"))
    .join("");
  const contact = `
    <section class="contact">
      <h2 class="contactTitle">${contactInfo.title}</h2>
      <div class="contactButtonContainer">
        ${buttonsText}
      </div>
    </section>
  `;
  return contact;
}
