const c = (msg) => console.log(msg);

// 1 Susikurkite masyvą, kuriame būtų pateikti mėgstamiausi valgiai. Pamėginkite masyvą papildyti informacija įvairiais būdais (pridėti naują valgį priekyje, gale, per vidurį, pasirinktoje vietoje). Pamėginkite ištrinti kažkuriuos 3 valgius (iš pasirinktų pozicijų, pvz priekio, galo ir vidurio).

const megstamiejiValgiai = [
  "Pica",
  "Šokoladas",
  "Burgeriai",
  "Salotos",
  "Ledai",
  "Kebabai",
  "Ryžiai su daržovėmis",
  "Avižiniai dribsniai",
];
c("Pirma uzduotis ==================================================");
c(`Pradinis masyvas: ${megstamiejiValgiai}`);
megstamiejiValgiai.push("Sushi");
megstamiejiValgiai.unshift("Pasta");
megstamiejiValgiai.splice(
  Math.floor(megstamiejiValgiai.length / 2),
  0,
  "Obuoliai"
);
c(`Masyvas po pridejimo: ${megstamiejiValgiai}`);
megstamiejiValgiai.pop();
megstamiejiValgiai.shift();
megstamiejiValgiai.splice(Math.floor(megstamiejiValgiai.length / 2, 1), 1);
c(`Masyvas po naikinimo: ${megstamiejiValgiai}`);

// 2 Susikurkite skaičių masyvą. Naudojant includes, patikrinkite ar masyve yra kuris nors pasirinktas skaičius (pvz 8).

const skaiciuMasyvas = [5, 12, 7, 8, 10, 3, 15, 8, 21, 19];
c("Antra uzduotis ==================================================");
c(
  `Pradinis masyvas: ${skaiciuMasyvas}, ${
    skaiciuMasyvas.includes(8) ? "Skaicius 8 jame yra" : "skaiciaus 8 jame nera"
  }`
);

// 3 Susikurkite masyvą, kuriame būtų surašyti bet kokie žodžiai. Panaudokite join metodą, kad masyvą paverstumėte į teksto eilutę. Paeksperimentuokite su skirtingais skirtukais jungiant tekstą (pvz vieną kartą panaudokite tarpą, kitą kablelius ir t.t.).

c("Trecia uzduotis ==================================================");
const zodziuMasyvas = [
  "Obuolys",
  "Automobilis",
  "Saulė",
  "Knyga",
  "Oranžinė",
  "Programavimas",
  "Kalėdos",
  "Oro balionas",
  "Žiema",
  "Jūra",
];
const eilute = zodziuMasyvas.join("");
const eilute2 = zodziuMasyvas.join(", ");
const eilute3 = zodziuMasyvas.join("--");
c(`Pradinis masyvas ${zodziuMasyvas}`);
c(`Gauta eilute 1: ${eilute}`);
c(`Gauta eilute 2: ${eilute2}`);
c(`Gauta eilute 3: ${eilute3}`);

// 4 Susikurkite kintamąjį kuriame būtų saugomas sakinys iš kelių žodžių (string tipo kintamasis). Išskaidykite šį tekstą į masyvą naudojant split metodą. Raskite kiek žodžių buvo sakinyje.

c("Ketvirta uzduotis ==================================================");
const pradiniSakinys = "Siandien labai geras oras";
const isskirtasSakinys = pradiniSakinys.split(" ");
c(`Pradinis sakinys: ${pradiniSakinys}`);
c(`Sakinyje yra ${isskirtasSakinys.length} zodz.`);

// 5 Susikurkite pažymių masyvą. Surikiuokite pažymius nuo didžiausio iki mažiausio. Išveskite tris didžiausius pažymius.

c("Penkta uzduotis ==================================================");
const pazymiai = [];
for (let i = 0; i < 10; i++) {
  pazymiai.push(Math.floor(Math.random() * 10) + 1);
}
c(`Pazymiu masyvas: ${pazymiai}`);
pazymiai.sort((a, b) => a - b);
c(`Surikiuoti pazymiai: ${pazymiai}`);
c(`Trys didziausia pazymiai: ${pazymiai.slice(pazymiai.length - 3)}`);

// 6 Susikurkite du masyvus, pirmąjame būtų saugomi biologijos pamokos studentų vardai, o antrąjame būtų saugojami matematikos pamokos studentų vardai. Apjunkite šiuos masyvų informaciją į vieną masyvą. Bonus: ar jums pavyktų išskirti tik unikalius vardus? (galima ieškoti kaip panaudoti set).

c("Sesta uzduotis ==================================================");

