// 1. Išveskite visus skaičius nuo 1 iki 20.
let num = 0;
while (num < 20) {
  console.log(++num);
}
// 2. Išveskite visus skaičius nuo 1 iki 50. Prie kiekvieno lyginio skaičiaus parašykite žodį „lyginis“, o prie kiekvieno nelyginio – „nelyginis“.
let num2 = 1;
while (num2 <= 50) {
  num2 % 2 === 0
    ? console.log(`${num2} lyginis`)
    : console.log(`${num2} nelyginis`);
  num2++;
}

// 3. Išveskite visus skaičius nuo 25 iki 50. Vietoj skaičių, kurie dalinasi iš 3 išveskite tekstą „skaičius {skaičius} dalinasi iš 3“.
let num3 = 25;
while (num3 <= 50) {
  num3 % 3 === 0
    ? console.log(`skaicius ${num3} dalinas is 3`)
    : console.log(num3);
  num3++;
}

// 4. Išvedinėkite visus skaičius nuo 1 iki tol kol pasitaikys skaičius, kuris dalinasi iš 3 ir iš 5.
let num4 = 1;
while (true) {
  if (num4 % 3 === 0 && num4 % 5 === 0) {
    break;
  } else {
    console.log(num4);
  }
  num4++;
}

// 5. Iš skaičių nuo 1 iki 100, raskite visų lyginių skaičių sumą.
let sum5 = 0;
let counter = 1;
while (counter <= 100) {
  counter % 2 === 0 ? (sum5 += counter++) : counter++;
}
console.log(sum5);

// 6. Žemiau parodytą pavyzdį pakeiskite taip, kad toje pačioje eilutėje išvestų ne tik skaičių, bet ir jo kvadratą:
// let skaicius = 1;
// while (skaicius < 5) {
// console.log(skaicius);
// skaicius++;
// }

let skaicius = 1;
while (skaicius < 5) {
  console.log(skaicius, Math.pow(skaicius, 2));
  skaicius++;
}

// 7. Išveskite atsitiktinį kiekį atsitiktinių skaičių.
let numberCount = Math.floor(Math.random() * 20 + 1);
while (numberCount > 0) {
  console.log(Math.floor(Math.random() * 100 + 1));
  numberCount--;
}

// 8. Išveskite atsitiktinį kiekį atsitiktinių skaičių. Raskite šių skaičių sumą.
let numberCount2 = Math.floor(Math.random() * 20 + 1);
let randomSum = 0;
while (numberCount2 > 0) {
  let x = Math.floor(Math.random() * 100 + 1);
  console.log(x);
  randomSum += x;
  numberCount2--;
}
console.log(`Suma: ${randomSum}`);

// 9. Sukurkite 3 kintamuosius skirtingų prekių kiekiui sekti. Kiekvienos ciklo
// iteracijos metu bus nupirkti skirtingi ir atsitiktiniai kiekiai šių prekių (gali
// būti ir nieko nenupirkta: Math.floor(Math.random() * 10) be + 1
// dalies). Įsitikinkite, kad nebūtų nupirkta daugiau prekių nei turima
// inventoriuje. Pardavinėkite tol kol nieko neliks.
let [stock1, stock2, stock3] = [50, 20, 100];
while (stock1 + stock2 + stock3 > 0) {
  let [sold1, sold2, sold3] = [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ];
  console.log(
    `buvo ${stock1}, nupirkta ${stock1 < sold1 ? stock1 : sold1} liko ${
      stock1 < sold1 ? (stock1 = 0) : stock1 - sold1
    }`
  );
  stock1 <= 0
    ? (stock1 = 0)
    : stock1 < sold1
    ? (stock1 = 0)
    : (stock1 -= sold1);

  console.log(
    `buvo ${stock2}, nupirkta ${stock2 < sold2 ? stock2 : sold2} liko ${
      stock2 < sold2 ? (stock2 = 0) : stock2 - sold2
    }`
  );
  stock2 <= 0
    ? (stock2 = 0)
    : stock2 < sold2
    ? (stock2 = 0)
    : (stock2 -= sold2);

  console.log(
    `buvo ${stock3}, nupirkta ${stock3 < sold3 ? stock3 : sold3} liko ${
      stock3 < sold3 ? (stock3 = 0) : stock3 - sold3
    }`
  );
  stock3 <= 0
    ? (stock3 = 0)
    : stock3 < sold3
    ? (stock3 = 0)
    : (stock3 -= sold3);
  console.log("=================================");
}

// 10.(sudėtingesnė) Išvedinėkite visus skaičius nuo 1 iki kol rasite tokį, kuris yra pirminis.
let testNumber = 1;
while (true) {
  let dividers = 0;
  for (let i = 2; i < testNumber + 1; i++) {
    testNumber % i === 0 && dividers++;
  }
  if (dividers === 1) {
    console.log(`found a prime: ${testNumber}`);
    break;
  } else {
    console.log(testNumber);
    testNumber++;
  }
}
