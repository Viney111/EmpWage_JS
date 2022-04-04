console.log("Welcome to EmpWage Calculation Program in JS")
//CONSTANTS
const IS_PRESENT = 1;
const IS_ABSENT = 0;
const WAGE_PER_HR = 20;
const FULL_DAY_HOURS = 8;

//Variables
let empWage;

empWage = WAGE_PER_HR * GetWorkingHrs();
console.log("Employee wage for this day is "+ empWage);

//Method to get Work Hours
function GetWorkingHrs(){
    let empCheck;
    empCheck = Math.floor(Math.random() * 10) % 2;
    switch(empCheck){
        case IS_ABSENT:
            return 0;
            break;
        case IS_PRESENT:
            return FULL_DAY_HOURS;
            break;
    }
}