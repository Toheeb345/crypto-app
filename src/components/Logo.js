import { Link } from "react-router-dom";
import logosvg from "../assets/logo.svg"

const Logo = () => {
    return (
        <Link to="/" className=" absolute top-[1.5rem] left-[1.5rem] decoration-0 no-underline text-lg text-cyan flex items-center">
            <img src={logosvg} alt="cash" />
            <span>CryptoFlow</span>
        </Link>
    );
}
 
export default Logo;