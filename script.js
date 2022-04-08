const themeAmount = 3;
const calcBtns = document.querySelectorAll(".calc-btn");
const calcOutput = document.querySelector("#calc-output");
let firstNumEntered = false;
let leftAmount = 0;
let calcVal = 0;
let calcString = "";
let operation;
let firstNum;
let secondNum;
calcOutput.innerText = calcVal;

const calcSlider = document.querySelector(".calc-slider");

calcSlider.addEventListener("click", (e) => {
  const circle = calcSlider.querySelector(".circle");
  const sliderPercent = (1 / (themeAmount - 1)) * 100;
  console.log("sliderPercent :", sliderPercent);
  let currentLeftProperty = circle.style.left;
  if (currentLeftProperty === "100%") {
    circle.style.left = "0%";
    leftAmount = 0;
  } else {
    currentLeftProperty = leftAmount + sliderPercent;
    const newPercent = leftAmount + sliderPercent + "% ";
    circle.style.left = newPercent;
    leftAmount = leftAmount + sliderPercent;
  }
});

const formatCommaString = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const addNumStringToDisplay = (numString) => {
  calcString += numString;
  calcVal = +calcString;
  const formattedVal = formatCommaString(calcVal);
  outputNum(formattedVal);
};

const handlePeriodClick = (dot) => {
  if (!calcString.includes(".")) {
    calcString += ".";
    outputNum(calcString);
    calcVal = +calcString;
  }
};

const setDisplayNum = (num) => {
  firstNum = num;
  calcString = "" + num;
  calcVal = num;
  outputNum(formatCommaString(calcVal));
};

const outputNum = (numString) => {
  calcOutput.innerText = numString;
};

const resetOutput = () => {
  calcOutput.innerText = 0;
  calcString = "";
  calcVal = 0;
};

const removeLastDigit = () => {
  calcString = calcString.substring(0, calcString.length - 1);
  if (calcString !== "") {
    calcOutput.innerText = calcString
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    calcOutput.innerText = "0";
  }
};

const handleOperatorClick = (op) => {
  if (!firstNumEntered && op !== "=") {
    operator = op;
    firstNum = calcVal;
    calcVal = 0;
    resetOutput();
    firstNumEntered = true;
  } else if (firstNumEntered) {
    secondNum = calcVal;
    firstNumEntered = false;
    let result;
    switch (operator) {
      case "+":
        /* sum */
        result = +firstNum + +calcVal;
        break;
      case "-":
        /* difference */
        result = +firstNum - +calcVal;
        break;
      case "x":
        /* product */
        result = +firstNum * +calcVal;
        break;
      case "/":
        /* quotient */
        result = +firstNum / +calcVal;
        break;
    }
    setDisplayNum(result);
  }
};

calcBtns.forEach((calcBtn) => {
  calcBtn.addEventListener("click", (e) => {
    const val = e.target.innerHTML;
    switch (val) {
      case "1":
        addNumStringToDisplay(val);
        break;
      case "2":
        addNumStringToDisplay(val);
        break;
      case "3":
        addNumStringToDisplay(val);
        break;
      case "4":
        addNumStringToDisplay(val);
        break;
      case "5":
        addNumStringToDisplay(val);
        break;
      case "6":
        addNumStringToDisplay(val);
        break;
      case "7":
        addNumStringToDisplay(val);
        break;
      case "8":
        addNumStringToDisplay(val);
        break;
      case "9":
        addNumStringToDisplay(val);
        break;
      case "0":
        addNumStringToDisplay(val);
        break;
      case ".":
        handlePeriodClick(val);
        break;
      case "+":
        handleOperatorClick(val);
        break;
      case "-":
        handleOperatorClick(val);
        break;
      case "x":
        handleOperatorClick(val);
        break;
      case "/":
        handleOperatorClick(val);
        break;
      case "=":
        handleOperatorClick(val);
        break;
      case "DEL":
        removeLastDigit();
        break;
      case "RESET":
        resetOutput();
        break;
    }
  });
});
