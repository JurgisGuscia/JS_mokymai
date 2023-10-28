// 1 uzduotis
// Sukurkite objektą studento duomenims saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: vardas, pavardė, amžius, studijų programa, atsiskaitytų kreditų skaičius, pažymiai, amžius, ūgis, kelintame kurse
// mokosi, kurioje mokykloje mokosi. Šiuos duomenis galite grupuoti į vidinius objektus arba visus išrašyti atskirai. Išveskite šią informaciją per
// vieną console.log(). Taip pat, pamėginkite išvesti atskirose eilutėse tris skirtingas pasirinktas savybes.
function Mokinys(
  name,
  surname,
  age,
  program,
  credits,
  grades,
  height,
  course,
  school
) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.program = program;
  this.credits = credits;
  this.grades = grades;
  this.height = height;
  this.course = course;
  this.school = school;
  this.exportOneLine = () => {
    console.log(
      `${this.name} ${this.surname} ${this.age} ${this.program} ${this.credits} ${this.grades} ${this.height} ${this.course} ${this.school}`
    );
  };
  this.exportThreeLines = () => {
    console.log(this.name);
    console.log(this.surname);
    console.log(this.age);
  };
}

const gradeArr = [];
for (let i = 0; i < 20; i++) {
  gradeArr.push(Math.floor(Math.random() * 10) + 1);
}
const mokinukas = new Mokinys(
  "Jurgis",
  "Guscia",
  31,
  "programavimas",
  60,
  gradeArr,
  185,
  1,
  "Vilnius Codis School"
);
mokinukas.exportOneLine();
mokinukas.exportThreeLines();
console.log(
  "===================================================================================================================================="
);

// 2 uzduotis
// Sukurkite objektą informacijai apie filmą saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: pavadinimas, režisierius, biudžetas, kiek
// uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai, aktorių sąrašas (masyvas su jų vardais ir pavardėmis). Išveskite šio objekto
// informaciją. Paskaičiuokite ir išveskite šio filmo pelną (uždarbis - biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis). Paskaičiuokite
// kiek filmui yra metų (dabartinius metus tiesiog galite įrašyti rankomis arba panaudoti new Date(Date.now()).getFullYear() funkciją).
function Movie(name, director, budget, revenue, genre, duration, year, actors) {
  this.name = name;
  this.director = director;
  this.budget = budget;
  this.revenue = revenue;
  this.genre = genre;
  this.duration = duration;
  this.year = year;
  this.actors = actors;
  this.showProfit = () => {
    console.log(`Pelnas: ${this.revenue - this.budget}`);
  };
  this.countActors = () => {
    console.log(`Aktoriu skaicius: ${this.actors.length}`);
  };
  this.showAge = () => {
    console.log(`${new Date().getFullYear() - this.year}`);
  };
}
const myMovie = new Movie(
  "Pulp fiction",
  "Quentin Torrentino",
  1000000,
  532186964,
  "comedy",
  "2h 30min.",
  1992,
  ["John Travolta", "Bruce Willis", "Samuel L. Jackson", "Quentin Torrantino"]
);
console.log(myMovie);
myMovie.showProfit();
myMovie.countActors();
myMovie.showAge();
console.log(
  "===================================================================================================================================="
);

// 3 uzduotis
// Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename objekte nurodykite tokias savybes su reikšmėmis: pavadinimas, autorius,
// žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais), išleidimo metai, ar knygą galima rasti knygynuose. Išveskite šių knygų
// informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių), bei kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos
// kainą padvigintumėte, ar ji jau būtų brangesnė už kitą knygą?
function Book(name, author, genre, price, pages, chapters, date, canBuy) {
  this.name = name;
  this.author = author;
  this.genre = genre;
  this.price = price;
  this.pages = pages;
  this.chapters = chapters;
  this.date = date;
  this.canBuy = canBuy;
  this.chapterCount = this.chapters.length;
}
const books = [];
books.push(
  new Book(
    "knyga",
    "kaimietis",
    "autobiografija",
    100,
    300,
    ["pirmas", "antras", "trecias", "ketvirtas"],
    2019,
    false
  )
);
books.push(
  new Book(
    "knyga2",
    "miestietis",
    "fantastika",
    85,
    400,
    ["pirmas", "antras", "trecias", "ketvirtas", "penktas"],
    2018,
    true
  )
);
console.log(books);
books[0].pages < books[1].pages
  ? console.log(`Plonesnė pirma knyga`)
  : console.log(`Plonesne antra knyga`);
