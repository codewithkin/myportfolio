import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { animate, motion } from 'framer-motion'
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import Home from './pages/Home';

function App() {
  const [icon, setIcon] = useState(<AiOutlineArrowDown size='25' fill='white'/>);
  const [show, setShow] = useState('more');
  const [showNav, setShowNav] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const showNavBar = () => {
    if(showNav == false) setShowNav(true)
    else {
        setShowNav(false)
    }
  }

  const handleShowMore = () => {
    if(!showMore) { 
      setIcon(<AiOutlineArrowUp size='25' fill='white'/>)
      setShowMore(true)
      setShow('less ')
    } else {
      setShowMore(false)
      setIcon(<AiOutlineArrowDown size='25' fill='white'/>)
      setShow('more')
    }
  }

  return (
    <main className="App h-full">
      <nav className="flex ">
        <section className="container flex gap-2">
          <motion.h1 animate={{ fontSize: '1.75rem' }} className=' font-bold text-gray-800 ml-4'>Kin Zinzombe</motion.h1>
        </section>

        
      </nav>

        <header className="bg-black relative md:flex md:justify-between grid p-6 text-white">
                <article className="text-center flex flex-col justify-center items-center align-middle mb-2 md:w-[50rem] p-5">
                    <p className="text-xl">
                    I'm Kin, I am a full stack developer specializing in the MERN stack. I use javascript frameworks and
                    libraries such as React, Express, and Framer motion
                    to create beautiful and lightning fast website frontends as well as robust RESTful API backends.
                    <span 
                    style={{ transition: 'display' }}
                    className={ showMore ? 'block md:block' : 'hidden md:block' }
                    >
                      I started learning programming in March of 2020, I learnt HTML, CSS and JavaScript for a year. I've 
                      Only just recenty started to learn JavaScript Frameworks such as the Express framework on the NodeJS runtime and JavaScipt libraries such 
                      as the ReactJS library. I also use the TailwindCSS framework.
                    </span>
                    </p>
                    <button className='block md:hidden align-middle p-4 border flex gap-2 text-center self-center border-gray-600 mt-2 rounded-xl hover:bg-gray-400 hover:text-black w-[10rem]' onClick={handleShowMore}>Show { show } { icon }</button>
                </article>

                <motion.article whileHover={{  x:-20, y:-10 }} className= " bg-white w-full h-full relative md:w-[30rem] flex flex-col justify-center align-middle rounded-xl justify-self-center">
                    <section><img src='https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60' alt="developer" className="w-full md:h-[15rem] rounded-tl-xl rounded-tr-xl"/></section>

                    <section className=''>
                      <p className='text-black font-bold text-center p-4'>
                        When I'm not busy reversing a string or connecting a client's website to a database I enjoy <span className='text-red-800'>writing</span>,
                        <span className='text-red-800'>reading</span> and <span className='text-red-800'> exercising.</span> I write poetry, mystery books, 
                        and blog entries to share my coding experiences with other programmers and to track my coding career.
                      </p>
                    </section>
                </motion.article>

        </header>
        <Home/>
    </main>
  )
}

export default App
