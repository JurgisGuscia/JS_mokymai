const c = (msg) => console.log(msg);

const fillArray = (arr, length, boundry) => {
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * boundry) + 1);
  }
};

const convertSomeToNegatives = (masyvas) => {
  for (let i = 0; i < masyvas.length; i++) {
    if (Math.random() * 2 > 1) {
      masyvas[i] *= -1;
    }
  }
};
// 1 Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių (naudojant find metodą), kuris yra lyginis. Pvz, jeigu masyvas bus [3, 7, 2, 9, 6, 4], tai atsakymas turi gautis 2, nes 3 ir 7 buvo nelyginiai.
c(
  "=============================Pirmas uzduotis ======================================="
);
const masyvas = [];
fillArray(masyvas, 10, 100);
c(`Masyvas: ${masyvas}`);
let pirmasLyginis = "---";
pirmasLyginis = masyvas.find((number) => {
  if (number % 2 === 0) {
    return number;
  }
});
c(`Pirmas lyginis: ${pirmasLyginis}`);

// 2 Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Suraskite jame pirmą skaičių, kuris yra teigiamas (daugiau nei 0). Pvz, jeigu masyvas bus [-3, 0, 5, -8, 2, 7], atsakymas turi gautis 5.
c(
  "=============================Antra uzduotis ======================================="
);
const masyvas2 = [];
fillArray(masyvas2, 10, 100);
convertSomeToNegatives(masyvas2);
c(`Masyvas: ${masyvas2}`);
let pirmasTeigiamas = "nera";
pirmasTeigiamas = masyvas2.find((number) => {
  if (number > 0) {
    return number;
  }
});
c(`Pirmas teigiamas: ${pirmasTeigiamas}`);

// 3 Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Suraskite jame pirmą skaičių kuris yra neigiamas ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu masyvas bus [8, -2, 3, 4], tai atsakymas yra 1, nes skaičius -2 yra indekse 1. O jeigu masyvas bus [7, 5, 3], tai atsakymas bus -1, nes masyve nėra neigiamo skaičiaus.
c(
  "=============================Trecia uzduotis ======================================="
);
const masyvas3 = [];
fillArray(masyvas3, 10, 100);
convertSomeToNegatives(masyvas3);
let pirmasNeigiamas = -1;
for (let i = 0; i < masyvas3.length; i++) {
  if (masyvas3[i] < 0) {
    pirmasNeigiamas = i;
    break;
  }
}
c(`Masyvas: ${masyvas3}`);
c(`Pirmo neigiamo indeksas: ${pirmasNeigiamas}`);

// 4 Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra lygus arba didesnis 10 ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu turite masyvą [8, 12, 5, 3, 15, 9], atsakymas bus 1.
c(
  "=============================Ketvirta uzduotis ======================================="
);
const masyvas4 = [];
fillArray(masyvas4, 10, 30);
let pirmasDidesnisUzdesimt = -1;
for (let i = 0; i < masyvas4.length; i++) {
  if (masyvas4[i] >= 10) {
    pirmasDidesnisUzdesimt = i;
    break;
  }
}
c(`Masyvas: ${masyvas4}`);
c(`Pirmo didesnio uz 10 indeksas: ${pirmasDidesnisUzdesimt}`);

// 5 Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris dalintųsi iš 3 ir būtų didesnis nei 10, ir jį išveskite. Pvz, jeigu masyvas yra [5, 9, 12, 7, 18, 4], atsakymas bus 12.
c(
  "=============================Penkta uzduotis ======================================="
);
const masyvas5 = [];
fillArray(masyvas5, 10, 30);
c(`Masyvas: ${masyvas5}`);
let pirmasDalinasiIs3 = -1;
for (let i = 0; i < masyvas5.length; i++) {
  if (masyvas5[i] > 10 && masyvas5[i] % 3 === 0) {
    pirmasDalinasiIs3 = masyvas5[i];
    break;
  }
}
c(`Pirmas dalinasi is 3 ir didesnis uz 10: ${pirmasDalinasiIs3}`);

