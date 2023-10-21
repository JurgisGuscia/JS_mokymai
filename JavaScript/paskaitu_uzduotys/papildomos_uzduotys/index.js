//1 uzduotis==================================================
//Parasykite programa, kuri pavertu eurus i dolerius
//1 EUR - 1,0558 USD
const convertEurToUsd = (ammount) => (ammount * 1.0558).toFixed(2);
console.log(`1 Uzduotis: 100 EUR = ${convertEurToUsd(100)} USD`);

//2 uzduotis==================================================
//Parasykite programa, kuri dolerius i eurus
//1 EUR - 1,0558 USD
const convertUsdToEur = (ammount) => (ammount / 1.0558).toFixed(2);
console.log(`2 Uzduotis: 100 USD = ${convertUsdToEur(100)} EUR`);

//3 uzduotis==================================================
//Parašykite programą, kuri suskaičiuotų žmogaus BMI (body mass index), kai yra žinomas žmogaus ūgis ir svoris.
let weight = 95;
let height = 1.85;
const calcBMI = (weight, height) => Math.floor(weight / Math.pow(height, 2));
console.log(
  `3 Uzduotis: svoris-${weight}kg, ugis-${height}m, BMI:${calcBMI(
    weight,
    height
  )}`
);

//4 uzduotis==================================================
//Parašykite programą, kuri paverstų kilometrus į mylias.
let kilometers = 53;
const convertKmToMile = (km) => (km * 1.6).toFixed(2);
console.log(
  `4 Uzduotis: ${kilometers}km = ${convertKmToMile(kilometers)} miles`
);

//5 uzduotis==================================================
//Parašykite programą, kuri paverstų valandas į minutes ir sekundes.
let hours = 55;
const convertHours = (hours) => [hours * 60, hours * 60 * 60];
let [minutes, seconds] = convertHours(55);
console.log(`5 Uzduotis: ${hours} val. yra ${minutes} min. arba ${seconds} s.`);

//6 uzduotis==================================================
//Parašykite programą, kuri iš duoto žmogaus amžiaus metais pasakytų kiek tai yra sekundėmis, minutėmis, valandomis, dienomis.
let age = 31;
const calcAge = (years) => [
  years * 365,
  years * 365 * 24,
  years * 365 * 24 * 60,
  years * 365 * 24 * 60 * 60,
];
let [ageD, ageH, ageM, ageS] = calcAge(age);
console.log(
  `6 Uzduotis: ${age} metai yra - ${ageD} dienomis, ${ageH} valandomis, ${ageM} minutemis ir ${ageS} sekundemis`
);

//7 uzduotis==================================================
//Parasyti sirdies ritmo reziu skaiciuokle. Virsutinio rezio formule: (220-amzius) * 0.85. Apatinio rezio formule:  (220-amzius) * 0.65
let personAge = 55;
const calcHBM = (age) => [(220 - age) * 0.85, (220 - age) * 0.65];
let [upperLimit, lowerLimit] = calcHBM(personAge);
console.log(
  `7 Uzduotis: ${personAge} amziaus zmogui, optimalus sirdies ritmas yra ${lowerLimit} bpm - ${upperLimit} bpm`
);

//8 uzduotis==================================================
//Algos skaiciuokle ivesti alga ir mokesciu %, + statiniai mokesciai 4.3%
// document.getElementById("calculateButton").addEventListener("click", () => {
//   let salary = document.getElementById("alga").value;
//   let tax = document.getElementById("mokesciai").value;
//   document.getElementById("salaryResultDisplay").innerText = `Alga i rankas: ${
//     (((salary * (100 - tax)) / 100) * (100 - 4.3)) / 100
//   }`;
// });

//9 uzduotis==================================================
//termometro konverteris tarp celcijaus ir farenheito.
let scl = "c";
let temp = 40;
const tempConverter = (scl, temp) =>
  scl === "c" ? (temp * 9) / 5 + 32 : ((temp - 32) * 5) / 9;
console.log(`9 Uzduotis: ${temp}${scl} = ${tempConverter(scl, temp)}`);

//10 uzduotis=================================================
//apskaiciuoti slidinejimo lazdu ilgius pagal zmogaus ugi. free-style 0.9, classical 0.85, walk 0.68
let manHeight = 195;
const calcStick = (h) => [h * 0.9, h * 0.85, h * 0.68];
let [freeStyle, classical, walk] = calcStick(manHeight);
console.log(
  `10 Uzduotis: ${manHeight} ugio zmogui reikalingos lazdos: freeStyle ${freeStyle.toFixed(
    2
  )}, classical ${classical.toFixed(2)}, walk ${walk.toFixed(2)}`
);

