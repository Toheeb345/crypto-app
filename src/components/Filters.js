import Search from "./Search";
import submitIcon from "../assets/submit-icon.svg";
import selectIcon from "../assets/select-icon.svg";
import { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";
import resetSvg from "../assets/reset.svg"
import { useRef } from "react";

const Filters = () => {

    let {setCurrency, setSortBy, resetFunction} = useContext(CryptoContext);
    let currencyRef = useRef(null)


    const handleCurrencySubmit = (e) => {
        e.preventDefault();
        let val = currencyRef.current.value;
        setCurrency(val);
        currencyRef.current.value = "";
    }

    const handleSort = (e) => {
        e.preventDefault();
        let val = e.target.value;
        setSortBy(val);
    }


    return (
        <div className="w-96 md:w-full max-w-[15em] md:max-w-full py-2 lg:border-2 mx-auto lg:border-gray-100 rounded-lg flex items-center lg:justify-between relative flex-wrap lg:flex-nowrap justify-center gap-5 px-3 ">
            <Search />
            <div className=" flex gap-5 flex-wrap lg:flex-nowrap relative ">
            <form className=" relative flex items-center font-nunitio order-1 md:order-[0]" onSubmit={handleCurrencySubmit}>
                <label htmlFor="currency" className=" relative flex justify-center items-center mr-2 font-bold tracking-wide">currency:</label>

                <input type="text" name="currency" className=" w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 outline-0 border border-gray-200 focus:border-cyan leading-4" required placeholder="usd" ref={currencyRef} />

                <button type="submit" className=" ml-1 cursor-pointer">
                    <img className=" w-full h-auto " src={submitIcon} alt="" />
                </button>
            </form>


            <label className=" relative flex items-center md:justify-center justify-between w-full md:w-auto">
                <span className=" font-bold mr-2 whitespace-nowrap">sort by: </span>
                <select name="sortby" className=" rounded bg-gray-200 text-base pl-2 pr-10 py-0.5 leading-4 capitalize outline-0 flex-1" onClick={handleSort}>
                    <option value="market_cap_desc">market cap desc</option>

                    <option value="market_cap_asc">market cap asc</option>

                    <option value="gecko_asc">gecko asc</option>

                    <option value="gecko_desc">gecko desc</option>

                    <option value="volume_desc">volume desc</option>

                    <option value="volume_asc">volume asc</option>

                    <option value="id_asc">id asc</option>

                    <option value="id_desc">id desc</option>
                </select>
            </label>
            <button className=" w-8 hover:scale-110 transition-all ease-in-out absolute right-0 md:static top-11" onClick={resetFunction}>

            <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className=" w-full h-full fill-cyan"
    style={{
      msTransform: "rotate(360deg)",
      WebkitTransform: "rotate(360deg)",
      transform: "rotate(360deg)",
    }}
    viewBox="0 0 24 24"
  >
    <path
      d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z"
    />
    <path
      d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z"
    />
    <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z" />
  </svg>
            </button>

            </div> 


        </div>
    );
} 
 
export default Filters;