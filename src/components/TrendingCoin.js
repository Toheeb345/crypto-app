import React from 'react'
import { useNavigate } from 'react-router-dom'

const TrendingCoin = ({data}) => {

    let navigate = useNavigate();

    const getCoinDetails = (id) => {
        navigate(`${id}`)
    }


  return (
    <ul className=' max-w-[300px] w-full bg-gray-200 last:mb-0 rounded-br-3xl rounded-tl-3xl p-4 relative cursor-pointer list-disc hover:bg-cyan hover:bg-opacity-30' onClick={() => getCoinDetails(data.id)}>
        {data ? 
<>
            <h3 className=' text-base flex items-center gap-3'>
                <span className=' text-gray-100 capitalize'>coin name:</span>
                <span className=' text-cyan'> {data.name}</span>
                <img className=' w-6' src={data.small} alt={data.name} />
            </h3>

            <h3 className=' text-base flex items-center gap-3'>
                <span className=' text-gray-100 capitalize'>market cap rank:</span>
                <span className=' text-cyan'> {data.market_cap_rank}</span>
            </h3>

            <h3 className=' text-base flex items-center gap-3'>
                <span className=' text-gray-100 capitalize'>price {"in btc"}:</span>
                <span className=' text-cyan'>
                    {new Intl.NumberFormat("en-IN",{
                        style: "currency",
                        currency: "btc",
                        maximumSignificantDigits: 4
                    }).format(data.price_btc)}
                    </span>
            </h3>
            
            <h3 className=' text-base flex items-center gap-3'>
                <span className=' text-gray-100 capitalize'>score:</span>
                <span className=' text-cyan'> {data.score}</span>
            </h3>
            </>
        : 
        <div className=" w-full h-full flex justify-center items-center">
        <div className=" w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin" role="status" />
        <span className=" ml-3">Fetching...</span>

      </div>}

        </ul>
  )
}

export default TrendingCoin