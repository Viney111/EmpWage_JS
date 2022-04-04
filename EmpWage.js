console.log("Welcome to EmpWage Calculation Program in JS")
//CONSTANTS
const IS_FULL_TIME = 2;
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const WAGE_PER_HR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAY_PER_MONTH = 20;
const MAX_WORKING_HRS_PER_MONTH = 100;

//Variables
let monthlyEmpWage = 0;
let dailyWorkingHrs = 0;
let totalWorkingHrs = 0;
let totalWorkingDays = 0;
//Daily EmpWage in Array
let dailyEmpWageArray = new Array();
//Daily EmpWage in Map
let dailyEmpWageMap = new Map();

while(totalWorkingDays < MAX_WORKING_DAY_PER_MONTH && totalWorkingHrs < MAX_WORKING_HRS_PER_MONTH){
    dailyWorkingHrs = GetWorkingHrs();
    dailyEmpWageArray.push(GetDailyWage(dailyWorkingHrs));
    totalWorkingHrs += dailyWorkingHrs;
    totalWorkingDays++;
    dailyEmpWageMap.set("Day No :"+ totalWorkingDays,"Wage is " + GetDailyWage(dailyWorkingHrs));
}
monthlyEmpWage = WAGE_PER_HR * totalWorkingHrs;
console.log("Employee wage for this month is "+ monthlyEmpWage+ " Total hrs & days worked are "+totalWorkingHrs+ ", "+totalWorkingDays);
console.log("DailyEmpWage =" +dailyEmpWageArray);
console.log(dailyEmpWageMap);

//Method to get Work Hours
function GetWorkingHrs(){
    let empCheck;
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch(empCheck){
        case IS_ABSENT:
            return 0;
            break;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_DAY_HOURS;
            break;
    }
}
function GetDailyWage(dailyWorkingHrs){
    return dailyWorkingHrs * WAGE_PER_HR;
}