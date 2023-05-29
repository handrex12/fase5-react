import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>FASE 5-OPERAR</h1>

      <h3>Integrantes</h3>
      <h4>Carlos Andrés Granados Luis</h4>
      
      <a href="inicio.html">Da click aqui</a>

      <div className="card">
       
      </div>
      <p className="read-the-docs">
        Este es un proyecto creado con React.
      </p>
    </>
  )
}

export default App