books[0].chapterCount < books[1].chapterCount
  ? console.log(`Antra knyga turi daugiau skyriu`)
  : console.log(`Pirma knyga turi daugiau skyriu`);
if (books[0].price < books[1].price) {
  if (books[0].price * 2 > books[1].price) {
    console.log("Padvigubinus pigesnes knygos kaina, kita knyga iseitu");
  } else {
    console.log("Padvigubinus pigesnes knygos kaina, kita knyga neiseitu");
  }
} else {
  if (books[0].price < books[1].price * 2) {
    console.log("Padvigubinus pigesnes knygos kaina, kita knyga iseitu");
  } else {
    console.log("Padvigubinus pigesnes knygos kaina, kita knyga neiseitu");
  }
}
console.log(
  "===================================================================================================================================="
);

// 4 uzduotis
// Sukurkite tris objektus prekių duomenims saugoti. Kiekviename objekte sudėkite šias savybes su reikšmėmis: pavadinimas, kaina, savikaina,
// kodas, turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). Išveskite visų trijų prekių informaciją. Išveskite visų prekių kainas vienoje
// eilutėje (pirma prekė kainuoja - ..., antra prekė kainuoja - ..., ir t.t.). Raskite ir išveskite kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą
// rastos prekės informaciją). Raskite ir išveskite atskirose eilutėse kiekvienos prekės dėžės tūrį. Raskite ir išveskite atskirose eilutėse
// kiekvienos prekės pelningumą ((kaina - savikaina) * kiekis sandėlyje).
function Merch(name, price, cost, code, left, dimensions) {
  this.name = name;
  this.price = price;
  this.cost = cost;
  this.code = code;
  this.left = left;
  this.dimensions = dimensions;
  this.getSize = () => {
    return this.dimensions.reduce((a, b) => a * b);
  };
  this.getProfits = () => {
    return (this.price - this.cost) * this.left;
  };
}
const merchs = [];
merchs.push(new Merch("Cvekas", 2, 1, 51512458, 7, [2, 3, 4]));
merchs.push(new Merch("Lenta", 5, 2, 53298457, 5, [7, 5, 8]));
merchs.push(new Merch("Kuvalda", 40, 15, 52486788, 2, [2, 4, 2]));
console.log(merchs);
console.log(
  `Pirma preke kainuoja ${merchs[0].price}, antra kainuoja ${merchs[1].price}, trecia kainuoja ${merchs[2].price}`
);
let expensive = 0;
merchs.forEach((item, index) => {
  item.price > merchs[expensive].price && (expensive = index);
});
console.log(
  `Brangiausia preke: ${merchs[expensive].name} ${merchs[expensive].price}`
);
merchs.forEach((item, index) => {
  console.log(
    `${
      index + 1
    } prekės turis: ${item.getSize()}, o pelningumas: ${item.getProfits()}`
  );
});
console.log(
  "===================================================================================================================================="
);

// 5 uzduotis
// Sukurkite objektą automobilio duomenims saugoti. Į šį objektą savybes su reikšmėmis sukelkite, po to kai sukursite tuščią objektą (10-as pavyzdys).
// Sudėkite šias savybes su reikšmėmis: markė, modelis, rida, gamybos metai, spalva, darbinis tūris, ar daužta, ar parduodama. Išveskite visą
// automobilio informaciją. Paskaičiuokite ir išveskite kiek automobiliui yra metų (rankomis įrašykite dabartinius metus arba panaudokite new
// Date(Date.now()).getFullYear() funkciją). Paskaičiuokite ir išveskite kiek vidutiniškai per metus yra nuvažiavęs automobilis (jeigu viso
// nuvažiavo 300 kilometrų, o automobiliui yra 2 metai, tai per metus vidutiniškai gaunasi 150 km.).
const car = {};
car.make = "Audi";
car.model = "A4";
car.miles = 100000;
car.year = 2015;
car.color = "black";
car.power = 1800;
car.broken = false;
car.forSale = false;
console.log(car);
console.log(`Automobilio amzius: ${new Date().getFullYear() - car.year}`);
console.log(
  `Vidutine rida: ${car.miles / (new Date().getFullYear() - car.year)}`
);
console.log(
  "===================================================================================================================================="
);

