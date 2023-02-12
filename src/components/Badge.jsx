import { Link } from "react-router-dom";
import { GrContact } from 'react-icons/gr';

const Badge = () => {
    return ( 
        <article className="absolute top-2 right-3 flex w-[6rem] h-[2.3rem] bg-white  hover:bg-gray-400 p-2 rounded-xl">
            <Link to='/contact' className=" flex gap-2 justify-center items-center">
                <h2>Contact</h2>
                <GrContact/>
            </Link>
        </article>
     );
}
 
export default Badge;