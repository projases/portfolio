import "./navbar.css";
import { scrollToSection } from "../../functions/scroll";

window.scrollToSection = scrollToSection;

export function navbar(navClass) {
  const navbar = `
    <ul class=${navClass}>
    <li><a href="#" onclick="scrollToSection('.hero')">Home</a><li/>
    <li><a href="#" onclick="scrollToSection('.about')">About</a><li/>
    <li><a href="#" onclick="scrollToSection('.projects')">Projects</a><li/>
    </ul>
  `;
  return navbar;
}
