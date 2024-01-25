const c = (msg) => console.log(msg);

// 1 Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, …

const zodziai = [
  "Grafas",
  "Automobilis",
  "Šuo",
  "Ledinis",
  "Spalva",
  "Pusryčiai",
];
c("Pirma uzduotis =====================================");
zodziai.forEach((zodis, index) => {
  c(`${index} - ${zodis}`);
});

// 2 Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis. Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.

var pirkiniuSarasas = ["Pienas", "Duona", "Obuoliai", "Kiaušiniai", "Kava"];

c("Antra uzduotis =====================================");
c(`Viso pirkiniu: ${pirkiniuSarasas.length}`);
pirkiniuSarasas.forEach((pirkinys) => {
  c(`- ${pirkinys}`);
});

// 3 Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir gautą vidurkį.

var studentoPazymiai = [];
for (let i = 0; i < 10; i++) {
  studentoPazymiai.push(Math.floor(Math.random() * 10) + 1);
}
const vidurkis =
  studentoPazymiai.reduce((a, b) => a + b) / studentoPazymiai.length;
c("Trecia uzduotis =====================================");
c(`Pazymiai: ${studentoPazymiai}, jo vidurkis: ${vidurkis}`);

// 4 Susikurkite masyvą kelionės nuovažiuotiems kilometrams saugoti ir užpildykite jį duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaičius reiškia kiek km kurią dieną buvo nuvažiuota). Išveskite visus nuvažiuotus per dieną kilometrus, kurie yra didesni nei 150.

const nuvaziuotiKilometrai = [120, 145, 90, 200, 80];
const filtruotasNuvaziuotiKilometrai = nuvaziuotiKilometrai.filter(
  (diena) => diena > 150
);
c("Ketvirtas uzduotis =====================================");
c(`Filtruotas sarasas: ${filtruotasNuvaziuotiKilometrai}`);

// 5 Susikurkite masyvą failų pavadinimams saugoti, užpildykite jį duomenimis. Jums reikės nuskaityti šiuos failus, todėl pirma norėsite patikrinti su kuriais galite dirbti. Išveskite į ekraną tik tuos failus, kurių galūnė yra .txt arba .json tipo.

const failuPavadinimai = [
  "ProtingasisTelefonas.doc",
  "Nuotrauka.jpg",
  "Finansai.json",
  "ProjektoPlanas.txt",
  "Prezentacija.ppt",
];
const atfiltruotiFailai = failuPavadinimai.filter(
  (failas) => failas.endsWith(".txt") || failas.endsWith(".json")
);
c("Penktas uzduotis =====================================");
c(`Tinkami failai: ${atfiltruotiFailai}`);

// 6 Susikurkite masyvą automobilių markėms saugoti ir užpildykite jį duomenimis. Išveskite kiekvieną automobilį atskiroje eilutėje, nurodant kiek raidžių sudaro jo pavadinimą.

const automobiliuMarkes = ["Toyota", "Ford", "Honda", "BMW", "Volkswagen"];
c("Sesta uzduotis =====================================");

automobiliuMarkes.forEach((auto) => {
  c(`${auto} ${auto.length}`);
});

// 7 Susikurkite masyvą įvykusių klaidų kodams saugoti ir užpildykite šį masyvą duomenimis. Tuomet išveskite visas sukauptas klaidas administratoriui, taip, kad jis suprastų kas per klaidos įvyko. Pavyzdžiui, jeigu yra kodas "ui87", tai kad išvestų "Grafinės sąsajos klaida navigacijoje", arba jeigu kodas "sys12", tuomet "Trūksta operatyviosios atminties sistemoje" ir pan.

const klaiduKodai = ["e15", "e25", "e35", "e45", "e55"];
c("Septinta uzduotis =====================================");

klaiduKodai.forEach((klaida) => {
  switch (klaida) {
    case "e15":
      c("Nera failo");
      break;
    case "e25":
      c("Bloga ivestis");
      break;
    case "e35":
      c("Nerastas vartotojas");
      break;
    case "e45":
      c("Neturite teisiu");
      break;
    case "e55":
      c("Nepavyko prisijungti");
      break;
    default:
      c("Nerasta klaida");
  }
});

