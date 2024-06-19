const operators = ["+", "-", "/", "*"];
var operations = [];
var totalNums = "";
var num = "";


const body = document.getElementsByTagName("body")[0];
const content = document.getElementById("content");
const opperate = document.getElementById("operate");


body.addEventListener('dblclick', (event) => {
    alert("Bojan Seirovski \251");
});

content.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    let op = event.target.getAttribute("data-opperand");
    if (op != "=") {
        //   number
        if (!isNaN(op)) {
            num = num + op;
            opperate.value = num;
        } else if (isOperator(op)) {
            // operator
            operations.push(parseInt(num));
            operations.push(op);
            num = "";
            opperate.value = op;
        }
    } else if (op == "=") {
        //calc
        operations.push(parseFloat(num));
        const newArray = operations.filter(function (value) {
            return !Number.isNaN(value);
        });
        operations = newArray;
        totalNums = calc(operations);
        opperate.value = totalNums;
        num = "";
        operations = [parseFloat(totalNums)];
    }
    // clear
    if (op == "C") {
        num = "";
        totalNums = "";
        operations = [];
        opperate.value = 0;
    }
});

function calc(ops) {
    let total = "";
    ops.forEach(element => {
        total = total + element;
    });

    return eval(total);
}

function isOperator(op) {
    return operators.indexOf(op) > -1;
}