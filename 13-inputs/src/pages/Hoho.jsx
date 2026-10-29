import { useState } from 'react'

function HoHoHo() {
  const [vezes, setVezes] = useState('')
  const [resultado, setResultado] = useState('Digita aí')

  function gerarHoHoHo() {
    const N = Number(vezes)
    
    if (isNaN(N) || N <= 0) {
      setResultado('Digita um número válido!')
      return
    }

    let texto = ''
    for (let i = 0; i < N; i++) {
      if (i === N - 1) {
        texto += 'Ho!'
      } else {
        texto += 'Ho '
      }
    }

    setResultado(texto)
  }

  return (
    <div className='bc1759'>
      <h2>Bc1759 - Ho Ho Ho</h2>
      <label htmlFor="">Quantidade de Ho</label>
      <input 
        type="text" 
        value={vezes} 
        onChange={(e) => setVezes(e.target.value)} 
      />
      
      <button onClick={gerarHoHoHo}>Calcular</button>

      {resultado}
    </div>
  )
}

export default HoHoHo