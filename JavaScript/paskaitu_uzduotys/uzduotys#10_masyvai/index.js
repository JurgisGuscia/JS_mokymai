//1 uzduotis
//Susikurkite norimą masyvą su duomenimis. Iš šio masyvo išveskite pirmą ir paskutinį narį, du pasirinktus narius iš masyvo vidurio ir kiekį kiek šiame masyve yra narių.
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(
  `1 uzduotis: pirmas narys ${array1[0]}, paskutinis narys ${
    array1[array1.length - 1]
  }, 2 nariai is vidurio ${array1[Math.floor(array1.length / 2)]} ir ${
    array1[Math.floor(array1.length / 2 + 1)]
  }, nariu skaicius masyve ${array1.length}`
);

//2 uzduotis
//Susikurkite norimą masyvą su duomenimis. Išsiveskite viso šio masyvo informaciją. Pakeiskite trijų pasirinktų narių reikšmes į kitas. Išsiveskite pakeisto masyvo informaciją.
const array21 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array22 = [...array21];
array22[0] *= 15;
array22[Math.floor(array22.length / 2)] *= 15;
array22[array22.length - 1] *= 15;
console.log(
  `2 uzduotis: pradinis masyvas ${array21} pakeistas masyvas ${array22}`
);

//3 uzduotis
// 3 Susikurkite norimą tuščią masyvą. Užpildykite šį masyvą duomenimis naudojant push komandą. Išsiveskite užpildyto masyvo informaciją.
const array31 = [];
for (let i = 3; i < 100; i += 7) {
  array31.push(i);
}
console.log(`3 uzduotis: gutas masyvas ${array31}`);

//4 uzduotis
//Susikurkite tuščią masyvą. Užpildykite šį masyvą atsitiktinai sugeneruotais skaičiais. Išveskite šio masyvo informaciją.
const arrray41 = [];
for (let i = 0; i < 15; i++) {
  arrray41.push(Math.floor(Math.random() * 10));
}
console.log(`4 uzduotis: gutas masyvas ${arrray41}`);

//5 uzduotis
//Sukurkite du masyvus dviejų studentų pažymiams saugoti. Įveskite po 3-5 pažymius kiekvienam studentui (iškart kuriant masyvus arba per push funkciją). Suskaičiuokite ir išveskite jų vidurkius. Išsiaiškinkite kurio studento vidurkis didesnis ir išveskite atsakymą.
const array51 = [9, 5, 8];
const array52 = [5, 6, 8];
const average = (arr) => (arr.reduce((a, b) => a + b) / arr.length).toFixed(2);
const [avg1, avg2] = [average(array51), average(array52)];
console.log(
  `5 uzduotis: pirmo vidurkis ${avg1}, antro vidurkis ${avg2}, ${
    avg1 > avg2 ? "pirmas didesnis" : "antras didesnis"
  }`
);

//6 uzduotis
//Susikurkite masyvą studijų programų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną studijų programą atskiroje eilutėje.
const array61 = [
  "Programu sistemos",
  "Informatika",
  "Multimedija",
  "Duomenu bazes",
];
console.log(`6 uzduotis:`);
array61.forEach((item) => {
  console.log(`   -->${item}`);
});

//7 uzduotis
//Susikurkite masyvą šalių pavadinimams saugoti ir jį užpildykite duomenimis. Išveskite šalių pavadinimus atskirose eilutėse, su prierašu "šalis" ir tada nurodant šalį iš masyvo.
const array71 = [
  "Lietuva",
  "Latvija",
  "Estija",
  "Japonija",
  "Kinija",
  "Indija",
];
console.log(`7 uzduotis:`);
array71.forEach((item) => {
  console.log(`   --> Salis ${item}`);
});

//8 uzduotis
//Susikurkite masyvą įgyvendintų projektų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną projektą atskirose eilutėse, prieš kiekvieną projektą parašant kelintas tai projektas yra (pradedant 1-u).
const array81 = ["TO-DO app", "Kalendorius", "Portfolio", "Blog"];
console.log(`8 uzduotis:`);
for (let i = 0; i < array81.length; i++) {
  console.log(`     projektas nr${i + 1} -> ${array81[i]}`);
}

