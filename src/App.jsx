import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Services from './pages/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>} />
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/contact' element={<Contact/>} />
      </Routes>

      <section className="container">
        <nav>
          <h1>Kin Zinzombe</h1>
        </nav>
      </section>
    </section>
  )
}

export default App
