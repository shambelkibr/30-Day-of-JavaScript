// let agree = confirm("Are you agree click ");
// console.log(agree);

// let age = prompt("enter your age ");
// console.log(age);

const now = new Date();
// console.log(now);
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getHours());
// console.log(now.getDay());
// console.log(now.getMinutes());
// console.log(now.getMilliseconds());

// console.log(4 !== 4);
// console.log(4 == "4");
// console.log(4 === 4);

// There is no 'on' in both dragon and python

// console.log("python ".includes("on") && "dragon ".includes("on"));

// console.log(now.getTime());

// let base = prompt("enter the  base  of the triangle");
// let height = prompt("enter the  height of the triangle");
// let areaOfTriangel = base * height * 0.5;

// document.getElementById("demo").innerHTML =
//   `the area of triangle is ${areaOfTriangel}`;

//   claculate slope of the (2, 2) and (6,10)
// let A = [
//   [2, 2],
//   [6, 10],
// ];
// let slope = (A[1][1] - A[0][1]) / (A[1][0] - A[0][0]);
// document.getElementById("slope").innerHTML =
//   `the slope of the (${A[0][0]}, ${A[0][1]} ) and (${A[1][0]}, ${A[1][1]}) is ${slope}`;

let curretYear = now.getFullYear();
let yourBirthYear = prompt("enter your Age");

let age = curretYear - yourBirthYear;
let isEligableDrive = age > 18;
let result = isEligableDrive
  ? `you age is ${age} is eligabele `
  : `you age is ${age} is not eligabel`;

document.getElementById("drive").innerHTML = result;
const formatted =
  new Date().toISOString().slice(0, 10).replace(/-/g, "-") +
  " " +
  String(new Date().getHours()).padStart(2, "0") +
  ":" +
  String(new Date().getMinutes()).padStart(2, "0");