//9 uzduotis
//Susikurkite skaičių masyvą ir užpildykite duomenimis. Iš masyvo išveskite tik tuos skaičius, kurie yra didesni nei 5.
const array91 = [
  5, 8, 4, 1, 8, 4, 6, 8, 4, 7, 8, 5, 9, 6, 41, 5, 45, 84, 36, 51, 1, 4, 5, 6,
  8, 9, 11, 15, 51, 4, 7,
];
let str91 = "9 uzduotis: visi didesnis uz 5 -> ";
array91.forEach((item) => item > 5 && (str91 = str91 + item + ", "));
console.log(str91);

//10 uzduotis
//Susikurkite skaičių masyvą ir užpildykite jį atsitiktiniais skaičiais. Raskite visų skaičių, kurie dalinasi iš 4 sumą.
const array101 = [
  5, 8, 4, 1, 8, 4, 6, 8, 4, 7, 8, 5, 9, 6, 41, 5, 45, 84, 36, 51, 1, 4, 5, 6,
  8, 9, 11, 15, 51, 4, 7,
];
const array102 = [];
array101.forEach((item) => item % 2 === 0 && array102.push(item));
const sum102 = array102.reduce((a, b) => a + b);
console.log(`10 uzduotis: skaiciu, kurie dalinasi is 4 suma yra ${sum102}`);

//11 uzduotis
//Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite sugeneruotus duomenis ir gautą vidurkį.
const array111 = [];
for (let i = 0; i < 20; i++) {
  array111.push(Math.floor(Math.random() * 10) + 1);
}
const avg111 = array111.reduce((a, b) => a + b) / array111.length;
console.log(
  `11 uzduotis: masyvas -> ${array111}, pazymiu vidurkis -> ${avg111}`
);

//12 uzduotis
//Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite visus skaičius, kurie yra didesni nei vidurkis.
const array121 = [];
const array122 = [];
for (let i = 0; i < 20; i++) {
  array121.push(Math.floor(Math.random() * 10) + 1);
}
const avg121 = array121.reduce((a, b) => a + b) / array121.length;
array121.forEach((item) => avg121 < item && array122.push(item));
console.log(`12 uzduotis: visi pazymiai didesni uz vidurki ${array122}`);

//13 uzduotis
//Susikurkite skaičių masyvą ir užpildykite jį duomenimis. Išveskite visus skaičius atskirose eilutėse. Prie kiekvieno lyginio skaičiaus dar išvedant jo kvadratą.
const array131 = [
  5, 8, 4, 1, 8, 4, 6, 8, 4, 7, 8, 5, 9, 6, 41, 5, 45, 84, 36, 51, 1, 4, 5, 6,
  8, 9, 11, 15, 51, 4, 7,
];
console.log(`13 uzduotis: `);
array131.forEach((item) => {
  let str = item;
  item % 2 === 0 && (str = str + " kvadratas " + Math.pow(item, 2));
  console.log(str);
});

//14 uzduotis
//Susikurkite studento pažymių masyvą ir užpildykite jį duomenimis (atsitiktiniais arba kokius įrašysite). Išveskite kiekvieną pažymį atskiroje eilutėje.
//Prie kiekvieno pažymio nurodykite ar tai teigiamas, ar neigiamas pažymys. Taip pat, jeigu neigiamas pažymys, tuomet dar nurodykite kiek balų trūko iki teigiamo pažymio. Teigiamas pažymys skaitosi 5 balai.
const array141 = [
  5, 8, 4, 1, 8, 4, 6, 8, 4, 7, 8, 5, 9, 6, 4, 5, 4, 8, 6, 8, 1, 4, 5, 6, 8, 9,
  10, 5, 5, 4, 7,
];
array141.forEach((mark) =>
  mark >= 5
    ? console.log(`${mark} - teigiamas`)
    : console.log(`${mark} - neigiamas, iki teigiamo truko ${5 - mark}`)
);

