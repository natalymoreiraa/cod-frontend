import { useState } from 'react'

import './App.css'
import Primeira from './components/Primeira'
import Segunda from './components/Segunda'
import Terceira from './components/Terceira'
import Quarta from './components/Quarta'
import Quinta from './components/Quinta'


function App() {
  const [pagina, setPagina] = useState(1)
  function mostrarHome(){
    setPagina(0)
  }

  return (
    <div className="app">
      <nav>
        <button onClick={() => setPagina(0)}>Oração de Fullstack</button>
        <button onClick={() => setPagina(1)}>Oração do deploy</button>
        <button onClick={() => setPagina (2)}>Oração do Resiliente</button>
        <button onClick={() => setPagina (3)}>Oração do aprendiz</button>
        <button onClick={() => setPagina (4)}>Oração do programador</button>
      
      </nav>
  



{pagina==0 && <Primeira/>}
{pagina==1 && <Segunda/>}
{pagina==2 && <Terceira/>}
{pagina==3 && <Quarta/>}
{pagina==4 && <Quinta/>}



 </div>
  )
}

export default App
