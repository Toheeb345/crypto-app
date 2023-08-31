import { useContext, useRef, useState } from "react";
import paginationarrow from "../assets/pagination-arrow.svg";
import { CryptoContext } from "../context/CryptoContext";
import submitIcon from "../assets/submit-icon.svg"


const PerPage = () => {
    const {setPerPage} = useContext(CryptoContext)
   const inputRef = useRef(null);

   const handleSubmit = (e) => {
    e.preventDefault();
    let val = inputRef.current.value;
    if (val !== 0) {
        setPerPage(val);
        inputRef.current.value = val;
    }
   }

    return(
        <form className=" relative flex items-center font-nunitio mr-12" onSubmit={handleSubmit}>
        <label htmlFor="perpage" className=" relative flex justify-center items-center mr-2 font-bold tracking-wide">per page:</label>

        <input type="number" name="perpage" className=" w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 outline-0 border border-gray-200 focus:border-cyan leading-4" required min={1} max={200} placeholder="10" ref={inputRef} />

        <button type="submit" className=" ml-1 cursor-pointer">
            <img className=" w-full h-auto " src={submitIcon} alt="" />
        </button>
    </form>
    )
}



const Pagination = () => {


    let {page, setPage, totalPages, perPage, cryptoData} = useContext(CryptoContext);

    const TotalNumber = Math.ceil(totalPages / perPage);

    const next = () => {
        if (page === TotalNumber) {
            return null;
        } else{
            setPage(page + 1)
        }
    }

    const prev = () => {
        if (page === 1) {
            return null;
        } else{
            setPage(page - 1)
        }
    }

    const multiStepNext = () => {
        if (page+3 >= TotalNumber) {
            setPage(TotalNumber - 1)
        } else{
            setPage(page + 3)
        }
    }

    const multiStepPrev = () => {
        if (page - 3 <= 1) {
            setPage(TotalNumber + 1)
        } else{
            setPage(page - 2)
        }
    }

if (cryptoData && cryptoData.length >= perPage) {
    return (
        <div className=" flex items-center">
            <PerPage />
            <ul className=" flex items-center justify-end text-sm">
                <li className=" flex items-center">
                    <button className=" outline-0 hover:text-cyan w-8" onClick={prev}>
                    <img className=" w-full h-auto rotate-180" src={paginationarrow} alt="left" />
                    </button>
                </li>
                {
                    (page + 1 === TotalNumber || page === TotalNumber) ?                 <li><button onClick={multiStepPrev} className=" w-8 h-8 rounded-full flex justify-center items-center outline-0 hover:text-cyan text-lg">...</button></li> : null
                }
                {
                    (page-1 !== 0) ?                 <li><button className=" w-8 h-8 rounded-full flex justify-center items-center outline-0 hover:text-cyan bg-gray-200 mx-1.5" onClick={prev}>{ page - 1}</button></li> : null
                }
                <li><button disabled className=" w-8 h-8 rounded-full flex justify-center items-center outline-0 bg-cyan text-gray-300 mx-1.5">{ page}</button></li>
                {
                    (page+1 !== TotalNumber && page !== TotalNumber) ?              <li><button className=" w-8 h-8 rounded-full flex justify-center items-center outline-0 hover:text-cyan bg-gray-200 mx-1.5" onClick={next}>{ page + 1}</button></li> : null
                }
                {
                    page+1 !== TotalNumber && page !== TotalNumber ?                 <li>{" "}<button onClick={multiStepNext} className=" w-8 h-8 rounded-full flex justify-center items-center outline-0 hover:text-cyan text-lg">...</button></li> : null
                }
              {
                page !== TotalNumber ?   <li className=" w-8 h-8 rounded-full flex justify-center items-center outline-0 hover:text-cyan bg-gray-200 mx-1.5"><button onClick={() => setPage(TotalNumber)} className="w-8 h-8 rounded-full flex justify-center items-center outline-0 hover:text-cyan">{TotalNumber}</button></li> : null
              }
                <li>
                    <button className=" outline-0 hover:text-cyan w-8" onClick={next}>
                    <img className=" w-full h-auto" src={paginationarrow} alt="right" />
                    </button>
                </li>
            </ul>
        </div>
    );
} else {
    return null;
}
}
 
export default Pagination;