import { motion } from "framer-motion";
import Skill from "../components/Skill";
import { SiReact, SiExpress, SiMongodb } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import { MdMessage } from 'react-icons/md'
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';

const Home = () => {
    const form = useRef()
    const [email, setEmail]  = useState('');
    const [message, setMessage] = useState('');

    const Skills = [
        {
            title: "React",
            icon: <SiReact size='120' fill="cyan"/>,
            included: [
                'Project Testing',
                'Deployment',
                'Animations',
                'User Interface development',
                'User Experience'
            ],
            scheme: 'cyan',
            id: 1
        },
        {
            title: "Express",
            icon: <SiExpress size='120' />,
            included: [
                'Backend Development',
                'Connecting backend and frontend',
                'API development',
                'Information security',
                'Crytography'
            ],
            scheme: "",
            id: 2
        },
        {
            title: "NodeJS",
            icon: <GrNode size='120' fill="green"/>,
            included: [
                'API integration',
                'Library integration',
                'Frontend and backend development',
                'Authentication'
            ],
            scheme: "green",
            id: 3
        },
        {
            title: "DBMS",
            icon: <SiMongodb size='120' fill="green"/>,
            included: [
                'MongoDB storage solutions',
                'Database Creation',
                'Database Managment',
                'Database Updating',
                'User management'
            ],
            scheme: "green",
            id: 4
        }
    ]

    const handleEmailSend = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_ok97ds6', 'tmp', form.current, 'U4uYOKiMDLdn5CEgx')
        .then((result) => console.log(result.text))
        .catch((err) => console.log(err.text))
    }

    return ( 
        <section>
            <section id="exp" className="tech-stack grid align-middle justify-center text-center">
                <h3  className="text-4xl mt-4 font-bold">My skills</h3>

                <section className="md:grid md:grid-cols-2 md:grid-rows-2 gap-14">
                    {
                        Skills.map((skl) => (
                            <Skill title={skl.title} icon={skl.icon} included={ skl.included } scheme={skl.scheme} key={skl.id}/>
                        ))
                    }
                </section>
            </section>

            <section className="about bg-black p-6 text-white grid">
                <h2 className=" text-3xl">About me</h2>

                <section className=" grid items-center justify-between align-middle self-center md:grid-cols-2 md:grid-rows-1">
                    <article className="profile mt-4 justify-self-center">
                        <img src='data:image/jpeg;base64,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' className="w-[14rem] h-[14rem] self-center justify-self-center rounded-full"/>
                        <p className="text-3xl md:text-2xl mt-2 self-center font-bold text-red-600 text-center">My Hobbies</p>
                    </article>
                    <article className="about-me text-center">
                        <p className="text-xl">
                            Going outside, scaling mountains, and listening to music are some of my pastimes.I prefer being by myself and letting my imagination run free. I also write poetry and novels. Depending on what I desire, I also create personal apps in any genre.
                            When I was in the seventh grade in 2020, I developed an interest in programming because I was curious and wanted to understand how every component of a computer operated.
                        </p>
                    </article>
                </section>
            </section>

            <section id="contact" className="grid items-center justify-center mb-4 ">
                <form ref={form} onSubmit={handleEmailSend} className="grid gap-4">
                    <h2 className="text-4xl text-center p-4 ">Contact me</h2>
                    <article className="  p-2 w-[20rem] flex">
                        <MdMessage size='42' fill='red' className="border-r-none p-2 border border-gray-400 rounded-tl-xl w-[4.2rem] rounded-bl-xl"/>
                        <input type="email"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={ email }
                        className="border border-gray-400 p-2 rounded-tr-xl rounded-br-xl w-[20rem]"
                        name='sender_email'
                        />
                    </article>

                    <article className=" p-2 w-[20rem] flex ">
                    <MdMessage size='42' fill='red' className="border-r-none p-2 border border-gray-400 rounded-tl-xl w-[4.2rem] rounded-bl-xl"/>
                        <input type="text"
                        placeholder="Enter your message..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={ message }
                        className="border border-gray-400 p-2 rounded-tr-xl rounded-br-xl w-[20rem]"
                        name="message"
                        />
                    </article>

                    <button onSubmit={handleEmailSend} className="p-2 border border-black text-gray-700 hover:bg-black hover:text-white">Send</button>
                </form>
            </section>
        </section>
     );
}
 
export default Home;
