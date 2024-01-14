import Skaicius from "./components/skaicius/Skaicius";
import Kelione from "./components/kelione/Kelione";
import MedzioApdirbejas from "./components/medzioApdirbejas/MedzioApdirbejas";
import Temperaturos from "./components/temperaturos/Temperaturos";
import Prekes from "./components/prekes/Prekes";
import Kepyklele from "./components/kepyklele/Kepyklele";

function App() {
  return (
    <div className="App">
      <Skaicius />
      <Kelione />
      <MedzioApdirbejas />
      <Temperaturos />
      <Prekes />
      <Kepyklele />
    </div>
  );
}

export default App;
