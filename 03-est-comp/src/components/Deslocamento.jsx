import React, { useState } from "react";

function Deslocamento() {
  const [resultado, setResultado] = useState();
  function calcularValores() {
    let estaGripado = prompt("Está gripado? (sim ou não)");
    let tempoViagem = Number(prompt("Qual o tempo de viagem em minutos?"));

    if (estaGripado === "não" && tempoViagem < 45) {
      setResultado("Viagem autorizada. Rumo ao show!");
    } else {
      setResultado("Deslocamento inviavél. Melhor recusar este evento. ");
    }
  }

  return (
    <div className="Deslocamento">
      <h3>Sarumano e o deslocamento para eventos</h3>
      <button onClick={calcularValores}>Verificar Deslocamento</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Deslocamento;
