import { Link } from "react-router-dom";
import logosvg from "../assets/logo.svg"

const Logo = () => {
    return (
        <Link to="/" className=" absolute top-[1.5rem] left-[1.5rem] decoration-0 no-underline text-lg text-cyan flex items-center justify-center">
            {/* <img src={logosvg} alt="cash" /> */}
            <div className=" font-nunitio font-extrabold md:text-[50px] text-xl italic">K</div>
            <span className=" italic">ripToe-Flow</span>
        </Link>
    );
}
 
export default Logo;