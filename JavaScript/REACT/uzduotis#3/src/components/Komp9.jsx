// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite mokymų/kursų masyvą, kuriame būtų bent 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. trukmė,
// 3. kaina

// TODO: atvaizduokite visus mokymus/kursus norimu formatu

const Komp9 = () => {
  const kursai = [
    {
      id: "1",
      pavadinimas: "Digital Marketing Fundamentals",
      trukme: "6 months (Part-time)",
      kaina: "$1,500",
    },
    {
      id: "2",
      pavadinimas: " Data Science Bootcamp",
      trukme: "12 weeks (Full-time)",
      kaina: "$5,000",
    },
    {
      id: "3",
      pavadinimas: " Creative Writing Workshop",
      trukme: "8 weeks (Part-time)",
      kaina: " $800",
    },
  ];

  const sarasas = kursai.map((item) => (
    <div key={item.id}>
      Kursas: {item.pavadinimas}, trukme: {item.trukme}, kaina: {item.kaina}
    </div>
  ));

  return <div>{sarasas}</div>;
};

export default Komp9;