// 6 Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra neigiamas ir yra lyginis. Pvz, jeigu masyvas [5, 8, -3, -6, 4, 7], tai atsakymas yra -6.
c(
  "=============================Sesta uzduotis ======================================="
);
const masyvas6 = [];
fillArray(masyvas6, 10, 30);
convertSomeToNegatives(masyvas6);
let pirmasNeigiamasLyginis = -1;
for (let i = 0; i < masyvas6.length; i++) {
  if (masyvas6[i] < 0 && masyvas6[i] % 2 === 0) {
    pirmasNeigiamasLyginis = masyvas6[i];
    break;
  }
}
c(`Masyvas: ${masyvas6}`);
c(`Pirmas neigiamas ir lyginis: ${pirmasNeigiamasLyginis}`);

// 7 Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra teigiami (didesni nei 0). Pvz, jeigu masyvas [7, 5, 9, 8], tai atsakymas true, o jeigu masyvas [8, 9, -3, 2], tai atsakymas false.
c(
  "=============================Septinta uzduotis ======================================="
);
const masyvas7 = [];
fillArray(masyvas7, 10, 30);
c(`Maysvas: ${masyvas7}`);
let visiTeigiami = true;
for (let i = 0; i < masyvas7.length; i++) {
  if (masyvas7[i] < 0) {
    visiTeigiami = false;
    break;
  }
}
c(
  `${
    visiTeigiami
      ? "Masyve visi skaiciai teigiami"
      : "Masyve yra neigiamu skaiciu"
  }`
);

// 8 Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra lyginiai. Pvz, jeigu masyvas yra [2, 4, 8, 6], tai atsakymas true, o jeigu masyvas [7, 3, 6, 8, 10], tai atsakymas false.
c(
  "=============================Astunta uzduotis ======================================="
);
const masyvas8 = [];
fillArray(masyvas8, 10, 30);
let visiLyginiai = true;
for (let i = 0; i < masyvas8.length; i++) {
  if (masyvas8[i] % 2 !== 0) {
    visiTeigiami = false;
    break;
  }
}
c(`Masyvas: ${masyvas8}`);
c(
  `${
    visiTeigiami
      ? "Masyve visi skaiciai lyginiai"
      : "Masyve yra nelyginiu skaiciu"
  }`
);

// 9 Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve yra bent vienas skaičius, kuris yra mažesnis nei 5. Pvz, jeigu masyvas [8, 20, 5, 97, 44], tai atsakymas false, bet jeigu masyvas [20, 3, 7, 9], tai atsakymas true.
c(
  "=============================Devinta uzduotis ======================================="
);
const masyvas9 = [];
fillArray(masyvas9, 10, 30);
let yraMazesniuNei5 = false;
for (let i = 0; i < masyvas9.length; i++) {
  if (masyvas9[i] < 5) {
    yraMazesniuNei5 = true;
    break;
  }
}
c(`Masyvas: ${masyvas9}`);
c(
  `${
    yraMazesniuNei5
      ? "Masyve yra skaiciu mazesniu us 5"
      : "Masyve nera skaiciu mazesniu us 5"
  }`
);

