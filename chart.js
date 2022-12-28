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