// 15 Susikurkite žodžių masyvą ir užpildykite duomenimis. Išveskite visus žodžius ekrane, nurodant iš kiek raidžių kiekvienas šis žodis yra sudarytas. Papildykite skriptą taip, kad rastumėte visų raidžių kiekį (pvz yra žodžiai "medis" ir "alus", 5 ir 4 raidės atitinkamai, o jas sudėjus gaunasi 9 raidės).
let words = ["zodis", "nezodis", "programavimas", "zaidimai", "kompiuteris"];
let letterSum = 0;
words.forEach((word) => {
  console.log(`${word} -> ${word.length} raid.`);
  letterSum += word.length;
});
console.log(`Viso raidziu: ${letterSum}`);

// 16 Susikurkite skaičių masyvą ir užpildykite duomenimis. Raskite visų skaičių, kurie dalinasi iš 3 sumą ir vidurkį. Išveskite pradinius duomenis ir gautus atsakymus.
const numberArray = [];
let numberCount = 0;
let numberSum = 0;
for (let i = 0; i < 20; i++) {
  numberArray.push(Math.floor(Math.random() * 100) + 1);
}
numberArray.forEach((num) => {
  if (num % 3 === 0) {
    numberSum += num;
    numberCount++;
  }
});
console.log(
  `masyvas: ${numberArray}, 3 kartotiniu suma: ${numberSum}, vidurkis: ${
    numberSum / numberCount
  }`
);

// 17 Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, …
let words2 = ["zodis", "nezodis", "programavimas", "zaidimai", "kompiuteris"];
words2.forEach((word, index) => {
  console.log(`${index} - ${word}`);
});

// 18 Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis. Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.
let groceries = [
  "duona",
  "sviestas",
  "pienas",
  "obuoliai",
  "bananai",
  "desra",
  "aliejus",
];
console.log(`sarase yra ${groceries.length} produktai:`);
groceries.forEach((item) => {
  console.log(`- ${item}`);
});

// 19 Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir gautą vidurkį.
const grades = [];
for (let i = 0; i < 20; i++) {
  grades.push(Math.floor(Math.random() * 10) + 1);
}
let gradeSum = 0;
grades.forEach((grade) => {
  console.log(grade);
  gradeSum += grade;
});
console.log(`Vidurkis: ${gradeSum / grades.length}`);

// 20 Susikurkite masyvą kelionės nuovažiuotiems kilometrams saugoti ir užpildykite jį duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaičius reiškia kiek km kurią dieną buvo nuvažiuota). Išveskite visus nuvažiuotus per dieną kilometrus, kurie yra didesni nei 150.
const miles = [];
for (let i = 0; i < 20; i++) {
  miles.push(Math.floor(Math.random() * 1000) + 20);
}
miles.forEach((trip) => {
  trip > 150 && console.log(`${trip} myliu`);
});

// 21 Susikurkite masyvą failų pavadinimams saugoti, užpildykite jį duomenimis. Jums reikės nuskaityti šiuos failus, todėl pirma norėsite patikrinti su kuriais galite dirbti. Išveskite į ekraną tik tuos failus, kurių galūnė yra .txt arba .json tipo.
const fileArray = [
  "users.txt",
  "names.doc",
  "items.json",
  "something.js",
  "anotherone.txt",
  "somefile.html",
  "nothinghere.css",
];
fileArray.forEach((file) => {
  if (
    file.slice(file.length - 4, file.length) === ".txt" ||
    file.slice(file.length - 5, file.length) === ".json"
  ) {
    console.log(file);
  }
});

// 22 Susikurkite masyvą automobilių markėms saugoti ir užpildykite jį duomenimis. Išveskite kiekvieną automobilį atskiroje eilutėje, nurodant kiek raidžių sudaro jo pavadinimą.
const carArray = ["BMW", "Audi", "Opel", "Volvo", "Citroen"];
carArray.forEach((car) => {
  console.log(`${car} susideda is ${car.length} raidziu`);
});