const biologijosStudentai = [
  "Jonas",
  "Rita",
  "Eglė",
  "Tomas",
  "Laura",
  "Gediminas",
  "Agnė",
  "Marius",
  "Gabija",
  "Simonas",
];
const matematikosStudentai = [
  "Inga",
  "Antanas",
  "Jurga",
  "Kazimieras",
  "Milda",
  "Laura",
  "Greta",
  "Paulius",
  "Aiste",
  "Martynas",
];

const apjungtas = [...biologijosStudentai, ...matematikosStudentai];
const set = new Set([...biologijosStudentai, ...matematikosStudentai]);
const apjungtasBeDublikatu = Array.from(set);
c(`Apjungtas masyvas: ${apjungtas}`);
c(`Apjungtas masyvas be dubliu: ${apjungtasBeDublikatu}`);

// 7 Susikurkite du masyvus. Pirmame masyve bus išvardinta pirmo semestro paskaitų temos, o antrame masyve - antro semestro paskaitų temos. Sujunkite šiuos masyvus naudojant spread operator, taip, kad pirmiausia būtų pateikta pirmo semestro informacija ir tada antro.

c("Septinta uzduotis ==================================================");
const pirmoSemestroTemos = [
  "Įvadas į programavimą",
  "Duomenų struktūros",
  "Algoritmai",
  "Objektinio programavimo principai",
  "Duomenų bazės",
  "Tinklai",
];
const antroSemestroTemos = [
  "Operacinės sistemos",
  "Programavimas tinkluose",
  "Daugiatraukio programavimas",
  "Web kūrimas",
  "Mobiliųjų aplikacijų kūrimas",
  "Projekto vadovavimas",
];
const sujuntasMasyvas = [...pirmoSemestroTemos, ...antroSemestroTemos];
c(`Sujungtas masyvas: ${sujuntasMasyvas}`);

// 8 Susikurkite masyvą, kuriame būtų išvardintos kelios spalvos. Padarykite šio masyvo kopiją ir duomenis iš originalaus masyvo pašalinkite. Išveskite abu masyvus, atkreipkite dėmesį į tai kad pašalinus duomenis iš pirmojo masyvo, turėjo pasinaikinti tik iš jo, o antrame viskas likti tvarkingai, o jeigu išsitrynė abiejų duomenys - pamėginkite surasti priežastį ir sutvarkyti.

c("Astunta uzduotis ==================================================");
const spalvuMasyvas = [
  "Raudona",
  "Mėlyna",
  "Žalia",
  "Geltona",
  "Violetinė",
  "Oranžinė",
  "Juoda",
  "Balta",
  "Rozinė",
  "Pilka",
];
const antrasSpalvuMasyvas = [...spalvuMasyvas];
while (spalvuMasyvas.length > 0) {
  spalvuMasyvas.pop();
}
c(`Pradinis masyvas: ${spalvuMasyvas}`);
c(`Nukopijuotas masyvas: ${antrasSpalvuMasyvas}`);

// 9 Susikurkite masyvą, kuriame būtų saugomi miestų pavadinimai. Atlikite paiešką masyve su indexOf surasdami kurioje pozicijoje yra pasirinktas miestas.

c("Devinta uzduotis ==================================================");
const miestuMasyvas = [
  "Vilnius",
  "Kaunas",
  "Klaipėda",
  "Šiauliai",
  "Panevėžys",
  "Marijampolė",
  "Alytus",
  "Utena",
  "Tauragė",
  "Telšiai",
];
c(
  miestuMasyvas.indexOf("Alytus") !== -1
    ? `Alytaus indexas: ${miestuMasyvas.indexOf("Alytus")}`
    : "Alytaus masyve nera"
);

// 10 Susikurkite bet kokį masyvą. Parašykite programą kuri išsiaiškintų ar masyve yra bent vienas dublikatas. Pvz, masyve [1, 2, 3] nėra dublikatų. O masyve [1, 2, 3, 4, 2] yra dublikatų (skaičius 2).

c("Desimta uzduotis ==================================================");
const skaiciuMasyvas2 = [5, 12, 7, 8, 10, 3, 15, 55, 21, 19];
const set2 = new Set([...skaiciuMasyvas2]);
const skaiciuMasyvas2BeDublikatu = Array.from(set2);
c(
  skaiciuMasyvas2.length === skaiciuMasyvas2BeDublikatu.length
    ? "Dublikatu masyve nera"
    : "Masyve yra dublikatu"
);

// 11 Parašykite programą, kuri galėtų masyvą išskaidyti į pasirinkto dydžio gabalėlius (chunk size). Pvz turint masyvą [1, 2, 3, 4, 5, 6] ir pasirinkus chunk size 2, turėtų gautis toks masyvas - [[1, 2], [3, 4], [5, 6]].