// 6 uzduotis
// Sukurkite savo norimą objektą(-us). Kiekviename sudėkite bent 5 savybes su reikšmėmis (reikšmes galite įdėti ir atskirai). Išveskite informaciją.
// Pagalvokite ką dar galite su šiuo objektu atlikti (paskaičiuoti ir pan.) ir tai padarykite.
const manoObjektas = {
  name: "projektas",
  value: "top",
  price: 999,
  time: 50,
  level: "hard",
  getValue: function () {
    return this.price / this.time;
  },
};
console.log(
  `Projekto uzdirbami pinigai per valanda: ${manoObjektas.getValue()}`
);
console.log(
  "===================================================================================================================================="
);

// 7 uzduotis
// Susikurkite objektą informacijai apie knygyną saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: pavadinimas, adresas, plotas (kv. m.), kiek
// turi knygų, darbo valandos, ar atidarytas. Išveskite šio knygyno objekto raktus su reikšmėmis. Tuomet išveskite visas knygyno savybes, kurių
// reikšmės yra ne string tipo (plotas, kiek turi knygų ir pan.).
const knygynas = {
  name: "pagrindinis",
  adress: "Gedimino 116",
  area: 2000,
  books: 15000,
  hours: 10,
  open: true,
};
for (const key in knygynas) {
  console.log(`${key} -> ${knygynas[key]}`);
}
for (const key in knygynas) {
  typeof knygynas[key] != "string" && console.log(key);
}
console.log(
  "===================================================================================================================================="
);

// 8 uzduotis
// Susikurkite du objektus, dviejų studentų informacijai saugoti. Abiejuose objektuose sudėkite šias savybes su reikšmėmis: vardas ir pavardė,
// studijų programos pavadinimas, pažymiai. Raskite abiejų studentų pažymių vidurkius. Išveskite abiejų studentų informaciją, bei pažymių
// vidurkius. Raskite ir išveskite, kurio studento pažymių vidurkis yra didesnis ir išveskite jo vardą su pavarde.
function Mokinelis(name, program, grades) {
  this.name = name;
  this.program = program;
  this.grades = grades;
  this.getAvg = () =>
    (this.grades.reduce((a, b) => a + b) / this.grades.length).toFixed(2);
  this.showMe = () =>
    console.log(
      `${this.name} ${this.program} ${this.grades}, vidurkis: ${this.getAvg()}`
    );
}
let student1 = new Mokinelis(
  "Jurgis Guscia",
  "Programu sistemos",
  [10, 10, 8, 8, 9, 10]
);
let student2 = new Mokinelis("Tas kitas", "Informatika", [8, 8, 8, 8, 8, 8, 1]);
student1.showMe();
student2.showMe();
student1.getAvg() > student2.getAvg()
  ? console.log(`Pazangesnis ${student1.name}`)
  : console.log(`Pazangesnis ${student2.name}`);
console.log(
  "===================================================================================================================================="
);

// 9 uzduotis
// Pagal 16-ą pavyzdį, pritaikykite skriptą prie kitos esybės, t.y. sukurkite tokį objektą, kuriame turėtumėte tam tikrų savybių, bei metodą/funkciją, kuri
// kažką paskaičiuotų iš objekto duomenų. Šio objekto informacijos ir atsakymų išvedimas irgi būtų panašus į duotą nurodytame pavyzdyje.
const testObject = {
  name: "Jurgis",
  grades: [8, 4, 5, 5, 4, 8, 1, 2, 3, 5, 10, 10, 10],
  getAvg: function () {
    return (this.grades.reduce((a, b) => a + b) / this.grades.length).toFixed(
      2
    );
  },
};
console.log(`Mano pazymiu vidurkis: ${testObject.getAvg()}`);
console.log(
  "===================================================================================================================================="
);

// 10 uzduotis
// Pagal 18-ą pavyzdį, pritaikykite skriptą prie kitos esybės. Išveskite visą objekto informaciją per atskirą nuo objekto console.log(), taip pat,
// išveskite tam tikrą pasirinktą informaciją pasinaudojant funkcija/metodu iš objekto.
const testObject2 = {
  name: "Jurgis",
  grades: [8, 4, 5, 5, 4, 8, 1, 2, 3, 5, 10, 10, 10],
  getAvg: function () {
    console.log(
      `Mano vidurkis: ${(
        this.grades.reduce((a, b) => a + b) / this.grades.length
      ).toFixed(2)}`
    );
  },
};
console.log("Mano informacija", testObject2);
testObject2.getAvg();
console.log(
  "===================================================================================================================================="
);

