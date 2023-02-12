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
    <main className="App relative h-full">
      <nav className="flex">
        <section className="container flex gap-2">
        <BiMenu className={ showNav ? 'hidden' : 'w-[2rem] h-[2rem] self-center block md:hidden' } onClick={showNavBar}/>
          <motion.h1 animate={{ fontSize: '1.75rem' }} className=' font-bold text-gray-800 ml-4'>Kin Zinzombe</motion.h1>
        </section>

        <article className="mobile-links self-center">
          <ul className='flex gap-4 text-xl mr-4'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='services'>Services</Link>
            </li>
            <li>
              <Link to='/exeperience'> Experience</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </article>
      </nav>

        <header className="bg-black grid p-6 text-white">
                <article className="text-center mb-2">
                    <p className="text-xl">
                    I'm Kin, I am a full stack developer specializing in the MERN stack. I use javascript frameworks and
                    libraries such as React, Express, and Framer motion
                    to create beautiful and lightning fast website frontends as well as robust RESTful API backends.
                    </p>
                </article>

                <motion.article whileHover={{  x:-20, y:-10 }} className="bg-white flex flex-col justify-center align-middle rounded-xl justify-self-center">
                    <section><img src='./src/assets/image.jpg' alt="developer" className="w-full h-[20rem] rounded-tl-xl rounded-tr-xl"/></section>

                    <section className=''>
                      <p className='text-black font-bold text-center p-2'>
                        When I'm not busy reversing a string or connecting a client's website to a databse I enjoy <span className='text-red-800'>writing</span>,
                        <span className='text-red-800'>reading</span> and <span className='text-red-800'> exercising.</span> I write poetry, mystery books, 
                        and blog entries to share my coding experiences with other programmers and to track my coding career.
                      </p>
                    </section>
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

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </main>
  )
}

export default App
