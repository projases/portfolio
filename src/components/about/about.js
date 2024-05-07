import "./about.css";
// import { title } from "../hero/title/title";
import { aboutMarkUp } from "../../data/data";
import { createButtonSanti} from "../hero/button/button";

export function about({
    className = "about",
    titleName = "aboutTitle",
    buttonTexts = ["Download CV", "Contact me", "Projects", "Skills"],
}){

  const buttons = buttonTexts.map((text) => createButtonSanti(text, "m", "m_buttonCTO")).join("");
  const about = `
    <section class = ${className}>
      <h2>${titleName}</h2>
      <div class = "aboutButtonContainer">
        ${buttons}
      </div>
      </section>
    `;
  return about;
}
// className = "about", titleName = "aboutTitle", buttonText, button = "aboutButton"