// 23 Susikurkite masyvą įvykusių klaidų kodams saugoti ir užpildykite šį masyvą duomenimis. Tuomet išveskite visas sukauptas klaidas administratoriui, taip, kad jis suprastų kas per klaidos įvyko. Pavyzdžiui, jeigu yra kodas "ui87", tai kad išvestų "Grafinės sąsajos klaida navigacijoje", arba jeigu kodas "sys12", tuomet "Trūksta operatyviosios atminties sistemoje" ir pan.
const errorArray = ["123", "432", "654", "888", "999"];
errorArray.forEach((error) => {
  switch (error) {
    case "123":
      console.log("Grafinės sąsajos klaida navigacijoje");
      break;
    case "432":
      console.log("Trūksta operatyviosios atminties sistemoje");
      break;
    case "654":
      console.log("Prarastas rysys su duomenu baze");
      break;
    case "888":
      console.log("Neturi reikiamu teisiu");
      break;
    case "999":
      console.log("Per ilgas uzklausos apdorokjimo laikas");
      break;
    default:
      console.log("Klaida neatpazinta");
  }
});

// 24 Susikurkite masyvą sandėlio likučiams saugoti (kiekvienas atskiras narys masyve yra atskiros prekės likutis). Su kiekvienu likučiu paskaičiuokite per kiek dienų bus išpirktas,
//    jei per dieną vidutiniškai yra nuperkami 5 vnt. Išveskite atsakymus atskirose eilutėse, nurodant kiek yra dabar ir kiek dienų užteks jo. Pavyzdžiui, jeigu yra likučiai 74, 54 ir 32,
//    tai 74 vnt. prekės užteks maždaug 15 dienų, 54 vnt. prekės užteks maždaug 11 dienų ir t.t.
const warehouse = [70, 100, 50];
const avgSales = 5;
warehouse.forEach((ware, index) => {
  console.log(
    `${index + 1} prekes vidutiniskai uzteks: ${Math.floor(
      ware / avgSales
    )} dienoms`
  );
});

// 25 Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą atsitiktinai sugeneruotais pažymiais. Raskite vidurkį. Raskite kiek neigiamų pažymių studentas gavo (mažesnių nei 5). Išveskite visus teigiamus pažymius, gautą vidurkį ir neigiamų pažymių kiekį.
const grades2 = [];
for (let i = 0; i < 20; i++) {
  grades2.push(Math.floor(Math.random() * 10) + 1);
}
const avg3 = grades2.reduce((a, b) => a + b) / grades2.length;
const posGrades = [];
const negGrades = [];
grades2.forEach((grade) => {
  grade < 5 ? negGrades.push(grade) : posGrades.push(grade);
});
console.log(
  `teigiami pazymiai: ${posGrades}, vidurkis: ${avg3}, neigiamu pazymiu: ${negGrades.length}`
);

// 26 Susikurkite du pažymių masyvus, kur vienas masyvas reikš vieno studento pažymius, kitas masyvas kito studento pažymius. Raskite kiekvieno studento pažymių vidurkį. Išveskite abiejų studentų pažymius, vidurkius ir nurodykite kuris studentas turi didesnį vidurkį.
const student1 = [];
const student2 = [];
for (let i = 0; i < 20; i++) {
  student1.push(Math.floor(Math.random() * 10) + 1);
  student2.push(Math.floor(Math.random() * 10) + 1);
}
const student1Avg = student1.reduce((a, b) => a + b) / student1.length;
const student2Avg = student2.reduce((a, b) => a + b) / student1.length;
console.log(`Pirmo studendo pazymiai: ${student1} ir vidurkis: ${student1Avg}`);
console.log(`Antro studendo pazymiai: ${student2} ir vidurkis: ${student2Avg}`);
console.log(
  student1Avg === student2Avg
    ? `studetu vidurkiai lygus: ${student1Avg}`
    : student1Avg < student2Avg
    ? `Antro studento vidurkis didesnis: ${student2Avg}`
    : `Pirmo sutendo vidurkis aukstesnis: ${student1Avg}`
);

// 27 Susikurkite masyvą norimiems žodžiams saugoti. Užpildykite šį masyvą duomenimis. Į kitą masyvą atrinkite tuos žodžius, kurie yra trumpi (sudaro mažiau nei 5 raidės). Išveskite pradinius duomenis ir atrinktus.
const wordArray = [
  "naujas",
  "senas",
  "geras",
  "blogas",
  "yra",
  "ne",
  "zinoma",
  "varau",
];
const shortArray = [];
wordArray.forEach((word) => {
  word.length < 5 && shortArray.push(word);
});
console.log(`Pradinis masyvas: ${wordArray}, atrinktas masyvas: ${shortArray}`);
