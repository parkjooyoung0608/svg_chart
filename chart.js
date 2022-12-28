const CHART_DATA_Y = [80, 75, 62, 85, 55, 90, 78, 20, 74, 66];
const CHART_DATA_X = [0, 57, 114, 171, 228, 285, 342, 399, 456, 513];
const chartPointAll = document.querySelectorAll(".graph_point");

let chartData = "";

chartPointAll.forEach((chartPoint, i) => {
  chartPoint.style.bottom = `${CHART_DATA_Y[i]}%`;
  chartPoint
    .closest("li")
    .querySelector(".graph_des > .graph_des_content > strong").innerText =
    CHART_DATA_Y[i];
  chartData += `${CHART_DATA_X[i]},${CHART_DATA_Y[i] * 2} `;
});

document.querySelector("svg polyline").setAttribute("points", chartData);

const graphDesPosition = document.querySelectorAll(".graph_des");
graphDesPosition.forEach((item, i) => {
  item.style.bottom = `${CHART_DATA_Y[i]}%`;
});

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const windowX = window.pageXOffset;
  const windowY = window.pageYOffset;

  const graph = document.querySelector(".graph_background");
  const graphTop = windowY + graph.getBoundingClientRect().top;
  const graphBottom = windowY + graph.getBoundingClientRect().bottom;
  const graphTopBottomArea = mouseY > graphTop && mouseY < graphBottom;

  const graphContentAll = document.querySelectorAll(".graph_content > li");
  for (let i = 0; i < graphContentAll.length; i++) {
    let li = document.querySelector(`.graph_content li:nth-child(${i + 1})`);

    if (
      i === 1 &&
      7 +
        windowX +
        document
          .querySelector(".graph_content li:nth-child(1)")
          .getBoundingClientRect().left <
        mouseX &&
      windowX + mouseX <
        document
          .querySelector(".graph_content li:nth-child(1)")
          .getBoundingClientRect().right &&
      graphTopBottomArea
    ) {
      li.classList.add("hover");
    } else if (
      i > 1 &&
      7 +
        windowX +
        document
          .querySelector(`.graph_content li:nth-child(${i - 1})`)
          .getBoundingClientRect().right <
        mouseX &&
      mouseX <
        windowX +
          document
            .querySelector(`.graph_content li:nth-child(${i})`)
            .getBoundingClientRect().right &&
      graphTopBottomArea
    ) {
      li.classList.add("hover");
    } else {
      li.classList.remove("hover");
    }
  }
});
