const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let first_num;
let second_num;
let operator;

function operate(first_num, second_num, operator) {
    return operator(first_num, second_num);
}
let current_value;
const display =document.querySelector(".display")
const click = document.querySelectorAll(".buttons");
for (let i = 0; i < click.length; i++) {
  
    click[i].addEventListener("click",function display_elements() {
    current_value =    display.textContent=display.textContent+this.innerText;
    return current_value;
    })
}