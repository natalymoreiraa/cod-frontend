import { useState } from "react";

function Votar() {
  const [resultado, setResultado] = useState();
  function idade() {
    let idade = Number(prompt("quantos anos"));
    if (idade < 16) {
      setResultado("Não podem votar");
    } else if (idade <= 17) {
      setResultado("voto facultativo");
    } else if (idade >= 18) {
      setResultado("voto obrigatório");
    } else if (idade > 65) {
      setResultado("voto facultativo");
    } else {
      setResultado("pode votar");
    }
  }
  return (
    <div className="jogo">
      <h2>Processar idade</h2>
      <button onClick={idade}>idade</button>
      {resultado}
    </div>
  );
}
export default Votar;
