import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Services from './pages/Services'
import { motion } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="App">
      <section className="container">
        <motion.h1 animate={{ fontSize: '1.75rem' }} className=' text-center font-bold text-gray-800'>Kin Zinzombe</motion.h1>
      </section>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </section>
  )
}

export default App
