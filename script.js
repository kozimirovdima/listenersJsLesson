"use script";
let inputText = document.querySelector("#text");
let square = document.querySelector("#square");
let btn = document.querySelector("#btn");
let eBtn = document.querySelector("#e_btn");
let inputRange = document.querySelector("#range");
let circle = document.querySelector("#circle");
let range_span = document.querySelector("#range-span");
let range = document.querySelector("#range");
console.log(range_span);
console.log(square);
console.log(circle);
// Задание 1
let chancheColor = function () {
  console.log("123:");
  console.log(inputText.value);
  let a = inputText.value;
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
