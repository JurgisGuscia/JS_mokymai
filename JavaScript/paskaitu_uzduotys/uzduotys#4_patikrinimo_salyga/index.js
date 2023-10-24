const c = (comment) => console.log(comment);
//1 uzduotis. Susikurkite tris kintamuosius skaičiams saugoti. Parašykite šias atskiras if sąlygas
//      1. Ar pirmas ir antras skaičiai yra lygūs?
//      2. Ar antras ir trečias skaičiai yra lygūs?
//      3. Ar pirmas skaičius yra didesnis už antrąjį?
//      4. Ar antras skaičius yra didesnis už dvigubą trečiojo skaičiaus reikšmę (trečias skaičius padaugintas iš 2)?
//      5. Ar pirmas skaičius yra lyginis (ar dalinasi iš 2)?
//      6. Ar antras skaičius yra nelyginis (ar nesidalina iš 2)?
//      7. Ar trečias skaičius yra teigiamas (didesnis už 0)?
//      8. Ar pirmas skaičius yra neigiamas (mažesnis už 0)?
//      9. Ar antras skaičius dalinasi iš 4?
//      10. Ar trečias skaičius dalinasi iš 8?
const [n1, n2, n3] = [1, 5, 8];
const pirmas1 = n1 === n2 ? "lygus" : "nelygus";
const pirmas2 = n2 === n3 ? "lygus" : "nelygus";
const pirmas3 = n1 > n2 ? "pirmas didesnis" : "pirmas mazesnis";
const pirmas4 = n2 > n3 * 2 ? "pirmas didenis" : "pirmas mazesnis";
const pirmas5 = n1 % 2 === 0 ? "lyginis" : "nelyginis";
const pirmas6 = n1 % 2 != 0 ? "nelyginis" : "lyginis";
const pirmas7 = n3 > 0 ? "daugiau uz 0" : "maziau uz 0";
const pirmas8 = n1 < 0 ? "neigiamas" : "teigiamas";
const pirmas9 = n2 % 4 === 0 ? "dalinas is 4" : "nesidalina is 4";
const pirmas10 = n3 % 8 === 0 ? "dalinas is 8" : "nesidalina is 8";

// 2.Susikurkite kintamąjį vartotojo amžiui saugoti. Patikrinkite ar amžius yra didesnis arba lygus 18-ai, jei taip - išveskite “jūs galite balsuoti”.
const amzius = 22;
c(amzius >= 18 ? "jus galite balsuoti" : "balsuoti negalite");

// 3. Susikurkite kelis kintamuosius saugoti pažymiams. Raskite šių pažymių vidurkį. Patikrinkite ar vidurkis teigiamas (daugiau arba lygu 5-iems), jei taip - išveskite “vidurkis teigiamas”.
const [p1, p2, p3, p4, p5] = [5, 4, 6, 8, 8];
const vidurkis = (p1 + p2 + p3 + p4 + p5) / 5;
c(vidurkis >= 5 ? "vidurkis teigiamas" : "vidurkis neigiamas");

// 4. Susikurkite skaičiaus kintamąjį. Atlikite šiuos patikrinimus ir veiksmus:
//      1. Jei skaičius dalinasi iš 5, tuomet išveskite šio skaičiaus daugybos lentelę nuo 1 iki 5.
//      2. Jei skaičius lyginis, tuomet išveskite šį skaičių, jo kvadratą ir jį padalintą iš 2.
//      3. Jei skaičius nesidalina iš 7, tuomet susikurkite antrąjį kintamąjį, išveskite šių dviejų skaičių sumą, skirtumą, sandaugą, dalmenį.
const number = 89;
if (number % 5 === 0) {
  for (let i = 1; i < 5 + 1; i++) {
    c(i * number);
  }
} else if (number % 2 === 0) {
  c(`${number}, ${number * number}, ${(number * number) / 2}`);
} else if (number % 7 != 0) {
  let number2 = 7;
  c(
    `${number + number2}, ${number - number2}, ${number * number2}, ${
      number / number2
    }`
  );
}

// 5. Susikurkite tris skaičių kintamuosius. Patikrinkite šias sąlygas (naudojant else if dalis):
//      1. Ar pirmas skaičius didesnis už antrą?
//      2. Ar antras skaičius didesnis už trečią?
//      3. Ar trečias skaičius didesnis už pirmą?
//      4. Ar pirmi du skaičiai yra lygūs?
//      5. Ar paskutiniai du skaičiai yra lygūs?
//      6. Ar pirmas skaičius yra lygus 0?
//      7. Ar antras skaičius neigiamas?
//      8. Ar trečias skaičius teigiamas?

const [num1, num2, num3] = [3, 5, 8];
if (num1 > num2) {
  c(1);
} else if (num2 > num3) {
  c(2);
} else if (num3 > num1) {
  c(3);
} else if (num1 === num2) {
  c(4);
} else if (num2 === num3) {
  c(5);
} else if (num1 === 0) {
  c(6);
} else if (num2 < 0) {
  c(7);
} else if (num3 > 0) {
  c(8);
}

