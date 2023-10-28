const separator = () =>
  console.log("===================================================");
// 1 uzduotis
// Sukurkite funkciją, kuri išvestų jūsų vardą ir kodėl pasirinkote programavimą. Iškvieskite šią funkciją tris kartus.
const fun11 = () => console.log("Jurgis, nes megstu spresti galvosukius");
fun11();
fun11();
fun11();
separator();

// 2 uzduotis
// Sukurkite funkciją, kuri išvestų 5 eilučių eilėraštį. Iškvieskite šią funkciją 5 kartus.
const fun21 = () =>
  console.log(
    "Akytės tau – kad verktumei,\nO kumščiai – kad kumščiuotum,\nTau keliai – kad ropotumei,\nPirštukai – kad skaičiuotum.\nNosytė – kad tekėtų,"
  );
fun21();
fun21();
fun21();
fun21();
fun21();
separator();

// 3 uzduotis
// Sukurkite tris funkcijas, kur kiekviena išvestų skirtingus tekstus. Iškvieskite visas tris funkcijas po vieną kartą.
const fun31 = () => console.log("Pirma eilute");
const fun32 = () => console.log("Antra eilute");
const fun33 = () => console.log("Trecia eilute");
fun31();
fun32();
fun33();
separator();

// 4 uzduotis
// Sukurkite dvi funkcijas, kur vienoje būtų viena teksto eilutėje, kitoje kita. Sukurkite trečią funkciją, kuri iškviestų pirmas dvi funkcijas. Iškvieskite
// šią trečiąją funkciją už visų funkcijų ribų.
const fun41 = () => console.log("pirma teskto eilute");
const fun42 = () => console.log("antra teskto eilute");
const fun43 = () => {
  fun41();
  fun42();
};
fun43();
separator();

// 5 uzduotis
// Sukurkite funkciją, kurios viduje sugeneruotumėte du atsitiktinius skaičius. Funkcijoje suskaičiuokite ir išveskite šių dviejų skaičių sumą, kartu išvedant ir
// patį atliekamą veiksmą (pvz 7 + 2 = 9). Iškvieskite šią funkciją keletą kartų.
const fun51 = () => {
  let a = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 100);
  return `${a} + ${b} = ${a + b}`;
};
console.log(fun51());
console.log(fun51());
console.log(fun51());
separator();

// 6 uzduotis
// Sukurkite ir iškvieskite funkciją, kurioje kintamuosiuose būtų saugoma informacija apie policininką (vardas, pavardė, amžius, alga, etatas, specializacija).
// Išveskite šią informaciją suformatuotai (pavyzdžiui įterpkite į sakinį, ar išveskite sąrašu ar pan.).
const fun61 = () => {
  const policeman = {
    name: "policmenas",
    surname: "geriausias",
    age: 30,
    salary: 1800,
    spec: "sniper",
  };
  console.log(
    `Policininkas: ${policeman.name} ${policeman.surname} yra ${policeman.age} amziaus ir uzdirba ${policeman.salary} dirbdamas ${policeman.spec}`
  );
};
fun61();
separator();

// 7 uzduotis
// Sukurkite funkciją, kuri išvestų 10 atsitiktinių skaičių vienoje eilutėje, skaičius atskiriant tarpu. Šią funkciją iškvieskite 5 kartus.
const fun71 = () => {
  let str = "";
  for (let i = 0; i < 10; i++) {
    str = str + Math.floor(Math.random() * 100) + " ";
  }
  console.log(str);
};
fun71();
fun71();
fun71();
fun71();
fun71();
separator();

// 8 uzduotis
// Sukurkite funkciją, kuri išvestų atsitiktinį skaičių. Už funkcijos ribų sukurkite ciklą, kurį būtų vykdomas 10 kartų. Iškvieskite sukurtą funkciją cikle. Turėtumėte pamatyti 10 atsitiktinių skaičių.
const fun81 = () => console.log(Math.floor(Math.random() * 10));
for (let i = 0; i < 10; i++) {
  fun81();
}
separator();

// 9 uzduotis
// Sukurkite funkciją pasisveikinimui, šiai funkcijai per argumentus perduokite vardą, funkcijoje išveskite tekstą labas ir gautą vardą. Sukurkite kitą funkciją, kuri irgi per argumentus gautų vardą, tačiau
// pasakytų 'viso gero' ir patį vardą. Ne funkcijose susikurkite kintamąjį vardui saugoti ir įrašykite vardą. Iškvieskite abi funkcijas, perduodant kintamąjį joms.
const fun91 = (name) => console.log(`Labas ${name}`);
const fun92 = (name) => console.log(`Viso gero ${name}`);
let myName = "Jurgis";
fun91(myName);
fun92(myName);
separator();

