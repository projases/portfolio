import "./navbar.css";
import { scrollToSection } from "../../functions/scroll";

window.scrollToSection = scrollToSection;

export function navbar(navClass) {
  const navbar = `
    <ul class=${navClass}>
    <a href="#" onclick="scrollToSection('.hero')">Home</a>
    <a href="#" onclick="scrollToSection('.about')">About</a>
    <a href="#" onclick="scrollToSection('.projects')">Projects</a>
    </ul>
  `;
  return navbar;
}
