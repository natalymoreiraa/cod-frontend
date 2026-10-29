import { useState } from 'react'

function Bomba() {
    const [linhas, setLinhas] = useState('')
    const [resultado, setResultado] = useState([])

    function gerarSaida() {
        let n = Number(linhas)
        let output = []
        let contador = 1

        for (let i = 0; i < n; i++) {
            output.push(`${contador} ${contador + 1} ${contador + 2} BOMBA`)
            contador += 4
        }

        setResultado(output)
    }

    return (
        <div className='bc2374'>
            <h2>BOMBA</h2>
            <label htmlFor="">Número de linhas</label>
            <input type="text"
                value={linhas}
                onChange={(e) => setLinhas(e.target.value)}
            />
            <button onClick={gerarSaida}>Calcular</button>

            {resultado.map((linha, index) => (
                <p key={index}>{linha}</p>
            ))}

        </div>
    )
}

export default Bomba