// 10 uzduotis
// Sukurkite funkciją, kuriai perduotumėte du skaičius. Ši funkcija turi rasti kuris skaičius yra didesnis ir išvesti gautą atsakymą, o jei skaičiai lygūs -
// tuomet išvesti, kad skaičiai lygūs. Iškvieskite šią funkciją keletą kartų, duodant skirtingus skaičius.
const fun101 = (a, b) =>
  a < b
    ? console.log(b)
    : a > b
    ? console.log(a)
    : console.log("skaiciai lygus");
fun101(5, 6);
fun101(7, 7);
fun101(30, 6);
separator();

// 11 uzduotis
// Sukurkite funkciją, kuri per argumentus gautų automobilių duomenis (markė, modelis, gamybos metai, darbinis tūris). Ši funkcija turėtų šiuos
// duomenis išvesti kaip nors gražiai formatuotai. Iškvieskite šią funkciją du kartus, perduodant skirtingus duomenis jai.
const fun111 = (car, model, year, power) => {
  console.log(`==${car}== --${model}-- ..${year}.. __${power}__`);
};
fun111("audi", "a4", 2018, 2600);
fun111("audi", "a6", 2020, 3000);
separator();

// 12 uzduotis
// Sukurkite funkciją sumai skaičiuoti, ši funkcija per argumentus turėtų gauti du skaičius, bei išvesti patį veiksmą kartu su atsakymu (pvz 7 + 5 =
// 12). Sukurkite tokias pačias funkcijas skirtumui, sandaugai ir dalmeniui rasti. Sukurkite dar vieną funkciją, kuri sugeneruotų du atsitiktinius
// skaičius, bei iškviestų kitas 4 funkcijas, perduodant joms sugeneruotus skaičius. Šią bendrąją funkciją iškvieskite keletą kartų.
const fun121 = () => {
  let a = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 100);
  fun122(a, b);
  fun123(a, b);
  fun124(a, b);
  fun125(a, b);
};
const fun122 = (a, b) => console.log(`${a} + ${b} = ${a + b}`);
const fun123 = (a, b) => console.log(`${a} - ${b} = ${a - b}`);
const fun124 = (a, b) => console.log(`${a} * ${b} = ${a * b}`);
const fun125 = (a, b) => console.log(`${a} / ${b} = ${(a / b).toFixed(2)}`);
fun121();
fun121();
fun121();
separator();

// 13 uzduotis
// Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje išveskite visus žodžius iš masyvo atskirose eilutėse, nurodant
// žodžio ilgį (simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį duomenimis. Iškvieskite sukurtą funkciją perduodant turimą masyvą.
var wordArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  "grape",
  "kiwi",
  "lemon",
  "orange",
  "pear",
  "strawberry",
];
const fun131 = (arr) => {
  arr.forEach((word) => {
    console.log(`${word}, ilgis: ${word.length}`);
  });
};
fun131(wordArray);
separator();

// 14 uzduotis
// Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų atspausdinti visus skaičius, šalia jų išvedant to skaičiaus kvadratą ir
// jį padalintą iš dviejų. Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite jį duomenimis. Iškvieskite funkciją du kartus, kiekvieną kartą
// perduodant skirtingą turimą masyvą.
var intArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const fun141 = (arr) => {
  arr.forEach((num) => {
    console.log(
      `number: ${num}, jo kvadratas: ${Math.pow(num, 2)}, jo puse: ${(
        num / 2
      ).toFixed(2)}`
    );
  });
};
fun141(intArray);
separator();

// 15 uzduotis
// Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą, bei studento vardą su pavarde. Funkcija turėtų išvesti studento vardą ir
// pavardę, jo pažymius. Taip pat, suskaičiuoti vidurkį, bei jį išvesti. Už funkcijos ribų susikurkite reikiamus kintamuosius ir masyvus, arba
// objektus studentų pažymiams saugoti ir užpildykite juos duomenimis. Iškvieskite šią funkciją perduodant visus reikalingus duomenis.
var gradesArray = [];
for (var i = 0; i < 15; i++) {
  var randomGrade = Math.floor(Math.random() * 10) + 1;
  gradesArray.push(randomGrade);
}
const fun151 = (arr, name) => {
  let avg = (arr.reduce((a, b) => a + b) / arr.length).toFixed(2);
  console.log(`Studentas: ${name}, pazymiai: ${arr}, vidurkis: ${avg}`);
};
fun151(gradesArray, "Jurgis Guscia");
separator();