// 10 Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Patikrinkite ar šiame masyve yra bent vienas teigiamas skaičius (didesnis nei 0). Pvz, jeigu masyvas [7, 2, -3, -6], tai atsakymas yra true, o jeigu masyvas yra [-8, -6, -4], tai atsakymas yra false.
c(
  "=============================Desimta uzduotis ======================================="
);
const masyvas10 = [];
fillArray(masyvas10, 10, 30);
convertSomeToNegatives(masyvas10);
let masyveYraTeigiamu = false;
for (let i = 0; i < masyvas10.length; i++) {
  if (masyvas10[i] > 0) {
    masyveYraTeigiamu = true;
    break;
  }
}
c(`Masyvas: ${masyvas10}`);
c(
  `${
    masyveYraTeigiamu
      ? "Masyve yra bent vienas teigiamas skaicius"
      : "Masyve nera teigiamu skaiciu"
  }`
);
// 11 Susikurkite žodžių masyvą. Patikrinkite ar visi šiame masyve esantys žodžiai yra sudaryti iš 3 ar daugiau raidžių. Pvz, jeigu masyvas yra [‘antis’, ‘ožka’, ‘arklys’], tai atsakymas true, o jeigu masyvas [‘abc’, ‘de’, ‘fgia’], tai atsakymas false.
c(
  "=============================Vienuolikta uzduotis ======================================="
);
const medziai = [
  "azuolas",
  "berzas",
  "klevas",
  "sakalas",
  "egle",
  "pusis",
  "kadagys",
  "liepa",
  "kastonas",
];
let visiIlgi = true;
for (let i = 0; i < medziai.length; i++) {
  if (medziai[i].length < 3) {
    visiIlgi = false;
    break;
  }
}
c(`Masyvas: ${medziai}`);
c(
  `${
    visiIlgi
      ? "Visi sodziai masyve ilgesni nei 3 raidziu"
      : "Masyve yra zodziu trumpesniu nei 3 raides"
  }`
);

// 12 Susikurkite žodžių masyvą. Patikrinkite ar šiame masyve yra bent vienas žodis prasidedantis raide a (turi surasti nepriklausomai tai didžioji ar mažoji raidė). Pvz, jeigu masyvas [‘bananas’, ‘agurkas’, ‘pomidoras’], tai atsakymas true, o jeigu masyvas [‘kaunas’, ‘vilnius’, ‘klaipėda’], tai atsakymas false.
c(
  "=============================Dvylikta uzduotis ======================================="
);
const medziai2 = [
  "Azuolas",
  "berzas",
  "klevas",
  "sakalas",
  "egle",
  "pusis",
  "kadagys",
  "liepa",
  "kastonas",
];
let yraKasPrasidedaARaide = false;
for (let i = 0; i < medziai2.length; i++) {
  const pirma = medziai2[i][0].toLocaleLowerCase();
  if (pirma === "a") {
    yraKasPrasidedaARaide = true;
    break;
  }
}
c(`Masyvas: ${medziai2}`);
c(
  `${
    yraKasPrasidedaARaide
      ? "Bent vienas zodis masyve prasideda 'a' raide"
      : "Nei vienas zodis masyve neprasideda 'a' raide"
  }`
);

// 13 Susikurkite skaičių masyvą. Patikrinkite ar visi šiame masyve esantys skaičiai yra teigiami ir ar yra bent vienas skaičius, kuris būtų lyginis. Pvz, masyvas [3, 7, 2, 9, 6, 4], grąžina true, o masyvas [4, -2, 3, 7] grąžina false.
c(
  "=============================Trylikta uzduotis ======================================="
);
const masyvas11 = [];
fillArray(masyvas11, 10, 30);
let visiTeigiami2 = true;
let yraLyginis = false;
masyvas11.forEach((number) => {
  if (number < 0) {
    visiTeigiami2 = false;
  }
  if (number % 2 === 0) {
    yraLyginis = true;
  }
});
c(`Masyvas: ${masyvas11}`);
if (visiTeigiami2 && yraLyginis) {
  c("Visi skaicia masyve teigiami ir yra bent vienas lyginis");
} else {
  c("Masyve yra neigiamu skaiciu arba nera nei vieno lyginio");
}

// 14 Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Išfiltruokite skaičius, kurie yra teigiami. Pvz, jeigu masyvas yra [4, -3, -2, 8, 9, 5], tai išfiltruotas variantas yra [4, 8, 9, 5].
c(
  "=============================Keturiolikta uzduotis ======================================="
);
const masyvas12 = [];
fillArray(masyvas12, 10, 30);
convertSomeToNegatives(masyvas12);
c(`Masyvas: ${masyvas12}`);
const masyvas13 = masyvas12.filter((number) => number > 0);
c(`Filtruotas masyvas: ${masyvas13}`);

