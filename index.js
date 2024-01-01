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
  // get the area
  const triangeleArea = document.getElementById("triangeleArea");
  const newTraingelArea = 0.5 * triangeleString * triangeleHeightValueString;
  triangeleArea.innerText = newTraingelArea;
});