// 11 uzduotis
// Susikurkite knygų objektų masyvą. Apie kiekvieną knygą į atskirus knygų objektus sudėkite norimą informaciją (bent 3 savybes). Į masyvą įdėkite
// bent 3 knygas. Visas šias knygas išsiveskite. Tuomet parodykite pirmą knygą. Antros knygos kažkurią savybę.
function Booker(name, price, available) {
  this.name = name;
  this.price = price;
  this.available = available;
}
const bookerino = [];
bookerino.push(new Booker("pirma", 100, true));
bookerino.push(new Booker("antra", 200, false));
bookerino.push(new Booker("trecia", 500, true));
console.log(bookerino);
console.log(bookerino[0]);
console.log(bookerino[1].price);
console.log(
  "===================================================================================================================================="
);

// 12 uzduotis
// Susikurkite prekių objektų masyvą ir jį užpildykite pasirinktais duomenimis. Išveskite visų prekių pavadinimus su kainomis ir dar kokiais
// nors atributais atskirose eilutėse.
function Preke(name, price, ammount) {
  this.name = name;
  this.price = price;
  this.ammount = ammount;
  this.showMe = function () {
    console.log(
      `Preke: ${this.name}, kaina: ${this.price}, likutis: ${this.ammount}`
    );
  };
}
const prekes = [];
prekes.push(new Preke("Vinis", 12, 3));
prekes.push(new Preke("Varztas", 4, 8));
prekes.push(new Preke("Kabe", 8, 4));
prekes.forEach((item) => {
  item.showMe();
});
console.log(
  "===================================================================================================================================="
);

// 13 uzduotis
// Susikurkite automobilių objektų masyvą ir užpildykite jį pasirinktais duomenimis. Išveskite kiekvieno automobilio pavadinimą, metus ir
// paskaičiuotą jo amžių (dabartiniai metai - gamybos metai).
function Carry(name, year) {
  this.name = name;
  this.year = year;
  this.getAge = function () {
    return new Date().getFullYear() - this.year;
  };
}
const carries = [];
carries.push(new Carry("Audi", 2018));
carries.push(new Carry("BMW", 2008));
carries.push(new Carry("Volvo", 2000));
carries.push(new Carry("WV", 2010));
carries.push(new Carry("Citroen", 2015));
carries.forEach((item) => {
  console.log(`${item.name} ${item.year}, age: ${item.getAge()}`);
});
console.log(
  "===================================================================================================================================="
);

// 14 uzduotis
// Susikurkite objektų masyvą įmonių duomenims saugoti ir jį užpildykite duomenimis. Išveskite kiekvienos įmonės informaciją atskirose eilutėse,
// gražiai suformatuotai (sakinio pavidalu ar pan.). Taip pat, ką nors paskaičiuokite iš turimų skaitinių duomenų (pvz.: vidutinis įmonės amžius,
// darbuotojų kiekis per visas įmones, bendras pelnas, ar pan.).
function Firm(name, age, value) {
  this.name = name;
  this.age = age;
  this.value = value;
}
const firms = [];
let avgVal = 0;
firms.push(new Firm("Microsoft", 32, 115616516));
firms.push(new Firm("Apple", 31, 524213123));
firms.push(new Firm("Tesla", 17, 89783123154));
firms.push(new Firm("Meta", 25, 65876313213));
firms.forEach((item) => {
  avgVal += item.value;
  console.log(
    `Imones pavadinimas: ${item.name}, amzius: ${item.age}, verte: ${item.value}`
  );
});
console.log(`Vidutine imones verte: ${(avgVal / firms.length).toFixed()}`);

console.log(
  "===================================================================================================================================="
);

// 15 uzduotis
// Susikurkite objektų masyvą ligoninių duomenims saugoti ir užpildykite jį pasirinktais duomenimis. Išveskite ligoninių pavadinimus su adresais
// skirtingose eilutėse. Suskaičiuokite ką nors iš skaitinių jų duomenų, pvz.: bendrą lankytojų kiekį, bendrą ar vidutinį darbuotojų kiekį, ar pan.
function Hospital(name, adress, empl) {
  this.name = name;
  this.adress = adress;
  this.empl = empl;
}
const hospitals = [];
let totalEmpl = 0;
hospitals.push(new Hospital("Pagrindine", "Gedimino 116", 35));
hospitals.push(new Hospital("Antroji", "Gedimino 82", 70));
hospitals.push(new Hospital("Studentine", "Gedimino 33", 135));
hospitals.push(new Hospital("Universitetine", "Gedimino 1", 150));
hospitals.forEach((item) => {
  totalEmpl += item.empl;
  console.log(`${item.name}, ${item.adress}`);
});
console.log(`Bendras darbuotoju skaicius: ${totalEmpl}`);
console.log(
  "===================================================================================================================================="
);

