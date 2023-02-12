import { TiTick } from 'react-icons/ti';

const Skill = ({ included, title, icon }) => {
    return ( 
        <section className='grid align-middle justify-center items-center border border-black mt-4 mb-4 p-4'>
            <h2 className='self-center justify-self-center'>{ icon }</h2>
            <p className='text-4xl'>{ title }</p>

            <article className="included grid ">
                {
                    included.map((inc) => (
                        <p className='flex gap-1 justify-center items-center text-center text-black'><TiTick fill='green' className=''/> { inc }</p>
                    ))
                }
            </article>
        </section>
     );
}
 
export default Skill;