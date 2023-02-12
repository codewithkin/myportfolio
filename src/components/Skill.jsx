import { TiTick } from 'react-icons/ti';
import { motion } from 'framer-motion';

const Skill = ({ included, title, icon, scheme }) => {
    return ( 
        <motion.section whileHover={{ x: 10, y: 40 }} className='grid bg-slate-700 align-middle justify-center items-center rounded-2xl mt-4 mb-4 p-4'>
            <h2 className='self-center justify-self-center'>{ icon }</h2>
            <p style={{color: `${scheme}` }} className={`text-4xl`}>{ title }</p>

            <article className="included grid mt-2">
                {
                    included.map((inc) => (
                        <p className='flex gap-1 justify-center items-center text-center text-white'><TiTick fill='green' className=''/> { inc }</p>
                    ))
                }
            </article>
        </motion.section>
     );
}
 
export default Skill;