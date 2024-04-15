export function scrollToSection(sectionClass) {
  const section = document.querySelector(sectionClass);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
