// https://www.pexels.com/photo/a-computer-on-a-work-desk-8353772/
import "./parallax.css";
import { parallaxMarkUp } from "../../data/data";

export function parallax() {
  const parallax = `<section class="parallaxSection">
    <h2 class="parallaxTitle">${parallaxMarkUp.titleName}</h2>
    </section>`;
  return parallax;
}
  