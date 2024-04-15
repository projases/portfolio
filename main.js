import "./style.css";
import { navbar } from "./src/components/navbar/navbar";
import { hero } from "./src/components/hero/hero";
import { about } from "./src/components/about/about";
import { skillsChartComponent } from "./src/components/skills/skills";
import { aboutMarkUp } from "./src/data/data";
import { projects } from "./src/components/projectsSection/projects";
import { parallax } from "./src/components/parallax/parallax";
import { contact } from "./src/components/contact/contact";
import { footer } from "./src/components/footer/footer";

const app = document.querySelector("#app");
const navi = document.createElement("div");
navi.innerHTML = navbar("navbar");
navi.classList.add("header");
document.body.append(navi);
const skillsChartContainer = skillsChartComponent();

const heroMarkUp = hero(
  "hero",
  "title",
  "subtitle",
  "/portfolio.jpeg",
  "My Projects",
);

app.insertAdjacentHTML("beforeend", heroMarkUp);
app.insertAdjacentHTML("beforeend", about(aboutMarkUp));
app.append(skillsChartContainer);
const aboutSection = document.querySelector(".about");
const skillsButtonContainer = document.querySelector(".aboutButtonContainer");
const specificButton = skillsButtonContainer.querySelector(
  "button:nth-child(4)",
);
// const skill = document.querySelector(".aboutButtonContainer");
specificButton.addEventListener("click", () => {
  // alert("Skills button clicked!");
  aboutSection.classList.add("blurred");
  skillsChartContainer.style.display = "flex";
});

projects()
  .then((projectsHTML) => {
    app.insertAdjacentHTML("beforeend", projectsHTML);
    const parallaxMarkUp = parallax();
    app.insertAdjacentHTML("beforeend", parallaxMarkUp);
    app.insertAdjacentHTML("beforeend", contact());
    app.insertAdjacentHTML("beforeend", footer());
  })
  .catch((error) => {
    console.error("Error fetching projects:", error);
  });

// const parallaxMarkUp = parallax();
// app.insertAdjacentHTML("beforeend", parallaxMarkUp);
