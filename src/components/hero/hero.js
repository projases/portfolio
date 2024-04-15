import "./hero.css";
import { title } from "./title/title";
import { subtitle } from "./subtitle/subtitle";
import { normalButton } from "./button/button";

export function hero(
  heroClass,
  titleClass,
  subtitleClass,
  pictureSrc,
  buttonText,
) {
  const hero = `
    <section class=${heroClass}>
      ${title("1", titleClass, "Pablo Rojas / Developer")}
      <img src=${pictureSrc} alt="hero picture" class="myself">
      ${subtitle(subtitleClass)}
      ${normalButton(buttonText)}
    </section>
  `;

  return hero;
}
