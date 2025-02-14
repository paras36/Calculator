const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const modulo=(a,b)=>a%b;

let first_num ;
let second_num;
let operator;

function operate(first_num, second_num, operator) {
  const  operations ={
        "+": add,
        "-":subtract,
        "/": divide,
        "X":multiply,
        "%": modulo
    };
    return operations[operator](first_num, second_num);
}

let  current_value;
const display = document.querySelector(".display")
const click = document.querySelectorAll(".buttons");
for (let i = 0; i < click.length; i++) {

    click[i].addEventListener("click", function display_elements() {
        display.textContent = display.textContent + this.innerText;
         current_value = display.textContent;
        if (current_value.length>8) {
           current_value= current_value.slice(0,8);
            display.textContent=current_value;
        }
       
    })
}
function clear() {
    display.textContent = "";
}
function all_clear() {
    first_num="";
    second_num="";
    display.textContent = "";
}


const operator_button = document.querySelectorAll(".buttons_operator")
for (let i = 0; i < operator_button.length; i++) {
    operator_button[i].addEventListener("click", function use_operator() {
        assign_value();
        operator=this.textContent;
clear();
        
    })

}


function assign_value() {
    first_num=Number(display.textContent);
    
}
function assign_value2() {
    second_num=Number(display.textContent);
    
}


function calculate() {
    assign_value2();
    const ans = operate(first_num, second_num, operator)
const display_ans = ans.toFixed(2);
    display.textContent = display_ans;
   
    console.log("this button works")
    
    return display_ans;
    
}


