import { useState } from 'react'

function AumentoIngresso() {
    const [precoAntigo, setPrecoAntigo] = useState('')
    const [precoNovo, setPrecoNovo] = useState('')
    const [resultado, setResultado] = useState('Digita aí')

    function calcularAumento() {
        let a = Number(precoAntigo)
        let b = Number(precoNovo)

        let aumento = ((b - a) / a) * 100
        setResultado(`${aumento.toFixed(2)}%`)
    }

    return (
        <div className='bc2374'>
            <h2>Aumento do Ingresso</h2>
            <label htmlFor="">Preço Antigo (A)</label>
            <input type="text"
                value={precoAntigo}
                onChange={(e) => setPrecoAntigo(e.target.value)}
            />
            <label htmlFor="">Preço Novo (B)</label>
            <input type="text"
                value={precoNovo}
                onChange={(e) => setPrecoNovo(e.target.value)}
            />
            <button onClick={calcularAumento}>Calcular</button>

            {resultado}

        </div>
    )
}

export default AumentoIngresso