// 6. Susikurkite kintamąjį egzamino pažymiui saugoti [0-10]. Naudojant else if dalis patikrinkite šias sąlygas ir išveskite atitinkamą tekstą:
//      1. Jei pažymys yra lygus 10 išvesti “puiku”.
//      2. Jei pažymys yra lygus arba didesnis nei 9 išvesti “labai gerai”.
//      3. Jei pažymys yra lygus arba didesnis nei 7 išvesti “gerai”.
//      4. Jei pažymys yra lygus arba didesnis nei 5 išvesti “patenkinamai”.
//      5. Jei pažymys mažesnis nei 5 išvesti “egzaminas neišlaikytas”.
const paz = 7;
if (paz === 10) {
  c("puiku");
} else if (paz === 9) {
  c("labai gerai");
} else if (paz >= 7) {
  c("gerai");
} else if (paz >= 5) {
  c("patenkinamai");
} else {
  c("egzaminas neislaikytas");
}

// 7. Susikurkite skaičiaus kintamąjį. Patikrinkite ar jis yra lyginis, jei taip išveskite vieną informaciją, jei ne - kitą.
const number7 = 8;
c(number7 % 2 === 0 ? "lyginis" : "nelyginis");

// 8. Susikurkite skaičiaus kintamąjį. Patikrinkite ar šis skaičius dalinasi iš 7, jei taip išveskite vieną tekstą, jei ne - kitą.
const number8 = 11;
c(number8 % 7 === 0 ? "dalinasi is 7" : "nesidalina is 7");

// 9. Susikurkite kintamąjį, kuriame nurodytumėte kelią iki norimo failo. Patikrinkite ar šis failas yra .js tipo, jei taip išveskite vieną tekstą, jei ne -kitą.
const path = "./build/src/js/main.js";
const pathEnd = path.slice(path.length - 3, path.length);
c(pathEnd === ".js" ? "failas js tipo" : "failas nera js tipo");

// 10.Susikurkite skaičiui saugoti skirtą kintamąjį. Tikrinkite (naudojant visas if sąlygos dalis):
//      1. Ar skaičius yra lyginis?
//      2. Ar dalinasi iš 5?
//      3. Ar skaičius lygus 3?
//      4. Jeigu nieko nepavyko rasti, išveskite klaidos pranešimą.
let number10 = 41;
if (number10 % 2 === 0) {
  c("skaicius lyginis");
} else if (number10 % 5 === 0) {
  c("skaicius dalinas is 5");
} else if (number10 % 3 === 0) {
  c("skaicius dalinas is 3");
} else {
  c("ivyko klaida");
}

// 11.Susikurkite tris skaičius. Tikrinkite (naudojant visas if sąlygos dalis):
//      1. Ar pirmi du skaičiai lygūs?
//      2. Ar pirmas ir trečias skaičiai lygūs?
//      3. Ar trečias skaičius didesnis už pirmą?
//      4. Ar antras skaičius lygus dvigubai trečio skaičiaus reikšmei?
//      5. Ar pirmas skaičius dalinasi iš 3?
//      6. Jei nieko nepavyko rasti, išveskite klaidos pranešimą.
const [n11, n12, n13] = [17, 55, 1];
if (n11 === n12) {
  c("pirmas is antras lygus");
} else if (n12 === n13) {
  c("antras is trecias lygus");
} else if (n13 > n11) {
  c("trecias didenis uz pirma");
} else if (n12 === n13 * 2) {
  c("antras dvigubai didesnis uz trecia");
} else if (n11 % 3 === 0) {
  c("pirmas dalinasi is 3");
} else {
  c("ivyko klaida");
}

// 12.Susikurkite tris skaičius. Suraskite kuris iš šių skaičių yra didžiausias.
const [n14, n15, n16] = [17, 55, 1];
let max = n14;
n15 > max && (max = n15);
n16 > max && (max = n16);
c(max);

// 13.Susikurkite tris skaičius. Suraskite kuris iš šių skaičių yra mažiausias.
const [n17, n18, n19] = [17, 55, 1];
let min = n17;
n18 < min && (min = n18);
n19 < min && (min = n19);
c(min);

// 14.Susikurkite trijų egzaminų rezultatų kintamuosius. Suraskite pažymių vidurkį. Atlikite šiuos patikrinimus:
//      1. ar gautas vidurkis yra [8-10];
//      2. ar gautas vidurkis yra [5-8);
//      3. ar gautas vidurkis yra < 5.
const [n20, n21, n22, n23, n24] = [8, 4, 5, 7, 9];
let avg = (n20 + n21 + n22 + n23 + n24) / 5;
c(avg >= 8 ? `${avg}, -> 1` : avg >= 5 ? `${avg}, -> 2` : `${avg}, -> 3`);

// 15.Susikurkite du skaičius. Patikrinkite (naudojant 4 atskirus if’us):
//      1. ar pirmas skaičius yra didesnis už antrąjį arba yra lygus 0;
//      2. ar antras skaičius yra didesnis už pirmąjį arba yra lygus 5;
//      3. ar pirmas skaičius yra didesnis už antrąjį ir yra lygus 20;
//      4. ar antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100;
const [num25, num26] = [7, 25];
num25 > num26 || num25 === 0
  ? c("pirmas didesnis arba lygus 0")
  : c("pirmas mazesnis ir nelygus 0");
num25 < num26 || num25 === 5
  ? c("antras didesnis arba lygus 5")
  : c("antras mazesnis is nelygus 5");
num25 > num26 && num25 === 20
  ? c("pirmas didesnis ir lygus 20")
  : c("pirmas mazensis arba nelygus 20");
num25 < num26 && num25 < 100
  ? c("antras didesnis uz pirma ir mazesnis uz 100")
  : c("antras mazesnis uz pirma arba didesnis uz 100");
