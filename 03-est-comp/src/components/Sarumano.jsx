import React, { useState } from "react";

function Sarumano() {
  const [resultado, setResultado] = useState();
  function calcularValores() {
    let criancasPequenas = Number(
      prompt("Quantas crianças pequenas estão próximas?"),
    );
    let velocidadeVento = Number(prompt("Qual é a velocidade do vento?"));
    if (criancasPequenas === 0 && velocidadeVento >= 0.5) {
      setResultado("Fumaça liberada. Que comecem os mistérios!");
    } else {
      setResultado("Fumaça bloqueada. Aguardar condiçoes ideais");
    }
  }

  return (
    <div className="Sarumano">
      <h3>Sarumano e a máquina de fumaça mística</h3>
      <button onClick={calcularValores}>Verificar</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Sarumano;
