const srceenDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let calculation = [];
let accumulativeCalculation;

function calculate(button) {
  const value = button.textContent;
  if (value === "CLEAR") {
    calculation = [];
    srceenDisplay.textContent = ".";
  } else if (value === "=") {
    srceenDisplay.textContent = eval(accumulativeCalculation);
  } else {
    calculation.push(value);
    accumulativeCalculation = calculation.join("");
    srceenDisplay.textContent = accumulativeCalculation;
    console.log(calculation);
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