c("Vienuolikta uzduotis ==================================================");
function skaidytiMasyva(masyvas, chunk) {
  const naujasMasyvas = [];
  for (let i = 0; i < masyvas.length; i += chunk) {
    naujasMasyvas.push(masyvas.slice(i, i + chunk));
  }
  return naujasMasyvas;
}
const skaiciuMasyvas3 = [5, 12, 7, 8, 10, 3, 15, 8, 21, 19];
c(skaidytiMasyva(skaiciuMasyvas3, 2));

// 12 Susikurkite string tipo kintamąjį, kuriame būtų išsaugoti skaitmenys, pvz “01458”. Patikrinkite ar nurodytas “skaičius” yra palindromis, t.y. toks kuris yra vienodas tiek skaitant iš priekio, tiek iš galo (palindromio pvz: 01310). Hint: su string kintamuoju galima panaudoti ir dalį masyvų metodų.

c("Dvylikta uzduotis ==================================================");
const skaitmenuKintamasis = "014585410";
const tarpinis = skaitmenuKintamasis.split("");
tarpinis.reverse();
const palindromoTest = tarpinis.join("");
c(
  `Skaicius ${skaitmenuKintamasis} ${
    skaitmenuKintamasis === palindromoTest
      ? " yra palindromas"
      : "nera palindromas"
  }`
);

// 13 Susikurkite du skaičių masyvus. Susikurkite trečią, tačiau tuščią masyvą. Parašykite programą kuri sudėtų pirmų dviejų masyvų skaičius į trečiąjį, tačiau nekartojant jau trečiame egzistuojančių reikšmių (sudėtų tik unikalius skaičius). Pvz jeigu turime masyvus [1, 2, 3, 4] ir [2, 3, 5, 6], tai trečiasis turėtų gautis [1, 2, 3, 4, 5, 6].

c("Trylikta uzduotis ==================================================");
const masyvas1 = [];
const masyvas2 = [];
for (let i = 0; i < 10; i++) {
  masyvas1.push(Math.floor(Math.random() * 10));
  masyvas2.push(Math.floor(Math.random() * 10));
}
const set3 = new Set([...masyvas1, ...masyvas2]);
const sulietasMasyvas = Array.from(set3);
c(`Pirmas masyvas: ${masyvas1}`);
c(`Antras masyvas: ${masyvas2}`);
c(`Sulietas masyvas ${sulietasMasyvas}`);

// 14 Susikurkite du bet kokius masyvus. Raskite kurie elementai egzistuoja tiek viename tiek kitame masyve. Pvz jeigu pirmasis yra [1, 2, 3], o antrasis yra [2, 3, 4], tai atsakymas [2, 3].

c("Keturiolikta uzduotis ==================================================");
const masyvas3 = [];
const masyvas4 = [];
for (let i = 0; i < 10; i++) {
  masyvas3.push(Math.floor(Math.random() * 10));
  masyvas4.push(Math.floor(Math.random() * 10));
}
const atsakymas = [];
masyvas3.forEach((skaicius) => {
  masyvas4.indexOf(skaicius) !== -1 && atsakymas.push(skaicius);
});

const tarpinis2 = new Set([...atsakymas]);
const atsakymas2 = Array.from(tarpinis2);

c(`Pirmas masyvas: ${masyvas3}`);
c(`Antras masyvas: ${masyvas4}`);
c(`Tik pasikartojantys ${atsakymas}`);
c(`Tik pasikartojantys be dubliu ${atsakymas2}`);

// 15 Susikurkite skaičių masyvą, kuriame skaičiai nebūtinai eina didėjimo tvarka. Raskite mažiausią teigiamą skaičių kuris neegzistuoja. Pvz jeigu masyvas yra [7, 5, 1, 9, 3, 4], tai atsakymas yra 2.

c("Penkiolikta uzduotis ==================================================");
const masyvas5 = [];
for (let i = 0; i < 10; i++) {
  masyvas5.push(Math.floor(Math.random() * 10) + 1);
}
c(`Masyvas: ${masyvas5}`);
masyvas5.sort((a, b) => a - b);
for (let i = 1; i < masyvas5[masyvas5.length - 1]; i++) {
  if (masyvas5.indexOf(i) === -1) {
    c(`Maziausias teigiamas skaicius, kuris neegzistuoja: ${i}`);
    break;
  }
}

// 16 Susikurkite norimą masyvą. Apverskite šį masyvą, kad elementai eitų atvirkščiai. Pvz jeigu turime masyvą [1, 2, 3, 4], tai apvertus turime gauti [4, 3, 2, 1].

c("Sesiolikta uzduotis ==================================================");

const masyvas6 = [];
for (let i = 0; i < 10; i++) {
  masyvas6.push(Math.floor(Math.random() * 100) + 1);
}
c(`Pradinis masyvas: ${masyvas6}`);
masyvas6.reverse();
c(`Apsuktas masyvas: ${masyvas6}`);
