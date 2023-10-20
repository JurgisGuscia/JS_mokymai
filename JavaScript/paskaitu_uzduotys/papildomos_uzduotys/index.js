//1 uzduotis==================================================
//Parasykite programa, kuri pavertu eurus i dolerius
//1 EUR - 1,0558 USD
const convertEurToDol = (ammount) => (ammount * 1.0558).toFixed(2);
console.log(`1 Uzduotis: 100 EUR = ${convertEurToDol(100)} USD`);

//2 uzduotis==================================================
//Parasykite programa, kuri dolerius i eurus
//1 EUR - 1,0558 USD
const convertEurToDol2 = (ammount) => (ammount / 1.0558).toFixed(2);
console.log(`2 Uzduotis: 100 USD = ${convertEurToDol2(100)} EUR`);

//3 uzduotis==================================================
//Parašykite programą, kuri suskaičiuotų žmogaus BMI (body mass index), kai yra žinomas žmogaus ūgis ir svoris.
let weight = 95;
let height = 1.85;
const calcBMI = (weight, height) => Math.floor(weight / (height * height));
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
document.getElementById("calculateButton").addEventListener("click", () => {
  let salary = document.getElementById("alga").value;
  let tax = document.getElementById("mokesciai").value;
  document.getElementById("salaryResultDisplay").innerText = `Alga i rankas: ${
    (((salary * (100 - tax)) / 100) * (100 - 4.3)) / 100
  }`;
});

//9 uzduotis==================================================
//termometro konverteris tarp celcijaus ir farenheito.
