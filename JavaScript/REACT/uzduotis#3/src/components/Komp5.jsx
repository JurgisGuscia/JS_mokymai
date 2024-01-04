// TODO: prijunkite šį komponentą prie App.jsx

const Komp5 = () => {
  let spalvos = ["raudona", "geltona", "žalia", "mėlyna", "violetinė"];
  const list = spalvos.map((spalva, index) => <li key={index}>{spalva}</li>);
  return (
    // TODO: atvaizduokite visas spalvas
    // naudodami map funkciją, įdėdami viską
    // į rikiuotą sąrašą (ol)
    <div>
      <ol>{list}</ol>
      <hr></hr>
    </div>
  );
};

export default Komp5;
