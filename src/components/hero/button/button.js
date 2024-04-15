import "./button.css";

export function normalButton(name, buttonClass = "buttonCTO") {
  return createButton(name, 200, 50, buttonClass);
}
export function bigButton(name, buttonClass = "bigButtonCTO") {
  return createButton(name, 400, 100, buttonClass);
}

export function mediumButton(name, buttonClass = "mediumButtonCTO") {
  return createButton(name, 300, 75, buttonClass);
}
function createButton(name, width, height, buttonClass) {
  const button = `<button class="${buttonClass}" style="--button-width: ${width}px; --button-height: ${height}px; width: ${width}px; height: ${height}px;">
        ${name}
        <svg width="${width}px" height="${height}px" viewBox="0 0 ${width} ${height}" class="border">
          <polyline points="${width - 1},1 ${width - 1},${height - 1} 1,${height - 1} 1,1 ${width - 1},1" class="bg-line" />
          <polyline points="${width - 1},1 ${width - 1},${height - 1} 1,${height - 1} 1,1 ${width - 1},1" class="hl-line" />
        </svg>
      </button>`;
  return button;
}
