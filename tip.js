const people = document.querySelector("#people");
let buttons = document.querySelector(".options");
buttons = buttons.querySelectorAll("button");

const customPercent = document.querySelector("#custom-percent");

const bill = document.querySelector("#bill");

let percentage = 0;
let result = 0;

function calculateTip(){
    percentage = parseInt(this.textContent);
    result = (percentage * bill.value) / 100;
    totalResult.innerHTML = '$' + result.toFixed(2);
    calculatePerPerson();
}

function customPercentage(){
    percentage = parseInt(this.value);
    result = (percentage * bill.value) / 100;
    totalResult.innerHTML = '$' + result.toFixed(2);
    calculatePerPerson();
}

function calculatePerPerson(){
    if(people.value == 0){
        resultPerPerson.innerHTML = '$' + result.toFixed(2);
    }else{
        resultPerPerson.innerHTML = '$' + (result / people.value).toFixed(2);
    }
}

buttons.forEach( (button) => button.addEventListener('click', calculateTip));
customPercent.addEventListener('input', customPercentage);
people.addEventListener('input', calculatePerPerson);

const resultPerPerson = document.querySelector(".perPerson");
const totalResult = document.querySelector(".total");