// 16 uzduotis
// Susikurkite studentų objektų masyvą, kur apie kiekvieną studentą būtų žinoma ši informacija: vardas ir pavardė, amžius, pažymiai, studijų
// programa, kursas. Kiekvieną studentą išveskite taip: pirmoje eilutėje visi studento duomenys išskyrus jo pažymius, antroje eilutėje jo pažymiai,
// trečioje jo pažymių vidurkis su prierašu 'pažymių vidurkis'. Išvedus visus studentus dėkite brūkšnį (pvz.: -----) ir išveskite bendrą visų studentų
// pažymių vidurkį.
function Student(name, age, grades, program, course) {
  this.name = name;
  this.age = age;
  this.grades = grades;
  this.program = program;
  this.course = course;
  this.getAvg = function () {
    return this.grades.reduce((a, b) => a + b) / this.grades.length;
  };
}
const students = [];
let totalAvg = 0;
students.push(
  new Student(
    "Jurgis Guscia",
    31,
    [5, 8, 4, 1, 5, 10, 10, 10],
    "programu sistemos",
    1
  )
);
students.push(
  new Student(
    "Kaimietukas",
    28,
    [7, 8, 1, 1, 6, 5, 4, 8, 4, 8],
    "informatika",
    2
  )
);
students.push(
  new Student(
    "Miescionis",
    20,
    [4, 5, 6, 9, 9, 9, 10, 10, 10],
    "kompiuterine grafika",
    4
  )
);
students.forEach((item) => {
  console.log(`${item.name}, ${item.age}, ${item.program}, ${item.course}`);
  console.log(item.grades);
  console.log(`Pazymiu vidurkis: ${item.getAvg()}`);
  totalAvg += item.getAvg();
});
console.log("-------------------------------------------");
console.log(
  `Bendras studentu vidurkis: ${(totalAvg / students.length).toFixed(2)}`
);
console.log(
  "===================================================================================================================================="
);

// 17 uzduotis
// Susikurkite parduotuvės objektą, kuriame būtų ši informacija: pavadinimas, adresas, darbuotojų kiekis, prekių objektų masyvas. Apie
// kiekvieną prekę parduotuvėje žinoma ši informacija: pavadinimas; kodas; kaina; savikaina; turimas kiekis. Išveskite parduotuvės bendrą informaciją,
// tuomet užrašą "prekės" ir atskirose eilutėse turimas prekes su kuria nors jų informacija (pvz.: pavadinimai, kainos ir turimi kiekiai). Galiausiai
// paskaičiuokite kiek iš viso parduotuvė turi visų prekių (sudėkite jų kiekius). Raskite ir išveskite kurios prekės turima daugiausiai, o kurios mažiausiai.
const shop = {
  name: "univermagas",
  adress: "Gedimino 116",
  empl: 15,
  merch: [
    {
      name: "cvekas",
      code: 51428495,
      price: 12,
      cost: 4,
      left: 20,
    },
    {
      name: "plaktukas",
      code: 56259847,
      price: 25,
      cost: 10,
      left: 11,
    },
    {
      name: "sluota",
      code: 12056847,
      price: 33,
      cost: 20,
      left: 3,
    },
  ],
};
console.log(`${shop.name}, ${shop.adress}, darbuotoju: ${shop.empl}`);
console.log("Prkes:");
let totalMerc = 0;
let max = 0;
let min = 0;
shop.merch.forEach((merc, index) => {
  console.log(`${merc.name}, ${merc.price}, ${merc.left}`);
  merc.left < shop.merch[min].left && (min = index);
  merc.left > shop.merch[max].left && (max = index);
  totalMerc += merc.left;
});
console.log(`Viso prekiu parduotuveje: ${totalMerc}`);
console.log(`Daugiausiai turime: ${shop.merch[max].name}`);
console.log(`Maziausiai turime: ${shop.merch[min].name}`);
console.log(
  "===================================================================================================================================="
);
