import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './pages/Home'
import Demo from './pages/Demo'
import Ex0081 from './pages/Ex0081'
import HoHoHo from './pages/Hoho'
import AprovadoOuReprovado from './pages/Aprovado'
import Bondinho from './pages/Bondinho'
import Bomba from './pages/Pummm'
import TipoDeCombustivel from './pages/Combustivel'
import Combustivel from './pages/Combustivel'
import CorridaDeLesmas from './pages/Corridadelesmas'
import AumentoIngresso from './pages/Ofilme'


function App() {

  return (
<div className="app">
   <AumentoIngresso />
   <CorridaDeLesmas />
   <Combustivel />
   <Bomba />
  <Bondinho />
  <AprovadoOuReprovado />
  <HoHoHo />
  <Ex0081 />
  <Home />
  <Demo />

</div>
  )
}

export default App
