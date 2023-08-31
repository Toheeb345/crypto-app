import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        
        <nav className=" w-[40%] mt-16 flex justify-around items-center align-middle border border-cyan rounded-lg">
            <NavLink to="/" end className={
                ({isActive}) => {
                    return ` w-full text-base text-center font-nunitio m-2.5
                    ${isActive ? ' bg-cyan text-gray-300 ' : 'bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300'}   border-0 cursor-pointer rounded capitalize font-bold`
                }
            }>
                Crypto
            </NavLink>

            <NavLink to="/trending" className={
                ({isActive}) => {
                    return ` w-full text-base text-center font-nunitio m-2.5
                    ${isActive ? ' bg-cyan text-gray-300 ' : 'bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300'}   border-0 cursor-pointer rounded capitalize font-bold`
                }
            }>
                Trending
            </NavLink>

            <NavLink to="/saved" className={
                ({isActive}) => {
                    return ` w-full text-base text-center font-nunitio m-2.5
                    ${isActive ? ' bg-cyan text-gray-300 ' : 'bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300'}   border-0 cursor-pointer rounded capitalize font-bold`
                }
            }>
                Saved
            </NavLink>
        </nav>
    );
}
 
export default Navigation;