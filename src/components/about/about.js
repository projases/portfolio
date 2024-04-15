import "./about.css";
import { title } from "../hero/title/title";
import { mediumButton } from "../hero/button/button";

export function about(options = {}) {
  const {
    className = "about",
    titleName = "aboutTitle",
    buttonTexts = ["Download CV", "Contact me", "Projects", "Skills"],
    // buttonClassName = "aboutButton",
  } = options;

  const buttons = buttonTexts.map((text) => mediumButton(text)).join("");
  const about = `
    <section class = ${className}>
      ${title("2", "", titleName)}
      <div class = "aboutButtonContainer">
        ${buttons}
      </div>
      </section>
    `;
  return about;
}
// className = "about", titleName = "aboutTitle", buttonText, button = "aboutButton"