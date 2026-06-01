// tsask 1

let firstName = "Jide";
let lastName = "Ewuola";
let age = 200;
const studentID = "STU-00123";
const gpa = 4.51;
let isEnrolled = true;
let graduationDate = null;

// task 2

// initial score
let totalScore = 0;
console.log(totalScore);

// socre after first test
let firtTest = 45 + totalScore;
totalScore = firtTest;
console.log(firtTest);
console.log(totalScore);

// score after second test
let secondTest = 30 + firtTest;
totalScore = secondTest;
console.log(secondTest);
console.log(totalScore);

// score after 5 marks was removed

let error = secondTest - 4;
totalScore = error;
console.log(error);
console.log(totalScore);

// score when one was added to it
totalScore++;
console.log(totalScore);

// score after being divided by 7

let divideBySeven = totalScore % 7;
totalScore = divideBySeven;
console.log(divideBySeven);
console.log(totalScore);

// task 3

let studentAge = "19";
let newStudentAge = parseInt(studentAge);
console.log(typeof newStudentAge);

let examScore = "74.5";
let newExamScore = parseFloat(examScore);
console.log(typeof newExamScore);

let passMark = "50";
let newPassMark = Number(passMark);
console.log(typeof newPassMark);

let studentName = 101;
let newStudentName = toString(studentName);
console.log(typeof newStudentName);

// task 4
// let result = 30;
// let result = 42;
let result = 70;

if (result >= 70) {
  console.log("Distinction");
} else if (result >= 60 && result < 70) {
  console.log("Merit");
} else if (result >= 50 && result < 60) {
  console.log("Pass");
} else if (result >= 40 && result < 50) {
  console.log("Near Pass");
} else {
  console.log("Fail");
}

// B
// let month = 5;
// let month = 7;
let month = 0;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;

  default:
    console.log("not a month");
}
