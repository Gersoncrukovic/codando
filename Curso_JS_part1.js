
//learning JS
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Bob";
console.log(firstName);


var javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'jonas');

javascriptIsFun = 'yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1989;
console.log(typeof year);

//this is a bug
console.log(typeof null);


//math operators
const now = 2048;
const ageJonas = now - 1989;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2* 2* 2

const firstName = 'Gerson';
const lastName = 'Crukovic';
console.log(firstName + ' ' + lastName);

//assignment operators
let x = 10 + 5;
x += 10; //x=x+10=25
x *= 4; //x=x*4=100
x++; //x = x + 1
x--; //x = x - 1

console.log(x);

//comparision operators
console.log(ageJonas > ageSarah); //>, <, >=, <= 
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2048;
const ageJonas = now - 1989;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; //x=y=10, x=10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


//BMI / height**2 = mass/ (height=height)

var pesoMarks = 78;
var alturaMarks = 1.69;
var pesoJoao = 92;
var alturaJoao = 1.95;
var imcMarks = pesoMarks / alturaMarks ** 2;
var imcJoao = pesoJoao / alturaJoao ** 2;
var imcMarkMaior = imcMarks > imcJoao;

console.log(imcMarks); //27,3
console.log(imcJoao); //24,1
console.log(imcMarkMaior);



const meuNome = "Gerson";
const trabalho = "analista";
const aniversario = 1989;
const year = 2037;

const gersin =
  "i´m " +
  meuNome +
  ",a " +
  (year - aniversario) +
  " years old " +
  trabalho +
  "!";
//console.log(gersin);

const gersonNew = `i´m ${meuNome} a ${
  year - aniversario
} year old ${trabalho}!`;
console.log(gersonNew);

console.log(`testando essa função com crases`);
console.log(`consigo tambem
pular linhas
quantas vezes
eu quiser
e não precisa usar o n`);


//if/else
const age = 15;
if (age >= 18) {
  console.log("sara pode dirigir");
} else {
  //opcional
  const yearsLeft = 18 - age;
  console.log(`sarah é novinha ${yearsLeft} anos faltam`);
}

const birthYear = 1989;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);



//BMI / height**2 = mass/ (height=height)

var pesoMarks = 78;
var alturaMarks = 1.69;
var pesoJoao = 92;
var alturaJoao = 1.95;
var imcMarks = pesoMarks / alturaMarks ** 2;
var imcJoao = pesoJoao / alturaJoao ** 2;
console.log(imcJoao, imcMarks);

if (imcMarks > imcJoao) {
  console.log(`marks imc (${imcMarks}) é maior do que do jão (${imcJoao})`);
} else {
  console.log(`imc do jão (${imcJoao}) é maior que o do markin (${imcMarks})`);
}



//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Gerson"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("i´m " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1; //'11'
n = n - 1; //'10'
console.log(n);



//5 falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean("Gerson"));
console.log(Boolean({}));




//boolean Logic
const age = 18;
if (age === 18) console.log("you just became an adult(strict)");

if (age == 18) console.log("you just became an adult (loose)"); //não reomendado a usar

const favouriteNumber = Number(prompt("What´s ur favoutire number?"));
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber === 32) {
  console.log("cool!32 is an amazing number");
} else if (favouriteNumber === 7) {
  console.log("7 is fucking number");
} else {
  console.log("Number is not 32 or 7");
}

if (favouriteNumber !== 32) console.log("why not 32? =( ");


//logical operators
const hasDriverslicense = true; // A
const hasGoodVision = true; //B
console.log(hasDriverslicense && hasGoodVision); //&& = AND
console.log(hasDriverslicense || hasGoodVision); //|| = OR
console.log(!hasDriverslicense); //!= NOT

const shouldDrive = hasDriverslicense && hasGoodVision;

//if (hasDriverslicense && hasGoodVision) {
//console.log("Sarah is able to drive");
//} else {
// console.log("Someone else should drive");
//}

const istired = false; //C
console.log(hasDriverslicense && hasGoodVision && istired);
if (hasDriverslicense && hasGoodVision && !istired) {
  console.log("Sarah pode dirigir");
} else {
  console.log("alguem tem que dirigir...");
}
 

//The Switch statement
const day = "monday";

switch (day) {
  case "monday": //day === monday
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory");
    break;
  case "wednesday":
  case "Thursday":
    console.log("write codes");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend");
    break;
  default:
    console.log("not a valid day");
}

//pode usar tambem o If/else mas o switch é mais recomendado nessa situação

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write codes");
} else if (day === "friday") {
  console.log("record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("enjoy the weekend");
} else {
  console.log("not a valid day");
}
 
//THERNARY OPERATOR
const age = 32;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);
