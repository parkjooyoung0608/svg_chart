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

  let li1 = document.querySelector(".graph_content li:nth-child(1)");
  let li1Left = windowX + li1.getBoundingClientRect().left;
  let li1Right = windowX + li1.getBoundingClientRect().right;

  let li2 = document.querySelector(".graph_content li:nth-child(2)");
  let li2Right = windowX + li2.getBoundingClientRect().right;

  let li3 = document.querySelector(".graph_content li:nth-child(3)");
  let li3Right = windowX + li3.getBoundingClientRect().right;

  let li4 = document.querySelector(".graph_content li:nth-child(4)");
  let li4Right = windowX + li4.getBoundingClientRect().right;

  let li5 = document.querySelector(".graph_content li:nth-child(5)");
  let li5Right = windowX + li5.getBoundingClientRect().right;

  let li6 = document.querySelector(".graph_content li:nth-child(6)");
  let li6Right = windowX + li6.getBoundingClientRect().right;

  let li7 = document.querySelector(".graph_content li:nth-child(7)");
  let li7Right = windowX + li7.getBoundingClientRect().right;

  let li8 = document.querySelector(".graph_content li:nth-child(8)");
  let li8Right = windowX + li8.getBoundingClientRect().right;

  let li9 = document.querySelector(".graph_content li:nth-child(9)");

  if (li1Left < mouseX && mouseX < li1Right && graphTopBottomArea) {
    console.log("1");
    li2.classList.add("hover");
  } else {
    li2.classList.remove("hover");
  }

  if (li1Right < mouseX && mouseX < li2Right && graphTopBottomArea) {
    console.log("2");
    li3.classList.add("hover");
  } else {
    li3.classList.remove("hover");
  }

  if (li2Right < mouseX && mouseX < li3Right && graphTopBottomArea) {
    console.log("3");
    li4.classList.add("hover");
  } else {
    li4.classList.remove("hover");
  }

  if (li3Right < mouseX && mouseX < li4Right && graphTopBottomArea) {
    console.log("4");
    li5.classList.add("hover");
  } else {
    li5.classList.remove("hover");
  }
  if (li4Right < mouseX && mouseX < li5Right && graphTopBottomArea) {
    console.log("4");
    li6.classList.add("hover");
  } else {
    li6.classList.remove("hover");
  }
  if (li5Right < mouseX && mouseX < li6Right && graphTopBottomArea) {
    console.log("5");
    li7.classList.add("hover");
  } else {
    li7.classList.remove("hover");
  }
  if (li6Right < mouseX && mouseX < li7Right && graphTopBottomArea) {
    console.log("6");
    li8.classList.add("hover");
  } else {
    li8.classList.remove("hover");
  }
  if (li7Right < mouseX && mouseX < li8Right && graphTopBottomArea) {
    console.log("7");
    li9.classList.add("hover");
  } else {
    li9.classList.remove("hover");
  }
});
