
import './App.css'

function App() {

   function calcularSalario() {
  let salario = Number(prompt('Manda o salário mensal:'))
  let dias = Number(prompt('Manda os dias trabalhados:'))

  let valorDia = 0

  if (dias > 0) {
    valorDia = salario / dias
  }

  alert('Valor por dia: ' + valorDia)
}

function calcularSemanal() {
  let salario = Number(prompt('Manda o salário mensal:'))
  let dias = Number(prompt('Manda os dias trabalhados:'))

  let valorDia = 0

  if (dias > 0) {
    valorDia = salario / dias
  }

  let salarioSemanal = valorDia * 5

  alert('Salário semanal: ' + salarioSemanal) 
}

function calcularCarga() {
  let pesoBruto = Number(prompt('Manda o peso bruto:'))
  let tara = Number(prompt('Manda a tara:'))

  let carga = pesoBruto - tara

  alert('Peso da carga: ' + carga)
}
   function calcularCustos() {
  let custos = Number(prompt('Manda os custos mensais:'))
  let recebido = Number(prompt('Manda quanto foi recebido no dia:'))

  let falta = custos - recebido

  alert('Falta pagar: ' + falta)
}

function calcularChance() {
  let n = Number(prompt('Manda o número de vezes que olhou o celular:'))

  let chance = (0.1 / (1 + 500 * n)) * 100

  alert('Chance de sucesso: ' + chance + '%')
}
function calcularVendas() {
  let inicial = Number(prompt('Digite a quantidade inicial de laranjas:'))
  let final = Number(prompt('Digite a quantidade final de laranjas:'))

  let vendas = inicial - final

  alert('Foram vendidas ' + vendas + ' laranjas.')
}

   


   function calcularDevs() {
let clt = Number(prompt('Quantos clts tem na sua empresa?'))
 let estagiarios = Number(prompt('Quantos estágiarios tem na sua empresa?'))
 let pj = Number(prompt('Quantas pjs tem na sua empresa?'))
let resultado = clt + estagiarios + pj
alert('Você tem '+ resultado + ' devs na sua empresa.')
}

function trocarSapatos(){
let qtdPares, precoPar, valorTotal
qtdPares = Number(prompt('Quantidade de pares:'))
precoPar = Number(prompt('Preco de cada par:'))

valorTotal = qtdPares * precoPar

alert('Valor total de troca: R$'  + valorTotal.toFixed(2))

}
function calcularPontos(){
let vitorias = Number(prompt('Numero de vitorias:'))
let empates = Number(prompt('Numero de empates:'))
let pontos = vitorias*3 + empates //*1
alert('O time teu tem ' + pontos + ' pontos')
   }

  function testar(){

     let nome = prompt('Qual seu nome?')
     let bocaDoSapo = nome
     alert(nome+ ', seu nome ta na bocadoSapo')
  }
     function calcularMedia(){

      let nota1 = Number(prompt('Manda a primeira nota: '))
      let nota2 = Number(prompt('Manda a segunda nota: '))

      let media = (nota1+nota2) / 2
      alert('Sua média: ' + media)
  }
  return (
   <div className="cont-app">
    <h1>Javascript no React</h1>

    <h2>exercios supimpas</h2>
<button onClick={calcularPontos} >Campeonato</button>
<button onClick={trocarSapatos}>Trocas Pé Pequeno</button>
<button onClick={calcularDevs}>Guilherme Portões</button>
<button onClick={calcularVendas}>Vendas de laranjas</button>
<button onClick={calcularCustos}>Custos da Igreja</button>
<button onClick={calcularSalario}>Salário diário</button>
<button onClick={calcularSemanal}>Salário semanal</button>
<button onClick={calcularCarga}>Peso da carga</button>
<button onClick={calcularChance}>Chance</button>

<hr />

    <button onClick={testar}>Testar</button>
    <button onClick={calcularMedia}>Média</button>
   </div>

  )
}

export default App