// 15 Susikurkite skaičių masyvą, kuriame būtų saugomi prekės reitingai (skaičiai nuo 1 iki 5). Išfiltruokite tuos įrašus, kur balų yra 1 arba 2. Pvz, jeigu masyvas [5, 1, 4, 5, 1, 3, 4, 5, 2], tai išfiltravus gausis [1, 1, 2].
c(
  "=============================Penkiolikta uzduotis ======================================="
);
const masyvas14 = [];
fillArray(masyvas14, 10, 5);
c(`Masyvas: ${masyvas14}`);
const masyvas15 = masyvas14.filter((number) => number < 3);
c(`Filtruotas masyvas: ${masyvas15}`);

// 16 Susikurkite skaičių masyvą, kuriame būtų ir teigiamų ir neigiamų skaičių. Išfiltruokite tik tuos skaičius, kurie yra teigiami ir yra lyginiai. Pvz, jeigu turite masyvą [5, -3, 2, 7, 8, -4, 1] tai turi gautis [2, 8].
c(
  "=============================Sesiolikta uzduotis ======================================="
);
const masyvas16 = [];
fillArray(masyvas16, 10, 5);
convertSomeToNegatives(masyvas16);
c(`Masyvas: ${masyvas16}`);
const masyvas17 = masyvas16.filter((number) => {
  return number > 0 && number % 2 === 0 ? 1 : 0;
});
c(`Filtruotas masyvas: ${masyvas17}`);

// 17 Susikurkite šalių pavadinimų masyvą. Išfiltruokite tik tas šalis, kurių pavadinime yra raidė b (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu turite masyvą [‘Belgija’, ‘Lietuva’, ‘Graikija’, ‘Bulgarija’], tai turi gautis [‘Belgija’, ‘Bulgarija’].
c(
  "=============================Septiniolikta uzduotis ======================================="
);
const salys = [
  "JAV",
  "Kanada",
  "Vokietija",
  "Prancuzija",
  "Japonija",
  "Brazilija",
  "Indija",
  "Kinija",
  "Rusija",
  "Australija",
];
c(`Masyvas: ${salys}`);
const salys2 = salys.filter((salis) => salis.toLowerCase().includes("b"));
c(`Filtruotas masyvas: ${salys2}`);

// 18 Susikurkite skaičių masyvą. Išfiltruokite lyginius skaičius ir juos padvigubinkite. Pvz, jeigu masyvas yra [3, 7, 2, 9, 6, 4], išfiltravus gausis [2, 6, 4], o padvigubinus galutinis variantas bus [4, 12, 8].
c(
  "=============================Astuoniolikta uzduotis ======================================="
);
const masyvas18 = [];
fillArray(masyvas18, 10, 10);
const masyvas19 = masyvas18
  .filter((number) => number % 2 === 0)
  .map((number) => Math.pow(number, 2));
c(`Masyvas: ${masyvas18}`);
c(`Filtruotas masyvas: ${masyvas19}`);

// 19 Susikurkite skaičių masyvą. Kiekvieną skaičių jame padidinkite per 1. Pvz, jeigu masyvas yra [7, 8, 9, 2, 3], tai turi gautis [8, 9, 10, 3, 4].
c(
  "=============================Deviniolikta uzduotis ======================================="
);
const masyvas20 = [];
fillArray(masyvas20, 10, 10);
const masyvas21 = masyvas20.map((number) => number + 1);
c(`Masyvas: ${masyvas20}`);
c(`Filtruotas masyvas: ${masyvas21}`);

// 20 Susikurkite žodžių masyvą. Kiekvieną žodį iš šio masyvo paverskite į variantą iš didžiųjų raidžių. Pvz, jeigu turite masyvą [‘bananas’, ‘baba’, ‘klėtis’], tai turi gautis [‘BANANAS’, ‘BABA’, ‘KLĖTIS’].
c(
  "=============================Dvidesimta uzduotis ======================================="
);
const zodziai = [
  "JAV",
  "Kanada",
  "Vokietija",
  "Prancuzija",
  "Japonija",
  "Brazilija",
  "Indija",
  "Kinija",
  "Rusija",
  "Australija",
];
const zodziai2 = zodziai.map((zodis) => zodis.toUpperCase());
c(`Masyvas: ${zodziai}`);
c(`Filtruotas masyvas: ${zodziai2}`);

