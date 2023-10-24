// 1. Parašyti for, kuris išvestų kiekvieną skaičių pradedant nuo 0 ir baigiant 10.
for (let i = 0; i < 11; i++) {
  console.log(i);
}

// 2. Parašyti for, kuris išvestų kas antrą skaičių pradedant 0 ir baigiant 15.
for (let i = 0; i < 16; i += 2) {
  console.log(i);
}

// 3. Parašyti for, kuris išvestų kas trečią skaičių, pradedant 1 ir baigiant 20. Kiekvieną skaičių apskliausti laužtiniais skliaustais. Pvz.: [1][4][7]...
for (let i = 1; i < 21; i += 3) {
  console.log(`[${i}]`);
}

// 4. Parašyti for, kuris eitų pro kiekvieną skaičių nuo 1 iki 20. Jame apsirašyti if sąlygą, kuri patikrintų ar dabartinis skaičius dalinasi iš 4, jei taip tai šį skaičių išvesti.
for (let i = 1; i < 21; i++) {
  i % 4 === 0 && console.log(i);
}

// 5. Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai
// tinkami, tuomet vykdyti for, kuris atskirose eilutėse išvestų kiekvieną skaičių iš tų rėžių, bei atskiriant tarpu - tų skaičių kvadratus.
const [start, end] = [1, 10];
if (start < end) {
  for (let i = start; i < end; i++) {
    console.log(`skaicius: ${i}, jo kvadratas ${i * i}`);
  }
}

// 6. Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai
// tinkami, tuomet vykdyti for, kuris iš duotų skaičių išvestų visus nelyginius skaičius arba tuos, kurie dalinasi iš 8.
for (let i = start; i < end; i++) {
  (i % 2 != 0 || i % 8 === 0) && console.log(i);
}

// 7. (papildomai, sunkiau) Be daugybos veiksmo programoje, sudauginti du skaičius.
const [num1, num2] = [4, 5];
let sum = 0;
for (let i = 0; i < num1; i++) {
  sum += num2;
}
console.log(sum);

// 8. Raskite visų skaičių nuo 1 iki 100 sumą.
let sum2 = 0;
for (let i = 1; i <= 100; i++) {
  sum2 += i;
}
console.log(sum2);

// 9. Raskite visų lyginių skaičių nuo 20 iki 50 sumą.
let sum3 = 0;
for (let i = 20; i <= 50; i++) {
  i % 2 === 0 && (sum3 += i);
}
console.log(sum3);

// 10.Raskite visų nelyginių skaičių nuo 30 iki 60 sumą.
let sum4 = 0;
for (let i = 30; i <= 60; i++) {
  i % 2 != 0 && (sum4 += i);
}
console.log(sum4);

// 11.Rasti visų skaičių, žemesnių už 1000 ir kurie dalinasi iš 3 arba 5, sumą.
// Pavyzdys:
// Visi skaičiai mažesni už 10 ir kurie dalinasi iš 3 arba 5 yra: 3, 5, 6, 9.
// Šių skaičių suma yra 23.
// Turite gauti 233168 atsakymą.
let sum5 = 0;
for (let i = 1; i < 1000; i++) {
  (i % 3 === 0 || i % 5 === 0) && (sum5 += i);
}
console.log(sum5);

// 12.The "Fizz-Buzz test" is an interview question designed to help filter out the
// 99.5% of programming job candidates who can't seem to program their
// way out of a wet paper bag. The text of the programming assignment is
// as follows:
// "Write a program that prints the numbers from 1 to 100. But for multiples
// of three print “Fizz” instead of the number and for the multiples of five
// print “Buzz”. For numbers which are multiples of both three and five print
// “FizzBuzz”."
for (let i = 1; i <= 100; i++) {
  i % 3 === 0 && i % 5 === 0
    ? console.log("FizzBuzz")
    : i % 3 === 0
    ? console.log("Fizz")
    : i % 5 === 0
    ? console.log("Buzz")
    : console.log(i);
}

// 13.(sunkesnė) Parašyti for ciklą, kuris išvestų norimą kiekį fibonačiaus skaičių
// į ekraną. Fibonačiaus sekoje kiekvienas skaičius yra lygus prieš jį ėjusių
// dviejų skaičių sumai: 1, 1, 2, 3, 5, 8, 13, 21...
let fibbNum = 20;
let [fibb1, fibb2] = [1, 1];
let current;
console.log(fibb1);
console.log(fibb2);
for (let i = 0; i < fibbNum; i++) {
  current = fibb1 + fibb2;
  [fibb1, fibb2] = [fibb2, current];
  console.log(current);
}
