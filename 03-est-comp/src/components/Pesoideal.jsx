import { useState } from "react";

function PesoIdeal() {
  const [resultado, setResultado] = useState();

  function calcularPeso() {
    let altura = Number
      prompt("Qual a sua altura em metros?")
    
    let genero = Number(
      prompt("Qual o seu gênero? (1 para feminino, 2 para masculino)")
    )

    if (genero === 1) {
      setResultado(62.1 * altura - 44.7);
    } else if (genero === 2) {
      setResultado(72.7 * altura - 58);
    } else {
      setResultado("Gênero inválido");
    }
  }

  return (
    <div className="jogo">
      <h2>Peso Ideal</h2>
      <button onClick={calcularPeso}>Calcular</button>
      {resultado}
    </div>
  );
}

export default PesoIdeal;
