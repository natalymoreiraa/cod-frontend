import React, { useState } from 'react'

function Pneu() {
const[pneu, setPneu] = useState('')
const[digitada, setDigitada] = useState('')
const[diferenca, setDiferenca] = useState('Digita aí')

function calcularPressao() {
    let pressao = Number(digitada) - Number(pneu)
    setDiferenca(pressao)

}

  return (
    <div className='bc2374'>
       <h2>Bc2374 - Pneu</h2>
       <label htmlFor=""> Pressão Pneu</label>
       <input type="text"
       value={pneu}
       onChange={(e) => setPneu(e.target)}
        />
       <label htmlFor=""> Pressão Desejada</label>
       <input type="text"
       value={digitada}
       onChange={(e) => setDigitada(e.target)}
       
       />
       <button onClick={calcularPressao}>Calcular</button>


        {diferenca}
        

         </div>
  )
}

export default Pneu