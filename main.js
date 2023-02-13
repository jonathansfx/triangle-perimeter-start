// Triangle Perimeter Assignment Start Code
// button event listener
let btn = document.getElementById("button");

btn.addEventListener("click", btnClicked);
function btnClicked() {
  // INPUT
  let xA = +document.getElementById("xA-input").value;
  let yA = +document.getElementById("yA-input").value;
  let xB = +document.getElementById("xB-input").value;
  let yB = +document.getElementById("yB-input").value;
  let xC = +document.getElementById("xC-input").value;
  let yC = +document.getElementById("yC-input").value;

  // PROCESS
  let AB = dist(xA, yA, xB, yB);
  let AC = dist(xA, yA, xC, yC);
  let BC = dist(xB, yB, xC, yC);

  // OUTPUT
  document.getElementById("abOutput").innerHTML = AB;
  document.getElementById("acOutput").innerHTML = AC;
  document.getElementById("bcOutput").innerHTML = BC;
  document.getElementById("pOutput").innerHTML = AB + AC + BC;
}

function dist(x1, y1, x2, y2) {
  let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return distance;
}
