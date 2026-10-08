import "./App.css";
import Jogo from "./components/Jogo";
import Pousada from "./components/Pousada";
import Votacao from "./components/Votacao";
import PesoIdeal from "./components/Pesoideal";
import Macas from "./components/Macas";
function App() {
  return (
    <div className="app">
      <h1>03 estados e componentes</h1>
      <Votacao />
      <Pousada />
      <PesoIdeal />
      <Macas />

      <Jogo />
    </div>
  );
}

export default App;
