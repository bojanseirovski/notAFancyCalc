const operators = ["+", "-", "/", "*"];
var operations = [];
var totalNums = "";
var num = "";


const body = document.getElementsByTagName("body")[0];
const content = document.getElementById("content");
const operate = document.getElementById("operate");

content.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    let op = event.target.getAttribute("data-operand");
    getOperands(op);
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

function getOperands(op) {
    if (op != "=") {
        //   number
        if (!isNaN(op)) {
            num = num + op;
            operate.value = num;
        } else if (isOperator(op)) {
            // operator
            operations.push(parseFloat(num));
            operations.push(op);
            num = "";
            operate.value = op;
        }
    } 
    if ((op == "=") || isEnterPressed(op)) {
        //calc
        operations.push(parseFloat(num));
        const newArray = operations.filter(function (value) {
            return !Number.isNaN(value);
        });
        operations = newArray;
        totalNums = calc(operations);
        operate.value = totalNums;
        num = "";
        operations = [parseFloat(totalNums)];
    }
    // clear
    if (op == "C" || op == "c" || isEscapePressed(op)) {
        num = "";
        totalNums = "";
        operations = [];
        operate.value = 0;
    }
}

function isEnterPressed(key) {
    if ((key === 'Enter') || (key.keyCode && (key.keyCode === 13))) {
        return true;
    }
    return false;
}

function isEscapePressed(key) {
    if ((key === 'Escape') || (key.keyCode && (key.keyCode === 27))) {
        return true;
    }
    return false;
}
