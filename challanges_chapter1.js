
var country = "Brasil";
var continent = "SouthAmerica";
var population = 200;
console.log(country);
console.log(continent);
console.log(population);


///test data 1
const dolphinsScore = (96 + 108 + 89) / 3;
console.log(dolphinsScore);
const koalasScore = (88 + 97 + 110) / 3;
console.log(koalasScore);

if (dolphinsScore > koalasScore) {
  console.log("Dolphins ganhou!");
} else {
  console.log("Dolphins Loosers");
}

if (dolphinsScore < koalasScore) {
  console.log("Koalas Ganharam");
} else {
  console.log("Koalas perderam");
}

if (dolphinsScore === koalasScore) {
  console.log("Deu empate!");
} else {
  console.log("Tivemos um winner!!!");
} */

 //test data 2
const dolphinsScore = (97 + 112 + 101) / 3;
console.log(dolphinsScore);
const koalasScore = (109 + 95 + 123) / 3;
console.log(koalasScore);

if (dolphinsScore > koalasScore) {
  console.log("dolphins venceram");
} else {
  console.log("koalas venceram");
}

if (dolphinsScore < koalasScore) {
  console.log("dolphins perderam");
} else {
  console.log("koalas perderam");
}
if (dolphinsScore && koalasScore >= 100) {
  console.log("Os times tiveram uma boa pontuação");
} else {
  console.log("Bando de fracassados!!!");
}
if (dolphinsScore || koalasScore >= 100) {
  console.log("Venceram!!!");
} else {
  console.log("Perderam!!!");
}

if (dolphinsScore && koalasScore < 100) {
  console.log("tivemos um empate");
} */

 //test data 3
const dolphinsScore = (97 + 112 + 101) / 3;
console.log(dolphinsScore);
const koalasScore = (109 + 95 + 50) / 3;
console.log(koalasScore);

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log("Dolphins win the trophy");
} else if (koalasScore > dolphinsScore && koalasScore >= 100) {
  console.log("Koalas win the trophy");
} else if (
  dolphinsScore === koalasScore &&
  dolphinsScore >= 100 &&
  koalasScore >= 100
) {
  console.log("os dois ganharam!!");
} else {
  console.log("No one wins the trophy");
} */

 //assignement 4

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The Bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
); */