// 8 Susikurkite masyvą sandėlio likučiams saugoti (kiekvienas atskiras narys masyve yra atskiros prekės likutis). Su kiekvienu likučiu paskaičiuokite per kiek dienų bus išpirktas, jei per dieną vidutiniškai yra nuperkami 5 vnt. Išveskite atsakymus atskirose eilutėse, nurodant kiek yra dabar ir kiek dienų užteks jo. Pavyzdžiui, jeigu yra likučiai 74, 54 ir 32, tai 74 vnt. prekės užteks maždaug 15 dienų, 54 vnt. prekės užteks maždaug 11 dienų ir t.t.

const sandelioLikuciai = [100, 51, 30, 75, 120];
c("Astunta uzduotis =====================================");
sandelioLikuciai.forEach((likutis) => {
  c(`${likutis} vnt. prekes uzteks mazdaug ${Math.ceil(likutis / 5)} dienu.`);
});

// 9 Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą atsitiktinai sugeneruotais pažymiais. Raskite vidurkį. Raskite kiek neigiamų pažymių studentas gavo (mažesnių nei 5). Išveskite visus teigiamus pažymius, gautą vidurkį ir neigiamų pažymių kiekį.

const studentoPazymiai2 = [];
for (let i = 0; i < 10; i++) {
  studentoPazymiai2.push(Math.floor(Math.random() * 10) + 1);
}
const studentoVidurkis =
  studentoPazymiai2.reduce((a, b) => a + b) / studentoPazymiai2.length;
const teigiamiPazymiai = studentoPazymiai2.filter((pazymys) => pazymys > 4);
c("Devinta uzduotis =====================================");
c(
  `Teigiami pazymiai: ${teigiamiPazymiai}, studento vidurkis: ${studentoVidurkis}, viso neigiamu pazymiu: ${
    studentoPazymiai2.length - teigiamiPazymiai.length
  }`
);

// 10 Susikurkite du pažymių masyvus, kur vienas masyvas reikš vieno studento pažymius, kitas masyvas kito studento pažymius. Raskite kiekvieno studento pažymių vidurkį. Išveskite abiejų studentų pažymius, vidurkius ir nurodykite kuris studentas turi didesnį vidurkį.

const studentoPazymiai3 = [];
const studentoPazymiai4 = [];
for (let i = 0; i < 10; i++) {
  studentoPazymiai3.push(Math.floor(Math.random() * 10) + 1);
  studentoPazymiai4.push(Math.floor(Math.random() * 10) + 1);
}
const pirmoVidurkis =
  studentoPazymiai3.reduce((a, b) => a + b) / studentoPazymiai3.length;
const antroVidurkis =
  studentoPazymiai4.reduce((a, b) => a + b) / studentoPazymiai4.length;
c("Desimta uzduotis =====================================");

c(`Pirmo pazymiai: ${studentoPazymiai3}, jo vidurkis: ${pirmoVidurkis}`);
c(`Antro pazymiai: ${studentoPazymiai4}, jo vidurkis: ${antroVidurkis}`);
c(
  pirmoVidurkis > antroVidurkis
    ? "Pirmo vidurkis aukstenis"
    : pirmoVidurkis < antroVidurkis
    ? "Antro vidurkis aukstesnis"
    : "Ju vidurkiai lygus"
);

// 11 Susikurkite masyvą norimiems žodžiams saugoti. Užpildykite šį masyvą duomenimis. Į kitą masyvą atrinkite tuos žodžius, kurie yra trumpi (sudaro mažiau nei 5 raidės). Išveskite pradinius duomenis ir atrinktus.

const norimiZodziai = [
  "JavaScript",
  "Programavimas",
  "Informatika",
  "Kodavimas",
  "Sukurimas",
  "Labas",
  "Katė",
  "Rytas",
  "Laukas",
  "Elnias",
];

const filtruotiNorimiZodziai = norimiZodziai.filter(
  (zodis) => zodis.length < 5
);
c("Vienuolikta uzduotis =====================================");
c(`Pradinis masyvas: ${norimiZodziai}`);
c(`Atfiltruotas masyvas: ${filtruotiNorimiZodziai}`);
