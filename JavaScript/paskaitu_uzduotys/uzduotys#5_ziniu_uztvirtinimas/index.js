const kepykla = {
  workHours: 8, //darbo valandu
  empl: 6, //darbuotoju skaicius
  loafPerHourPerEmpl: 20, //kiek vienas darbuotojas iskepa per valana
  loafCost: 5, //kepalo savikaina
  loafPrice: 8, //kepalo pardavimo kaina
  order: 1000, //uzsakymas
};

const loafsPerDay =
  kepykla.workHours * kepykla.empl * kepykla.loafPerHourPerEmpl; //kiek kepalu iskeps kepykla per darbo diena
const orderPrice = kepykla.order * kepykla.loafPrice; //visos pajamos is ivykdito uzsakymo
const orderCost = kepykla.order * kepykla.loafCost; //viso uzsakymo savikaina
const orderProfit = orderPrice - orderCost; //uzsakymo pelnas
const orderPossible = kepykla.order <= loafsPerDay; //ar spes ivykditi uzsakyma
console.log(`per darbo diena kepykla iskepa: ${loafsPerDay}`);
console.log(
  `uzsakymas ${kepykla.order} kepalu. Uzsakymo savikaina ${orderCost}, pardavimo pajamos ${orderPrice}, pelnas ${orderProfit}`
);
!orderPossible
  ? console.log(
      `Kepykla uzsakymo ivykditi nespes, truks: ${
        kepykla.order - loafsPerDay
      } kepalu, uz parduotus kepalus (${loafsPerDay}) gaus ${
        loafsPerDay * (kepykla.loafPrice - kepykla.loafCost)
      } pelno`
    )
  : console.log(`Kepykla uzsakyma ivykdys`);
