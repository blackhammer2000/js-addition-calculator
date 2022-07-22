const button = document.querySelector(".evaluate");

button.addEventListener("click", () => {
  solve();
});

function solve() {
  const num1 = parseInt(document.querySelector(".num1").value);
  const num2 = parseInt(document.querySelector(".num2").value);
  const operationChoice = document.querySelector(".operation").value;
  const solution = operation(num1, num2, operationChoice);
  const resultDisplay = document.querySelector(".result span");

  if (solution.split("").includes(".")) {
    resultDisplay.innerText = solution.toFixed(2);
  } else {
    resultDisplay.innerText = solution;
  }
}

function operation(num1, num2, operand) {
  let solution = 0;
  switch (operand) {
    case "+":
      solution = num1 + num2;
      break;
    case "*":
      solution = num1 * num2;
      break;
    case "/":
      solution = num1 / num2;
      break;
    case "-":
      solution = num1 - num2;
      break;
    default:
      resultDisplay.textContent = "Invalid Operand.";
      return;
  }

  return solution;
}
