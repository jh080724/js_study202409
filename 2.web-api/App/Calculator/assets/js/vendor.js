// vendor.js에서 요소를 전부 취득하고,
// app.js에서는 기능을 나열

// 프로그램에서 전역적으로 사용할 변수, 함수 정의
const $userInput = document.getElementById("input-number");
const $addBtn = document.getElementById("btn-add");
const $subtractBtn = document.getElementById("btn-subtract");
const $multiplyBtn = document.getElementById("btn-multiply");
const $divideBtn = document.getElementById("btn-divide");

const $currentResultOutput = document.getElementById("current-result");
const $currentCalculationOutput = document.getElementById("current-calculation");

const $logEntries = document.querySelector(".log-entries");
