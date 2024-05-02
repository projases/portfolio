import "./hero.css";
// import { title } from "./title/title";
// import { subtitle } from "./subtitle/subtitle";
import { createButtonSanti } from "./button/button";
// import { heroMarkUp } from "../data/data";

export function hero(parentElement, { title, imgSrc, subtitle, buttonText }) {
  const hero = `
      <h1>${title}</h1>
      <img src=${imgSrc} alt="hero picture" class="myself">
      <article class = subtitle>
        <p>${subtitle[0]}<span class="slash"> / </span> ${subtitle[1]}</p>
        <p> ${subtitle[2]}<span class="slash"> / </span> ${subtitle[3]}</p>
        <p> ${subtitle[4]}<span class="slash"> / </span> ${subtitle[5]}</p>
      </article>
      ${createButtonSanti(buttonText, "s", "s_buttonCTO")}
  `;
  const heroSection = document.createElement("section");
  heroSection.classList.add("hero");
  heroSection.innerHTML = hero;
  parentElement.appendChild(heroSection);
}
