const c = (msg) => console.log(msg);
// 1 Susikurkite norimą masyvą su duomenimis. Iš šio masyvo išveskite pirmą ir paskutinį narį, du pasirinktus narius iš masyvo vidurio ir kiekį kiek šiame masyve yra narių.

const masyvas1 = [1, 4, 67, 2, 4, 99, 87, 4, 6, 7, 43, 3, 4, 2, 8, 5, 7, 0, 6];

c("Pirmas uzduotis ======================================");
c(`Pirmas ir paskutinis: ${masyvas1[0]},  ${masyvas1[masyvas1.length - 1]}`);
c(
  `Du is vidurio: ${masyvas1.slice(
    masyvas1.length / 2,
    masyvas1.length / 2 + 2
  )}`
);
c(`Masyvo ilgis: ${masyvas1.length}`);

// 2 Susikurkite norimą masyvą su duomenimis. Išsiveskite viso šio masyvo informaciją. Pakeiskite trijų pasirinktų narių reikšmes į kitas. Išsiveskite pakeisto masyvo informaciją.

const masyvas2 = [1, 4, 67, 2, 4, 99, 87, 4, 6, 7, 43, 3, 4, 2, 8, 5, 7, 0, 6];
c("Antra uzduotis =======================================");
c(`Masyvas: ${masyvas2}`);
masyvas2[0] = 999;
masyvas2[1] = 999;
masyvas2[2] = 999;
c(`Pakeistas masyvas: ${masyvas2}`);

// 3 Susikurkite norimą tuščią masyvą. Užpildykite šį masyvą duomenimis naudojant push komandą. Išsiveskite užpildyto masyvo informaciją.

const masyvas3 = [];
for (let i = 0; i < 20; i++) {
  masyvas3.push(i);
}
c("Trecia uzduotis ======================================");
c(`Uzpildytas masyvas: ${masyvas3}`);

// 4 Susikurkite tuščią masyvą. Užpildykite šį masyvą atsitiktinai sugeneruotais skaičiais. Išveskite šio masyvo informaciją.

const masyvas4 = [];
for (let i = 0; i < 20; i++) {
  masyvas4.push(Math.round(Math.random() * 100));
}
c("Ketvirta uzduotis ====================================");
c(`Uzpildytas masyvas: ${masyvas4}`);

// 5 Sukurkite du masyvus dviejų studentų pažymiams saugoti. Įveskite po 3-5 pažymius kiekvienam studentui (iškart kuriant masyvus arba per push funkciją). Suskaičiuokite ir išveskite jų vidurkius. Išsiaiškinkite kurio studento vidurkis didesnis ir išveskite atsakymą.

c("Penkta uzduotis ======================================");

const masyvas5 = [];
const masyvas6 = [];

for (let i = 0; i < 5; i++) {
  masyvas5.push(Math.round(Math.random() * 10) + 1);
  masyvas6.push(Math.round(Math.random() * 10) + 1);
}
const pirmoVid = masyvas5.reduce((a, b) => a + b) / masyvas5.length;
const antroVid = masyvas6.reduce((a, b) => a + b) / masyvas5.length;
c(`Pirmo vidurkis: ${pirmoVid}`);
c(`Antro vidurkis: ${antroVid}`);
c(
  pirmoVid > antroVid
    ? "Pirmo vidurkis didesnis"
    : pirmoVid < antroVid
    ? "Antro vidurkis didesnis"
    : "Vidurkiai lygus."
);
