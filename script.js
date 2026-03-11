function add() {
let a = document.getElementById("num1").value;
let b = document.getElementById("num2").value;

let result = parseInt(a) + parseInt(b);

document.getElementById("result").innerText = result;
}