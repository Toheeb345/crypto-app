import { Outlet } from "react-router-dom";
import Filters from "../components/Filters";
import TableComponent from "../components/TableComponent";

const Crypto = () => {
    return (
        <section className=" w-[80%] h-full flex flex-col mt-16 mb-24 relative gap-20 md:gap-5 overflow-x-hidden">
            
            <Filters />
            <TableComponent />
            <Outlet />
        </section>
    );
}
 
export default Crypto;