// 16 uzduotis
// Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų rasti didžiausią skaičių iš masyvo bei išvesti gautą atsakymus. Taip
// pat, susikurkite funkciją, kuri per argumentus priimtų masyvą ir į jį sugeneruotų pasirinktą kiekį atsitiktinių skaičių. Susikurkite tris tuščius
// masyvus. Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus, kiekvieną kartą perduodant funkcijai vis kitą masyvą. Kai duomenys bus
// užpildyti, masyvuose esančią informaciją išsiveskite norimu būdu (per console.log arba per dar atskirą funkciją). Tuomet kvieskite didžiausio
// skaičiaus paieškos funkciją tris kartus, kiekvieną kartą perduodant skirtingą masyvą į ją.
const fun161 = (arr, num) => {
  for (let i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
};
const fun162 = (arr) => console.log(Math.max(...arr));
const arr161 = [];
const arr162 = [];
const arr163 = [];
fun161(arr161, 20);
fun161(arr162, 15);
fun161(arr163, 30);
fun162(arr161);
fun162(arr162);
fun162(arr163);
separator();

// 17 uzduotis
// Susikurkite funkciją, kuri grąžintų bet kokį jūsų norimą sakinį. Iškvieskite šią funkciją ir išspausdinkite gautus rezultatus.
const fun171 = () => "mano norimas sakinys";
console.log(fun171());
separator();

// 18 uzduotis
// Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą skaičių. Iškvieskite šią funkciją kelis kartus ir gautus atsakymus išveskite kokiu norite būdu.
const fun181 = () => Math.floor(Math.random() * 100);
console.log(fun181());
console.log(fun181());
console.log(fun181());
console.log(fun181());
console.log(fun181());
separator();

// 19 uzduotis
// Susikurkite funkciją, kuri per argumentus priimtų studento vardą ir vidurkį. Ši funkcija turėtų sugeneruoti iš to sakinį (pvz Studentas Tomas
// turi vidurkį 8.7) ir tai grąžinti kaip atsakymą. Iškvieskite šią funkciją bent porą kartų, perduodant vis skirtingus duomenis. Gautus atsakymus išveskite.
const fun191 = (name, avg) => `Studentas ${name} turi vidurki ${avg}`;
console.log(fun191("Jurgis Guscia", 8.91));
console.log(fun191("Tas kitas kaimietis", 7.91));
separator();

// 20 uzduotis
// Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų surasti duoto skaičiaus mažiausią daliklį (skaičių iš kurio dalinasi be liekanos). Už
// funkcijos ribų sukite ciklą nuo 10 iki 30 ir kiekvienoje ciklo iteracijoje iškvieskite šią funkciją, perduodant ciklo kintamąjį.
const fun201 = (a) => {
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      return i;
    }
  }
  return a;
};
for (let i = 10; i <= 30; i++) {
  console.log(fun201(i));
}
separator();

// 21 uzduotis
// Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų patikrinti ar šis skaičius yra pirminis (grąžina true jei pirminis, ir false jei ne
// pirminis). Už funkcijos ribų sukite ciklą nuo 2 iki 15, kiekvienoje ciklo iteracijoje išveskite tikrinamą skaičių ir šalia jo iškviestos funkcijos
// atsakymą (pvz 10 false, 11 true, ...).
const fun211 = (num) => {
  let divs = 0;
  for (let i = 2; i < num; i++) {
    num % i === 0 && divs++;
  }
  return divs === 0;
};
for (let i = 2; i <= 15; i++) {
  console.log(`${i} : ${fun211(i)}`);
}
separator();

