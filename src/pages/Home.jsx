import { motion } from "framer-motion";
import Skill from "../components/Skill";
import { SiReact, SiExpress, SiMongodb } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';

const Home = () => {
    const Skills = [
        {
            title: "React",
            icon: <SiReact size='120' fill="cyan"/>,
            included: [
                'Project Testing',
                'Deployment',
                'Animations',
                'Userr Interface development',
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

    return ( 
        <section>
            <section className="tech-stack grid gap-4 align-middle justify-center text-center">
                <h3  className="text-4xl mt-4 font-bold">My skills</h3>

                <section className="md:grid md:grid-cols-2 md:grid-rows-2 gap-4">
                    {
                        Skills.map((skl) => (
                            <Skill title={skl.title} icon={skl.icon} included={ skl.included } scheme={skl.scheme} key={skl.id}/>
                        ))
                    }
                </section>
            </section>
        </section>
     );
}
 
export default Home;