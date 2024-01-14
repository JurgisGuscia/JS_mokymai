import Pardavejas from "./components/autoPardavejas/Pardavejas";
import Imone from "./components/bonusai/Imone";
import HobiuParduotuve from "./components/deliones/HobiuParduotuve";
import Mokymai from "./components/mokymuInfo/Mokymai";
import Pasaulis from "./components/pasaulioInfo/Pasaulis";
import Kategorija from "./components/portalas/Kategorija";
import VisosRoles from "./components/roles/VisosRoles";
import Studentas from "./components/studentoInfo/Studentas";

function App() {
  return (
    <div className="App">
      <Pasaulis />
      <VisosRoles />
      <Imone />
      <Pardavejas />
      <HobiuParduotuve />
      <Studentas />
      <Kategorija />
      <Mokymai />
    </div>
  );
}

export default App;
