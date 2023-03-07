var x, y;
var equal;
var eq = document.getElementById("sol");

function addition() {
    x = parseInt(document.getElementById("no1").value);
    y = parseInt(document.getElementById("no2").value);
    equal = x + y;
    eq.innerHTML = x + " + " + y + " = " + equal;
    if (isNaN(x) == true) {
        eq.innerHTML = "Number 1 is not a number or has no number input. Please try again.";
    }
    if (isNaN(y) == true) {
        eq.innerHTML = "Number 2 is not a number or has no number input. Please try again.";
    }
}
function subtraction() {
    x = parseInt(document.getElementById("no1").value);
    y = parseInt(document.getElementById("no2").value);
    equal = x - y;
    eq.innerHTML = x + " - " + y + " = " + equal;
    if (isNaN(x) == true) {
        eq.innerHTML = "Number 1 is not a number or has no number input. Please try again.";
    }
    if (isNaN(y) == true) {
        eq.innerHTML = "Number 2 is not a number or has no number input. Please try again.";
    }
}
function multiplication() {
    x = parseInt(document.getElementById("no1").value);
    y = parseInt(document.getElementById("no2").value);
    equal = x * y;
    eq.innerHTML = x + " × " + y + " = " + equal;
    if (isNaN(x) == true) {
        eq.innerHTML = "Number 1 is not a number or has no number input. Please try again.";
    }
    if (isNaN(y) == true) {
        eq.innerHTML = "Number 2 is not a number or has no number input. Please try again.";
    }
}
function division() {
    x = parseInt(document.getElementById("no1").value);
    y = parseInt(document.getElementById("no2").value);
    equal = x / y;
    eq.innerHTML = x + " ÷ " + y + " = " + equal;
    if (y == 0) {
        eq.innerHTML = "You cannot divide by zero.";
    }
    if (isNaN(x) == true) {
        eq.innerHTML = "Number 1 is not a number or has no number input. Please try again.";
    }
    if (isNaN(y) == true) {
        eq.innerHTML = "Number 2 is not a number or has no number input. Please try again.";
    }
}