// 21 Susikurkite skaičių masyvą. Gaukite visų skaičių sumą. Pvz, jeigu masyvas yra [2, 3, 1], tai atsakymas 6.
c(
  "=============================Dvidesimt pirma uzduotis ======================================="
);
const masyvas22 = [];
fillArray(masyvas22, 10, 10);
c(`Masyvas: ${masyvas22}`);
c(`Masyvo suma: ${masyvas22.reduce((a, b) => a + b)}`);

// 22 Susikurkite skaičių masyvą. Atrinkite tik tuos skaičius, kurie yra lyginiai ir gaukite jų sumą. Pvz, jeigu masyvas yra [1, 2, 3, 4, 5], atrinkus gausis [2, 4], o šių skaičių suma ir galutinis atsakymas yra 6.
c(
  "=============================Dvidesimt antra uzduotis ======================================="
);
const masyvas23 = [];
fillArray(masyvas23, 10, 10);
c(`Masyvas: ${masyvas23}`);
c(
  `Masyvo suma: ${masyvas23
    .filter((number) => number % 2 === 0)
    .reduce((a, b) => a + b)}`
);

// 23 Susikurkite žodžių masyvą. Pasiimkite kiekvieno žodžio pirmą raidę, ją padarykite iš didžiosios raidės. Pvz, jeigu turite masyvą [‘šuo’, ‘katė’, ‘gyvatė’], tai turi gautis [‘Š’, ‘K’, ‘G’].
c(
  "=============================Dvidesimt trecia uzduotis ======================================="
);
const medziai3 = [
  "azuolas",
  "berzas",
  "klevas",
  "sakalas",
  "egle",
  "pusis",
  "kadagys",
  "liepa",
  "kastonas",
];
const medziai4 = medziai3.map(
  (zodis) => zodis.charAt(0).toUpperCase() + zodis.slice(1)
);
c(`Masyvas: ${medziai3}`);
c(`Pakeistas masyvas: ${medziai4}`);

// 24 Susikurkite žodžių masyvą. Raskite kiek šiame masyve yra žodžių, kurie susideda iš 5 ar daugiau raidžių. Pvz, jeigu masyvas yra [‘bananas’, ‘persikas’, ‘abc’, ‘de’], tai atrinkus žodžius gausis [‘bananas’, ‘persikas’], o tokių žodžių yra ir galutinis atsakymas skaitosi 2.
c(
  "=============================Dvidesimt ketvirta uzduotis ======================================="
);
const medziai5 = [
  "azuolas",
  "berzas",
  "klevas",
  "sakalas",
  "egle",
  "pusis",
  "kadagys",
  "liepa",
  "kastonas",
];
const medziai6 = medziai5.filter((zodis) => zodis.length >= 5);
c(`Masyvas: ${medziai5}`);
c(`Zodziu ilgesniu nei 4 raides: ${medziai6.length}`);

// 25 Susikurkite žodžių masyvą. Raskite kiekvieno žodžio simbolių kiekį. Pvz, jeigu masyvas yra [‘obelis’, ‘liepa’, ‘eglė’, ‘uosis’], tai turi gautis [6, 5, 4, 5].
c(
  "=============================Dvidesimt penkta uzduotis ======================================="
);
const medziai7 = [
  "azuolas",
  "berzas",
  "klevas",
  "sakalas",
  "egle",
  "pusis",
  "kadagys",
  "liepa",
  "kastonas",
];
const medziai8 = medziai7.map((zodis) => zodis.length);
c(`Masyvas: ${medziai7}`);
c(`Pakeistas masyvas: ${medziai8}`);

