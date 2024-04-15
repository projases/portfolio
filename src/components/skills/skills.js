// skillsChartComponent.js
import "./skills.css";
import { createSkillsChart } from "../../functions/chart/createChart";
import { skillsData } from "../../data/data";

export function skillsChartComponent() {
  // create container for the skills chart
  const skillsChartContainer = document.createElement("div");
  skillsChartContainer.classList.add("skillsChartContainer");
  // create close button for the skills chart
  const closeButton = document.createElement("img");
  closeButton.setAttribute("src", "/cross.svg");
  closeButton.classList.add("closeButton");
  closeButton.style.cursor = "pointer";
  // create canvas element for the skills chart
  const skillChart = document.createElement("canvas");
  skillChart.setAttribute("id", "skillsChart");
  skillChart.setAttribute("width", "400");
  skillChart.setAttribute("height", "400");
  //append elements
  skillsChartContainer.append(skillChart);
  skillsChartContainer.append(closeButton);
  // await new Promise((resolve) => setTimeout(resolve));
  // create the skills chart
  // try {
  //   await createSkillsChart("skillsChart", skillsData);
  //   // document.getElementById("skillsChart").style.width = "400px";
  // } catch (error) {
  //   console.error("Error creating chart ", error);
  // }
  createSkillsChart("skillsChart", skillsData);
  closeButton.addEventListener("click", () => {
    skillsChartContainer.style.display = "none";
    const aboutSection = document.querySelector(".about");
    aboutSection.classList.remove("blurred");
  });

  return skillsChartContainer;
}
