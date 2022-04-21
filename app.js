/*
document.addEventListener('DOMContentLoaded', () => {



})
*/

var BLOCKS_PER_CHART = 20;

function generateChart(chartContainer) {
  var container = document.createElement("div");
  var blockDiv;  // used in the for loop

  container.className = "container2";
  document.getElementById(chartContainer.replace("#", "")).appendChild(container);

  for(var i = 0; i < BLOCKS_PER_CHART; i++) {
    blockDiv = document.createElement("div");
    blockDiv.className = "block";
    container.append(blockDiv);
  }
}

generateChart("#body");