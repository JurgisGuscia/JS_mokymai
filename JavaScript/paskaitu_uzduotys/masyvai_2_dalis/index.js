const c = (msg) => console.log(msg);

// 1 Susikurkite masyvą studijų programų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną studijų programą atskiroje eilutėje.

const studijuProgramos = [
  "Informatika",
  "Elektronika",
  "Matematika",
  "Cheminė inžinerija",
  "Fizika",
  "Ekonomika",
  "Biologija",
  "Psichologija",
];
c("Pirma uzduotis =====================================");
studijuProgramos.forEach((programa) => c(programa));

// 2 Susikurkite masyvą šalių pavadinimams saugoti ir jį užpildykite duomenimis. Išveskite šalių pavadinimus atskirose eilutėse, su prierašu "šalis" ir tada nurodant šalį iš masyvo.

const salys = [
  "Lietuva",
  "Latvija",
  "Estija",
  "Lenkija",
  "Vokietija",
  "Prancūzija",
  "Jungtinė Karalystė",
  "Ispanija",
  "Italija",
  "Graikija",
];
c("Antra uzduotis =====================================");
salys.forEach((salis) => c(`Salis ${salis}`));

// 3 Susikurkite masyvą įgyvendintų projektų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną projektą atskirose eilutėse, prieš kiekvieną projektą parašant kelintas tai projektas yra (pradedant 1-u).

const igyvendintiProjektai = [
  "Svetainės atnaujinimas",
  "Mobiliosios programėlės kūrimas",
  "Duomenų analizė ir ataskaitų kūrimas",
  "E-komercijos platformos plėtra",
  "Socialinio tinklo integracija",
  "Didžiųjų duomenų (Big Data) analizė",
  "Virtuvinio asistento kūrimas",
  "Blockchain technologijų integracija",
  "Veiklos valdymo sistema",
  "Integracija su IoT įrenginiais",
];
c("Trecia uzduotis =====================================");
igyvendintiProjektai.forEach((projektas, index) =>
  c(`${index + 1} ${projektas}`)
);

// 4 Susikurkite skaičių masyvą ir užpildykite duomenimis. Iš masyvo išveskite tik tuos skaičius, kurie yra didesni nei 5.

const skaiciuMasyvas = [2, 5, 8, 12, 15, 20, 25, 30, 35, 40];
const filtruotasSkaiciuMasyvas = skaiciuMasyvas.filter(
  (skaicius) => skaicius > 5
);
c("Ketvirta uzduotis =====================================");
c(`Atfiltruotas masyvas: ${filtruotasSkaiciuMasyvas}`);

// 5 Susikurkite skaičių masyvą ir užpildykite jį atsitiktiniais skaičiais. Raskite visų skaičių, kurie dalinasi iš 4 sumą.

const skaiciuMasyvas2 = [2, 5, 8, 12, 15, 20, 25, 30, 35, 40];
const filtruotasSkaiciuMasyvas2 = skaiciuMasyvas.filter(
  (skaicius) => skaicius % 4 === 0
);
c("Penkta uzduotis =====================================");
c(`Atfiltruotas masyvas: ${filtruotasSkaiciuMasyvas2}`);

// 6 Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite sugeneruotus duomenis ir gautą vidurkį.
const pazymiai = [];

for (let i = 0; i < 10; i++) {
  pazymiai.push(Math.floor(Math.random() * 10) + 1);
}

c("Sesta uzduotis =====================================");
c(`Pradinis masyvas: ${pazymiai}`);
c(`Pazymiu vidurkis: ${pazymiai.reduce((a, b) => a + b) / pazymiai.length}`);

// 7 Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite visus skaičius, kurie yra didesni nei vidurkis.
const pazymiai2 = [];

for (let i = 0; i < 10; i++) {
  pazymiai2.push(Math.floor(Math.random() * 10) + 1);
}
const vidurkis2 = pazymiai2.reduce((a, b) => a + b) / pazymiai2.length;
const atfiltruotasPazymiuMasyvas2 = pazymiai2.filter(
  (pazymys) => pazymys > vidurkis2
);
c("Septinta uzduotis =====================================");
c(`Didesni uz vidurki: ${atfiltruotasPazymiuMasyvas2}`);

// 8 Susikurkite skaičių masyvą ir užpildykite jį duomenimis. Išveskite visus skaičius atskirose eilutėse. Prie kiekvieno lyginio skaičiaus dar išvedant jo kvadratą.

const skaiciai = [2, 5, 8, 13, 21, 34, 55, 89, 144, 233];
c("Astunta uzduotis =====================================");
skaiciai.forEach((skaicius) => {
  c(skaicius % 2 === 0 ? `${skaicius} ${skaicius * skaicius}` : `${skaicius}`);
});

// 9 Susikurkite studento pažymių masyvą ir užpildykite jį duomenimis (atsitiktiniais arba kokius įrašysite). Išveskite kiekvieną pažymį atskiroje eilutėje. Prie kiekvieno pažymio nurodykite ar tai teigiamas, ar neigiamas pažymys. Taip pat, jeigu neigiamas pažymys, tuomet dar nurodykite kiek balų trūko iki teigiamo pažymio. Teigiamas pažymys skaitosi 5 balai.

const studentoPazymiai = [];

for (var i = 0; i < 10; i++) {
  studentoPazymiai.push(Math.floor(Math.random() * 10) + 1);
}
c("Devinta uzduotis =====================================");
studentoPazymiai.forEach((pazymys) => {
  c(
    pazymys >= 5
      ? `${pazymys} teigiamas`
      : `${pazymys} neigiamas, iki teigiamo truko ${5 - pazymys}`
  );
});

// 10 Susikurkite žodžių masyvą ir užpildykite duomenimis. Išveskite visus žodžius ekrane, nurodant iš kiek raidžių kiekvienas šis žodis yra sudarytas. Papildykite skriptą taip, kad rastumėte visų raidžių kiekį (pvz yra žodžiai "medis" ir "alus", 5 ir 4 raidės atitinkamai, o jas sudėjus gaunasi 9 raidės).

var zodziai = [
  "Obuolys",
  "Kompaktiškas",
  "Programavimas",
  "Oranžinė",
  "Stalas",
];
let raidziuSuma = 0;
c("Desimta uzduotis =====================================");

zodziai.forEach((zodis) => {
  c(`${zodis} ${zodis.length}`);
  raidziuSuma += zodis.length;
});
c(`Visu raidziu suma: ${raidziuSuma}`);

// 11 Susikurkite skaičių masyvą ir užpildykite duomenimis. Raskite visų skaičių, kurie dalinasi iš 3 sumą ir vidurkį. Išveskite pradinius duomenis ir gautus atsakymus.

const skaiciai2 = [2, 5, 8, 13, 21, 34, 55, 89, 144, 233];
c("Vienuolikta uzduotis =====================================");
const filtruotasSkaiciai2 = skaiciai2.filter((skaicius) => skaicius % 3 === 0);
c(`Pradiniai duomenys: ${skaiciai2}`);
c(
  `Skaiciu, kurie dalinasi is 3 suma: ${filtruotasSkaiciai2.reduce(
    (a, b) => a + b
  )}`
);
c(
  `Skaiciu, kurie dalinasi is 3 vidurkis: ${
    filtruotasSkaiciai2.reduce((a, b) => a + b) / filtruotasSkaiciai2.length
  }`
);
