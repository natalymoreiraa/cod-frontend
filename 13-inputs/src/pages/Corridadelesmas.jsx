import { useState } from "react";

function CorridaDeLesmas() {
  const [velocidades, setVelocidades] = useState("");
  const [resultado, setResultado] = useState("Digita aí");

  function calcularNivel() {
    let listaVelocidades = velocidades.trim().split(/\s+/).map(Number);
    let maiorVelocidade = Math.max(...listaVelocidades);

    if (maiorVelocidade < 10) {
      setResultado("1");
    } else if (maiorVelocidade < 20) {
      setResultado("2");
    } else {
      setResultado("3");
    }
  }

  return (
    <div className="bc2374">
      <h2>A corrida de lesmas</h2>
      <label htmlFor="">Velocidades das lesmas </label>
      <input
        type="text"
        value={velocidades}
        onChange={(e) => setVelocidades(e.target.value)}
      />
      <button onClick={calcularNivel}>Calcular</button>

      {resultado}
    </div>
  );
}

export default CorridaDeLesmas;