// 26 Susikurkite masyvą, kur string pavidalu kiekviename elemente būtų sudėti vardai ir amžiai. Ištraukite iš tokio masyvo tik vardus. Pvz, jeigu masyvas yra [‘Tomas 34’, ‘Jonas 20’, ‘Gintarė 40’, ‘Inga 24’], tai turi gautis [‘Tomas’, ‘Jonas’, ‘Gintarė’, ‘Inga’].
c(
  "=============================Dvidesimt sesta uzduotis ======================================="
);
const zmones = ["Jonas 25", "Petras 30", "Ona 22", "Marytė 28"];
const zmones2 = zmones.map((zmogus) => {
  return (vardas = zmogus.split(" ")[0]);
});
c(`Masyvas: ${zmones}`);
c(`Pakeistas masyvas: ${zmones2}`);

// 27 Susikurkite masyvą, kur string pavidalu kiekviename elemente būtų sudėti vardai ir amžiai. Ištraukite iš tokio masyvo tik amžius, juos paverskite į skaičius ir raskite bendrą sumą. Pvz, jeigu masyvas yra [‘Tomas 34’, ‘Jonas 20’, ‘Gintarė 40’, ‘Inga 24’], tai išrinkus info gausis [34, 20, 40, 24] ir suradus sumą turėsime 118.
c(
  "=============================Dvidesimt sesta uzduotis ======================================="
);
const zmones3 = ["Jonas 25", "Petras 30", "Ona 22", "Marytė 28"];
const zmones4 = zmones.map((zmogus) => {
  return (vardas = zmogus.split(" ")[1]);
});
c(`Masyvas: ${zmones3}`);
c(`Pakeistas masyvas: ${zmones4}`);

// 28 Susikurkite masyvą prekių likučiams saugoti (tik likučių skaičiai). Išrinkite visus likučius, kurių liko mažai (mažiau nei 5 vnt.), ties kiekvienu likučiu paskaičiuokite kiek trūksta iki ribos. Pvz, jeigu turite masyvą [74, 2, 54, 3, 1, 87], išfiltravus liks [2, 3, 1], o paskaičiavus kiek kiekvieno trūksta iki 5, gausis [3, 2, 4].
c(
  "=============================Dvidesimt astunta uzduotis ======================================="
);
const masyvas24 = [];
fillArray(masyvas24, 10, 10);
const maziLikuciai = masyvas24.filter((likutis) => likutis < 5);
const likuciaiIki5 = maziLikuciai.map((likutis) => 5 - likutis);
c(`Masyvas: ${masyvas24}`);
c(`Mazi likuciai: ${maziLikuciai}`);
c(`Trukumai iki 5: ${likuciaiIki5}`);

// 29 Susikurkite masyvą studento pažymiams saugoti. Suraskite kiek studentas turi gerų pažymių (8 ar daugiau). Pvz, jeigu masyvas yra [7, 8, 10, 6, 5, 9], išfiltravus gausis [8, 10, 9], o tokių pažymių jis turi 3.
c(
  "=============================Dvidesimt astunta uzduotis ======================================="
);
const pazymiai = [];
fillArray(pazymiai, 10, 10);
const filtruotiPazymiai = pazymiai.filter((pazymys) => pazymys >= 8);
c(`Masyvas: ${pazymiai}`);
c(`Geri pazymiai: ${filtruotiPazymiai}, ju yra ${filtruotiPazymiai.length}`);

// 30 Susikurkite žodžių masyvą. Suraskite kiek iš viso šiame masyve per visus žodžius yra raidžių a (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu masyvas yra [‘bananas’, ‘obelis’, ‘automobilis’], gausis kad yra 4 raidės.
c(
  "=============================Dvidesimt astunta uzduotis ======================================="
);
const medziai9 = [
  "azuolas",
  "berzas",
  "klevas",
  "sakalas",
  "egle",
  "pusis",
  "kadagys",
  "liepa",
  "kastonas",
];
let visoARaidziu = 0;
const regex = /a/gi;
medziai9.forEach((zodis) => {
  const zodisLowerCase = zodis.toLowerCase();
  const yraARaidziu = [...zodisLowerCase.matchAll(regex)];
  visoARaidziu += yraARaidziu.length;
});

c(`Masyvas: ${medziai9}`);
c(`Viso "a" raidziu: ${visoARaidziu}`);
