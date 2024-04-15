import "./contact.css";
import { mediumButton } from "../hero/button/button";
import { contactInfo } from "../../data/data";

export function contact() {
  const buttonsText = contactInfo.buttonTexts
    .map((text) => mediumButton(text))
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
