document.getElementById("btnTriangle").addEventListener("click", function () {
  // get triangle base
  const triangeleBase = document.getElementById("triangeleBase");
  const triangeleValue = triangeleBase.value;
  const triangeleString = parseFloat(triangeleValue);
  console.log(triangeleString);
  // clear input
  triangeleBase.value = "";

  // get triangle height

  const triangeleHeight = document.getElementById("triangeleHeight");
  const triangeleHeightValue = triangeleHeight.value;
  const triangeleHeightValueString = parseFloat(triangeleHeightValue);
  console.log(triangeleHeightValueString);
  // clear input
  triangeleHeight.value = "";
  if (isNaN(triangeleString) || isNaN(triangeleHeightValueString)) {
    alert("please insert a number");
    return;
  }
  // get the area
  const triangeleArea = document.getElementById("triangeleArea");
  const newTraingelArea = 0.5 * triangeleString * triangeleHeightValueString;
  triangeleArea.innerText = newTraingelArea;

  addToAreaCalculationEntry("triangeleArea", newTraingelArea);
});

function addToAreaCalculationEntry(areaType, are) {
  const calculateArea = document.getElementById("areClculate");
  const count = calculateArea.childElementCount;

  const p = document.createElement("p");
  p.classList.add("my-4");
  p.innerText = ` ${count + 1}. ${areaType}  ${are}  `;

  calculateArea.appendChild(p);
}
