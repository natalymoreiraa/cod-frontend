import "./App.css";
import Jogo from "./components/Jogo";
import Pousada from "./components/Pousada";
import Votacao from "./components/Votacao";
import PesoIdeal from "./components/Pesoideal";
import Macas from "./components/Macas";
import Ganso from "./components/Ganso";
import Recrutamento from "./components/Recrutamento";

function App() {
  return (
    <div className="app">
      <h1>03 estados e componentes</h1>

       <h2>#0030</h2>
       <Ganso />
       <Recrutamento />

       <hr />


       <h2>#0027.sq05</h2>


       <Pousada />
       <Jogo />

      <Votacao />
      <Pousada />
      <PesoIdeal />
      <Macas />

      <Jogo />
    </div>
  );
}

export default App;
