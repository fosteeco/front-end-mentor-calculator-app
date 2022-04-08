const themeAmount = 3;
let themeSelected = 1;
const sliderPercent = (1 / (themeAmount - 1)) * 100;
const calcSlider = document.querySelector(".calc-slider");
// const calcContainer = document.querySelector(".calc-container");
const body = document.querySelector("body");
const numberContainer = document.querySelector(".number-container");

/* Function source: https://thegermancoder.com/2018/10/04/how-to-remove-classes-by-prefix-in-vanilla-javascript/ */
function removeClassByPrefix(node, prefix) {
  var regx = new RegExp("\\b" + prefix + "[^ ]*[ ]?\\b", "g");
  node.className = node.className.replace(regx, "");
  return node;
}

const setCalcContainerTheme = () => {
  removeClassByPrefix(body, "theme");
  body.classList.add("theme-" + themeSelected);
};

numberContainer.addEventListener("click", (e) => {
  const numClicked = e.target.innerText;
  if (+numClicked) {
    themeSelected = +numClicked;
    const num = themeSelected - 1;
    console.log("num :", num);
    const newSlidePercentLeft = sliderPercent * num;
    console.log("newSlidePercentLeft :", newSlidePercentLeft);
    circle.style.left = newSlidePercentLeft + "%";
    setCalcContainerTheme();
  }
});

calcSlider.addEventListener("click", (e) => {
  let currentLeftProperty = circle.style.left;
  if (currentLeftProperty === "100%") {
    circle.style.left = "0%";
    themeSelected = 1;
    leftAmount = 0;
  } else {
    currentLeftProperty = leftAmount + sliderPercent;
    const newPercent = leftAmount + sliderPercent + "% ";
    circle.style.left = newPercent;
    leftAmount = leftAmount + sliderPercent;
    themeSelected += 1;
  }
  setCalcContainerTheme();
});
