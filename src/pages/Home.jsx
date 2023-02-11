import { motion } from "framer-motion";

const Home = () => {
    return ( 
        <section>
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
        </section>
     );
}
 
export default Home;