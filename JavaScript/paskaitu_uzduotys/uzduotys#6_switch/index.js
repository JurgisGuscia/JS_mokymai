// 1. Susikurkite kintamąjį pasirinkimui saugoti, į jį įrašykite norimą reikšmę. Tikrinkite:
//      1. Ar pasirinkimas lygus 1? Jei taip, išveskite, kad vartotojas laimėjo vandens.
//      2. Ar pasirinkimas lygus 2? Jei taip, išveskite, kad vartotojas laimėjo limonadą.
//      3. Ar pasirinkimas lygus 3? Jei taip, išveskite, kad vartotojas laimėjo arbatą.
//      4. Ar pasirinkimas lygus 4? Jei taip, išveskite, kad vartotojas laimėjo kavą.
//      5. Jei pasirinkimas neegzistuoja, išveskite klaidos pranešimą.
const num = 99;
switch (num) {
  case 1:
    console.log("laimejote vandens");
    break;
  case 2:
    console.log("laimejote limonada");
    break;
  case 3:
    console.log("laimejote arbata");
    break;
  case 4:
    console.log("laimejote kava");
    break;
  default:
    console.log("ivyko klaida");
}

// 2. Susikurkite kintamuosius trims skaičiams saugoti ir priskirkite jiems reiškmes. Tikrinkite pirmą skaičių:
//      1. Ar pirmas skaičius lygus 1? Jei taip, išvesti visų trijų skaičių sumą.
//      2. Ar pirmas skaičius lygus 2? Jei taip, išvesti antro ir trečio skaičių sandaugą.
//      3. Ar pirmas skaičius lygus 3? Jei taip, išvesti pirmo skaičiaus kvadratą.
//      4. Jei nei vienas variantas netinka, išveskite klaidos pranešimą.
//      3. Susikurkite kintamąjį klaidos kodui saugoti, jam priskirkite kokį nors
//          klaidos kodą. Tikrinkite koks tai klaidos kodas (bent 3 skirtingus variantus),
//          ties kiekvienu jų išveskite skirtingą tekstą, nurodantį, kad bus atliekami
//          skirtingi veiksmai.
const [n1, n2, n3] = [7, 2, 3];
const error = 2;
switch (n1) {
  case 1:
    console.log(n1 + n2 + n3);
    break;
  case 2:
    console.log(n2 * n3);
    break;
  case 3:
    console.log(n1 * n1);
    break;
  default:
    switch (error) {
      case 1:
        console.log("Pirma klaida, taisysim");
        break;
      case 2:
        console.log("Antra klaida, reikes koreguoti");
        break;
      case 3:
        console.log("Trecia klaida, liudim visi kartu");
        break;
    }
}
