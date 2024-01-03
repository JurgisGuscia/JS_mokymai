// TODO: prijunkite šį komponentą prie App.jsx

const Komp7 = () => {
  let straipsniai = [
    {
      id: 1,
      pavadinimas: "Pirmas straipsnis",
      tekstas:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      id: 2,
      pavadinimas: "Antras straipsnis",
      tekstas:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      id: 3,
      pavadinimas: "Trečias straipsnis",
      tekstas:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ];
  const str = straipsniai.map((item) => (
    <div key={item.id} className="straipsnis">
      <h3>{item.pavadinimas}</h3>
      <p>{item.tekstas}</p>
    </div>
  ));

  return (
    // TODO: atvaizduokite visus straipsnius,
    // visus atkartodami div'e su klase 'straipsnis',
    // įsistatykite atitinkamose jo vietose straipsnio
    // pavadinimą ir tekstą

    <div>
      <h1>Straipsniai</h1>
      <div>{str}</div>
      <hr></hr>
    </div>
  );
};

export default Komp7;