//11 uzduotis=================================================
//parasyti programa kuri sudeda visus pirminius skaicius mazesnius nei 100
const checkIfPrime = (nums) => {
  let dividers = 0;
  for (let i = 2; i < nums + 1; i++) {
    nums % i === 0 && dividers++;
  }
  return dividers === 1;
};
let topNumber = 100;
let primeSum = 0;
for (let i = 1; i < topNumber; i++) {
  checkIfPrime(i) && (primeSum += i);
}
console.log(
  `11 Uzduotis: visu pirminiu skaiciu mazesniu nei ${topNumber} suma yra ${primeSum}`
);

//12 uzduotis=================================================
//parasyti programa kuri konvertuotu zodzius i skaicius Input: zero;three;five;six;eight;one Output: 035681
const table = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
let input = "zero;three;five;eight;one";
let trueInput = input.split(";");
let output = "";
trueInput.forEach((digit) => {
  output += table[digit];
});
console.log(`12 Uzduotis: ivestis->${input}, isvestis->${output}`);

//13 uzduotis=================================================
//???Create a script that displays 1-2-3-4-5-6-7-8-9-10 on one line. There will be no hyphen(-) at starting and ending position.
const makeALine = (wantedNumber) => {
  let str = "";
  for (let i = 1; i < wantedNumber + 1; i++) {
    str = str + i + "-";
  }
  str = str.slice(0, str.length - 1);
  return str;
};
let wantedNumber = 10;
let myStr = makeALine(wantedNumber);
console.log(myStr);

//14 uzduotis=================================================
//check if number is an Armstrong number. All digit cube sum equals number itself
const checkArmstrong = (number) => {
  let digits = ("" + number).split("");
  let sum = 0;
  digits.forEach((d) => {
    let parsedInt = parseInt(d);
    sum += Math.pow(parsedInt, 3);
  });
  return sum === number;
};
let armNumber = 153;
console.log(
  `14 Uzduotis: ar ${armNumber} yra Armstrongas? ${checkArmstrong(armNumber)}`
);

//15 uzduotis=================================================
let stepCount = 5;
const drawOneSide = (steps) => {
  for (let i = 1; i < steps + 1; i++) {
    let str = "";
    for (let j = 1; j < i + 1; j++) {
      str += "*";
    }
    console.log(str);
  }
};
console.log(`15 Uzduotis: ${stepCount} laipteliu`);
drawOneSide(stepCount);

//16 uzduotis=================================================
const drawTwoSide = (steps) => {
  for (let i = 1; i < steps + 1; i++) {
    let str = "";
    for (let j = 1; j < i + 1; j++) {
      str += "*";
    }
    console.log(str);
  }
  for (let i = steps; i > 0; i--) {
    let str = "";
    for (let j = i; j > 0; j--) {
      str += "*";
    }
    console.log(str);
  }
};
console.log(`16 Uzduotis: ${stepCount} laipteliu`);
drawTwoSide(stepCount);

//17 uzduotis=================================================
//suskaiciuoti faktoriala
const factNumber = 4;
const calcFactorial = (factNumber) => {
  let answer = 1;
  for (let i = 1; i < factNumber + 1; i++) {
    answer *= i;
  }
  return answer;
};
console.log(
  `17 Uzduotis: skaiciaus ${factNumber} faktorialas yra ${calcFactorial(
    factNumber
  )}`
);

//18 uzduotis=================================================
//visos imanomos 2 skaitmenu kombinacijos
let arr = "";
const calcCombinations = () => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      arr += i;
      arr += j;
      arr += ", ";
    }
  }
};
calcCombinations();
console.log(`18 Uzduotis: ${arr}`);

//19 uzduotis=================================================
//floyd triangle
let floydSteps = 5;
const drawFloyd = (steps) => {
  let counter = 0;
  let digitCounter = 0;
  for (let i = 1; i < steps + 1; i++) {
    digitCounter++;
    let str = "";
    for (let j = 1; j < digitCounter + 1; j++) {
      counter++;
      str = str + counter + " ";
    }
    console.log(str);
  }
};
console.log(`19 Uzduotis: floyd trikmapis`);
drawFloyd(floydSteps);
