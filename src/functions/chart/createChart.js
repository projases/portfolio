export function createSkillsChart(canvasId, data) {
  return new Promise((resolve, reject) => {
    import("chart.js/auto")
      .then((Chart) => {
        const ctx = document.querySelector("#" + canvasId);
        if (ctx) {
          new Chart.default(ctx, {
            type: "doughnut",
            data: data,
          });
          resolve(); // Resolve the promise once the chart is created
        } else {
          reject("Canvas element with ID '" + canvasId + "' not found.");
        }
      })
      .catch((error) => {
        reject("Error loading Chart.js: " + error);
      });
  });
}
