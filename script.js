"use script";
const inputText = document.querySelector("#text");
const square = document.querySelector("#square");
const btn = document.querySelector("#btn");
const eBtn = document.querySelector("#e_btn");
const inputRange = document.querySelector("#range");
const circle = document.querySelector("#circle");
const range_span = document.querySelector("#range-span");
const range = document.querySelector("#range");
console.log(range_span);
console.log(square);
console.log(circle);
// Задание 1
let chancheColor = function () {
  console.log("123:");
  console.log(inputText.value);
  const a = inputText.value;
  square.style.backgroundColor = a;
};
btn.addEventListener("click", function () {
  chancheColor();
});

// Задание 2
eBtn.style.display = "none";

// Задание 3
range.addEventListener("input", function (e) {
  range_span.textContent = e.target.value + "%";
  circle.style.width = e.target.value + "%";
  circle.style.height = e.target.value + "%";
});
