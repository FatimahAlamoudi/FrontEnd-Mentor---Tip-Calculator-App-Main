"use strict";
let peopleNoInput = document.getElementById("people-no");
let billInput = document.getElementById("bill-price");
let totalPrice = document.querySelector('.number-total-amount');
let totalTax = document.querySelector('.number-tip-amount');
let button1 = document.querySelector('.tip-1');
let button2 = document.querySelector('.tip-2');
let button3 = document.querySelector('.tip-3');
let button4 = document.querySelector('.tip-4');
let button5 = document.querySelector('.tip-5');
let resetButton = document.querySelector('.reset-btn');
let custom = document.querySelector('.custom-input');
let tip = 0;
let formLabelError = document.querySelector('.error');
let peopleNoValue;
let billValue;
button1.addEventListener('click', () => {
    tip = 0.05;
    console.log(peopleNoInput.value);
    calculateBill();
});
button2.addEventListener('click', () => {
    tip = 0.10;
    calculateBill();
});
button3.addEventListener('click', () => {
    tip = 0.15;
    calculateBill();
});
button4.addEventListener('click', () => {
    tip = 0.25;
    calculateBill();
});
button5.addEventListener('click', () => {
    tip = 0.50;
    calculateBill();
});
custom.addEventListener('change', () => {
    tip = parseFloat(custom.value);
    calculateBill();
});
billInput.addEventListener('change', () => {
    billValue = parseFloat(billInput.value);
    console.log(billValue);
});
peopleNoInput.addEventListener('change', () => {
    if (peopleNoInput.value == '0') {
        peopleNoInput.style.border = '2px solid red';
        formLabelError.innerHTML = 'Can\'t be zero';
    }
    else {
        peopleNoInput.style.border = '2px solid hsl(172, 67%, 45%)';
        peopleNoValue = Math.floor(parseFloat(peopleNoInput.value));
        console.log(peopleNoValue);
        calculateBill();
        resetButton.style.backgroundColor = 'hsl(172, 67%, 45%)';
        resetButton.style.color = 'hsl(183, 100%, 15%)';
        resetButton.disabled = false;
    }
});
resetButton.addEventListener('click', () => {
    totalPrice.innerHTML = '$ 0.00';
    totalTax.innerHTML = '$ 0.00';
    billInput.value = '';
    peopleNoInput.value = '';
});
function calculateBill() {
    if (peopleNoValue != 0 && peopleNoInput.value.length != 0) {
        let billTotal = 0;
        billTotal = Math.floor(billValue + (billValue * tip));
        console.log('billTotal', billTotal);
        const billPerPerson = billTotal / peopleNoValue;
        const tipPerPerson = (billTotal - billValue) / peopleNoValue;
        totalPrice.innerHTML = '$' + billPerPerson.toFixed(2);
        totalTax.innerHTML = '$' + tipPerPerson.toFixed(2);
    }
    else {
        totalPrice.innerHTML = '$ 0.00';
        totalTax.innerHTML = '$ 0.00';
    }
}
