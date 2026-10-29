import { useState } from 'react'

function Bondinho() {
    const [alunos, setAlunos] = useState('')
    const [monitores, setMonitores] = useState('')
    const [resultado, setResultado] = useState('Digita aí')

    function verificarViagem() {
        let a = Number(alunos)
        let m = Number(monitores)
        let total = a + m

        if (total <= 50) {
            setResultado('S')
        } else {
            setResultado('N')
        }
    }

    return (
        <div className='bc2374'>
            <h2>Bondinho</h2>
            <label htmlFor="">Alunos</label>
            <input type="text"
                value={alunos}
                onChange={(e) => setAlunos(e.target.value)}
            />
            <label htmlFor="">Monitores</label>
            <input type="text"
                value={monitores}
                onChange={(e) => setMonitores(e.target.value)}
            />
            <button onClick={verificarViagem}>Calcular</button>

            {resultado}

        </div>
    )
}

export default Bondinho