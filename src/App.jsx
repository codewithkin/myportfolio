import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Services from './pages/Services'
import { animate, motion } from 'framer-motion'
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

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
        <BiMenu className={ showNav ? 'hidden' : 'w-[2rem] h-[2rem] self-center block md:hidden' } onClick={showNavBar}/>
          <motion.h1 animate={{ fontSize: '1.75rem' }} className=' font-bold text-gray-800 ml-4'>Kin Zinzombe</motion.h1>
        </section>

        <article className="mobile-links hidden md:block self-center">
          <ul className='flex gap-4 text-xl mr-4'>
            <li>
              <Link to='/' className='text-gray-700 hover:text-gray-400'>Home</Link>
            </li>
            <li>
              <Link to='services' className='text-gray-700 hover:text-gray-400'>Services</Link>
            </li>
            <li>
              <Link to='/exeperience' className='text-gray-700 hover:text-gray-400'> Experience</Link>
            </li>
            <li>
              <Link to='/contact' className='text-gray-700 hover:text-gray-400'>Contact</Link>
            </li>
          </ul>
        </article>
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
                        When I'm not busy reversing a string or connecting a client's website to a databse I enjoy <span className='text-red-800'>writing</span>,
                        <span className='text-red-800'>reading</span> and <span className='text-red-800'> exercising.</span> I write poetry, mystery books, 
                        and blog entries to share my coding experiences with other programmers and to track my coding career.
                      </p>
                    </section>
                </motion.article>
        </header>

        <article className={ showNav ? 'block absolute top-0 left-0 h-[48rem]  w-3/4 bg-black' : 'hidden' }>
                  <AiOutlineClose fill='white' onClick={ showNavBar } size='28' className='mt-4 ml-4'/>
                  <ul className='text-2xl  grid gap-20'>
                    <li className='ml-5 mt-4'>
                      <Link to='/' className='underline text-gray-700 hover:text-gray-200'>Home</Link>
                    </li>
                    <li className='ml-5'>
                      <Link to='services' className='underline text-gray-700 hover:text-gray-200 '>Services</Link>
                    </li>
                    <li className='ml-5'>
                      <Link to='/exeperience' className='underline text-gray-700 hover:text-gray-200 '> Experience</Link>
                    </li>
                    <li className='ml-5'>
                      <Link to='/contact' className='underline text-gray-700 hover:text-gray-200'>Contact</Link>
                    </li>
                  </ul>
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