// 22 uzduotis
// Susikurkite bent 3 matematines funkcijas, priimančias reikiamus argumentus (pvz suma iš dviejų skaičių, suma iš trijų skaičių, skirtumas,
// sandauga, dalyba) ir grąžinančias atitinkamus atsakymus. Taip pat, susikurkite funkciją, kurioje būtų sugeneruojamas reikiamas kiekis
// atsitiktinių skaičių ir išvedami visų skaičiavimų atsakymai su veiksmais (iškviečiant atitinkamas kitas funkcijas ir perduodant reikiamus
// kintamuosius) (pagal 23 pavyzdį). Iškvieskite šią pagrindinę funkciją bent kartą.
const fun221 = () => Math.floor(Math.random() * 100);
const fun222 = (a, b) => `${a} + ${b} = ${a + b}`;
const fun223 = (a, b) => `${a} - ${b} = ${a - b}`;
const fun224 = (a, b) => `${a} * ${b} = ${a * b}`;
const fun225 = () => {
  console.log(fun222(fun221(), fun221()));
  console.log(fun223(fun221(), fun221()));
  console.log(fun224(fun221(), fun221()));
};
fun225();
separator();

// 23 uzduotis
// Susikurkite funkciją kuri priimtų skaičių masyvą per argumentus. Ši funkcija turėtų rasti duotųjų skaičių sumą ir grąžinti gautą atsakymą. Už
// funkcijos ribų susikurkite du skaičių masyvus ir užpildykite juos duomenimis. Iškvieskite turimą funkciją du kartus, jai abu kartus
// perduodant skirtingą masyvą. Gautus atsakymus išveskite. Taip pat, raskite kuri suma gavosi didesnė ir išveskite atsakymą.
let randomIntArray = [];
let randomIntArray2 = [];
for (let i = 0; i < 15; i++) {
  let randomInt = Math.floor(Math.random() * 100);
  randomIntArray.push(randomInt);
}
for (let i = 0; i < 15; i++) {
  let randomInt = Math.floor(Math.random() * 100);
  randomIntArray2.push(randomInt);
}
const fun231 = (arr) => arr.reduce((a, b) => a + b);
console.log(fun231(randomIntArray));
console.log(fun231(randomIntArray2));
console.log(
  fun231(randomIntArray) > fun231(randomIntArray2)
    ? "pirmas didesnis"
    : "antras didesnis"
);
separator();

// 24 uzduotis
// Susikurkite funkciją kuri per argumentus priimtų žodžių masyvą. Ji turėtų rasti ir grąžinti ilgiausią žodį masyve. Už funkcijos ribų susikurkite žodžių
// masyvą. Iškvieskite funkciją perduodant jai žodžių masyvą. Gautą atsakymą išveskite, taip pat, nurodykite šio žodžio ilgį.
var wordList = [
  "apple",
  "banana",
  "cherry",
  "date",
  "grape",
  "kiwi",
  "lemon",
  "mango",
  "orange",
  "pear",
  "strawberry",
  "watermelon",
];
const fun241 = (arr) => {
  let longest = 0;
  arr.forEach((word, index) => {
    word.length > arr[longest].length && (longest = index);
  });
  return longest;
};
let longest = fun241(wordList);
console.log(
  `Ilgiausias zodis: ${wordList[longest]}, ${wordList[longest].length} raid.`
);

separator();

// 25 uzduotis
// Susikurkite funkciją kuri per argumentus priimtų pažymių masyvą. Ji turėtų patikrinti ar visi pažymiai teigiami: jei visi teigiami turėtų grąžintų
// true kaip atsakymą, o jei yra bent vienas neigiamas - false. Susikurkite du pažymių masyvus. Iškvieskite šią funkciją du kartus, abu kartus
// perduodant skirtingus masyvus. Gautus atsakymus paverskite į tekstą (jeigu gavote true - išveskite tekstą 'visi studento pažymiai teigiami', jei
// false - 'studentas turi bent vieną neigiamą pažymį'). Šiam iškonvertavimui iš true/false į tekstą galite pamėginti pasikurti atskirą funkciją, jai perduoti
// kitos funkcijos atsakymą.
let gradeArray = [];
let gradeArray2 = [];
const fun251 = (arr, n) => {
  for (let i = 0; i < n; i++) {
    let randomGrade = Math.floor(Math.random() * 10) + 1;
    arr.push(randomGrade);
  }
};
fun251(gradeArray, 7);
fun251(gradeArray2, 7);
const fun252 = (arr) => {
  let ans = true;
  arr.forEach((grade) => {
    if (grade < 5) {
      ans = false;
    }
  });
  return ans;
};
fun252(gradeArray)
  ? console.log("Visi pazymiai yra teigiami")
  : console.log("Studentas turi bent viena neigiama pazymi.");
fun252(gradeArray2)
  ? console.log("Visi pazymiai yra teigiami")
  : console.log("Studentas turi bent viena neigiama pazymi.");

separator();
