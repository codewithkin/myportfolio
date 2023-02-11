import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Services from './pages/Services'
import { animate, motion } from 'framer-motion'
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai'

function App() {
  const [showNav, setShowNav] = useState(false);
  const showNavBar = () => {
    if(showNav == false) setShowNav(true)
    else {
        setShowNav(false)
    }
  }

  return (
    <section className="App">
      <section className="container flex gap-2">
        { showNav ? <AiOutlineClose className={ showNav ? 'w-[2rem] h-[2rem] self-center block md:hidden' : 'hidden' } onClick={showNavBar}/> : <BiMenu className={ showNav ? 'hidden' : 'w-[2rem] h-[2rem] self-center block md:hidden' } onClick={showNavBar}/>}
        <motion.h1 animate={{ fontSize: '1.75rem' }} className=' font-bold text-gray-800'>Kin Zinzombe</motion.h1>
      </section>

      <header className="bg-black grid p-6 text-white">
                <article className="text-center mb-2">
                    <p className="text-xl">
                    I'm Kin, I am a full stack developer specializing in the MERN stack. I use javascript frameworks and
                    libraries such as React, Express, and Framer motion
                    to create beautiful and lightning fast website frontends as well as robust RESTful API backends.
                    </p>
                </article>

                <motion.article whileHover={{  x:-20, y:-10 }} className="bg-white flex justify-center align-middle rounded-xl p-2 justify-self-center">
                    <img src='./src/assets/image.jpg' alt="developer" className="w-[12rem] h-[12rem]"/>
                </motion.article>
            </header>
      <article>
                <motion.ul className=" hidden desktop-links md:block">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/services'>Services</Link>
                    </li>
                    <li>
                        <Link to='/experience'>Experience</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </motion.ul>
      </article>

      <article >
                <motion.ul className={ showNav ? 'block' : "hidden links" }>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/services'>Services</Link>
                    </li>
                    <li>
                        <Link to='/experience'>Experience</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </motion.ul>
      </article>

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
