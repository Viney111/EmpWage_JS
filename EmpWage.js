console.log("Welcome to EmpWage Calculation Program in JS")
//CONSTANTS
const IS_PRESENT = 1;
const IS_ABSENT = 0;

//VARIABLES
let empCheck;

empCheck = Math.floor(Math.random() * 10) % 2;
switch(empCheck){
    case IS_ABSENT:
        console.log("Employee is absent");
        break;
    case IS_PRESENT:
        console.log("Employee is present");
        break;
}