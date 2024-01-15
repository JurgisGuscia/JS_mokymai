import CounterTev from "./components/counter/CounterTev";
import Imone from "./components/imone/Imone";
import KnyguBendras from "./components/knygos/KnyguBendras";
import ZodziuBendras from "./components/zodziai/ZodziuBendras";

function App() {
  return (
    <div className="App">
      <CounterTev />
      <ZodziuBendras />
      <KnyguBendras />
      <Imone />
    </div>
  );
}

export default App;
