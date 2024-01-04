import React from "react";
let medziai = [
  {
    pavadinimas: "pusis",
    komentaras: "Pušys yra amžinos ir stiprios, simbolizuoja ištvermę.",
  },
  {
    pavadinimas: "azuolas",
    komentaras:
      "Ąžuolas yra senovės simbolis, reprezentuojantis išmintį ir ištikimybę.",
  },
  {
    pavadinimas: "berzas",
    komentaras:
      "Beržas yra jaunystės simbolis ir reiškia pradžią ir naują gyvenimą.",
  },
];

const checkTree = (tree) => {
  alert(medziai.find((item) => item.pavadinimas === tree).komentaras);
};

export default function GeriausiasMedis() {
  return (
    <div>
      <h1>GeriausiasMedis</h1>
      <button onClick={() => checkTree("pusis")}>Pusis</button>
      <button onClick={() => checkTree("azuolas")}>Azuolas</button>
      <button onClick={() => checkTree("berzas")}>Berzas</button>
    </div>
  );
}
