// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite šalių masyvą, kuriame būtų 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. sostinė,
// 3. gyventojų skaičius

// TODO: atvaizduokite visas šalis norimu formatu

const Komp8 = () => {
  let salys = [
    {
      id: 1,
      pavadinimas: "India ",
      sostine: "New Delhi",
    },
    {
      id: 2,
      pavadinimas: "Japan ",
      sostine: "Tokyo",
    },
    {
      id: 3,
      pavadinimas: "China ",
      sostine: "Beijing",
    },
  ];
  const str = salys.map((item) => (
    <div key={item.id}>
      <p>
        Country: {item.pavadinimas}, capital: {item.sostine}
      </p>
    </div>
  ));

  return (
    <div>
      {str}
      <hr></hr>
    </div>
  );
};

export default Komp8;
