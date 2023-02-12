import { motion } from "framer-motion";
import Skill from "../components/Skill";
import { SiReact, SiExpress, SiMongodb } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';

const Home = () => {
    const Skills = [
        {
            title: "React",
            icon: <SiReact size='120'/>,
            included: [
                'Project Testing',
                'Deployment',
                'Animations',
                'Userr Interface development',
                'User Experience'
            ]
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
            ]
        },
        {
            title: "NodeJS",
            icon: <GrNode size='120' />,
            included: [
                'API integration',
                'Library integration',
                'Frontend and backend development',
                'Authentication'
            ]
        },
        {
            title: "DBMS",
            icon: <SiMongodb size='120' />,
            included: [
                'MongoDB storage solutions',
                'Database Creation',
                'Database Managment',
                'Database Updating',
                'User management'
            ]
        }
    ]

    return ( 
        <section>
            <section className="tech-stack grid gap-4 align-middle justify-center text-center">
                {
                    Skills.map((skl) => (
                        <Skill title={skl.title} icon={skl.icon} included={ skl.included } />
                    ))
                }
            </section>
        </section>
     );
}
 
export default Home;