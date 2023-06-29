function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  let result = document.getElementById("display").value;
  let calculatedResult = eval(result);
  document.getElementById("display").value = calculatedResult;
}
