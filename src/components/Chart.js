import React from 'react';
import { useContext } from 'react';
import { useLayoutEffect, useState } from 'react';


import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { CryptoContext } from '../context/CryptoContext';


function CustomTooltip({ payload, label, active, currency = "usd" }) {
  if (active && payload && payload.length > 0) {
    return (
      <div className="custom-tooltip">
        <p className="label text-sm text-green">{`${label} : ${
                 new Intl.NumberFormat("en-IN",{
                  style: "currency",
                  currency: currency,
                  minimumFractionDigits: 5
              }).format(payload[0].value)
          }`}</p>
      </div>
    );
  }

  return null;
}


const ChartComponent = ({data, currency, type}) => {
  return (
    <ResponsiveContainer height={"90%"}>
    <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey={type}stroke="#14ffac" strokeWidth={"1px"} />
    <XAxis dataKey="date" hide/>
    <YAxis dataKey={type} hide domain={["auto", "auto"]}/>
    <Tooltip content={<CustomTooltip />}  currency={currency} cursor={false} wrapperStyle={{outline: "text-gray-300"}}/>
    <CartesianGrid stroke="#323232"  />
    <Legend />
  </LineChart>
  </ResponsiveContainer>
  )
  };


const Chart = ({id}) => {
  const [ chartData, setChartData] = useState();
  let {currency} = useContext(CryptoContext);
  const [type, setType] = useState("prices");
  const [days, setDays] = useState(7);

  useLayoutEffect(() => {
    const getChartData = async (id) => {
      try{

        const data = await fetch(
            `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
            ).then(res => res.json()).then(json => json);
  
        console.log("chart-data", data);


          let convertedData = data[type].map(item => 
              {
                return{
                  date: new Date(item[0]).toLocaleDateString(),
                  [type]: item[1],
                }
              }
           )
console.log("convertedData", convertedData);

        setChartData(convertedData);
    }catch(error){
        console.log(error);
    }
    }
    getChartData(id)
  }, [id, type, days])


  return (
    <div className=' w-full h-[60%]'>
      <ChartComponent data={chartData} currency={currency} type={type} />
      <div className=" flex gap-4 justify-between">
        <div className=" flex justify-between md:flex-row flex-col gap-3">
        <button className={` text-sm py-0.5 px-1.5 bg-opacity-30 rounded-md capitalize ${type === "prices" ? 'bg-green text-green ' : 'bg-gray-200 text-gray-100'}`} onClick={() => setType("prices")}>Price</button>
        <button className={` text-sm py-0.5 px-1.5 bg-opacity-30 rounded-md capitalize ${type === "market_caps" ? 'bg-green text-green ' : 'bg-gray-200 text-gray-100'}`} onClick={() => setType("market_caps")}>market
         caps</button>
        <button className={` text-sm py-0.5 px-1.5 bg-opacity-30 rounded-md capitalize ${type === "total_volumes" ? 'bg-green text-green ' : 'bg-gray-200 text-gray-100'}`} onClick={() => setType("total_volumes")}>total volumes</button>
        </div>


        <div className=" flex justify-between md:flex-row flex-col gap-3">
        <button className={` text-sm py-0.5 px-1.5 bg-opacity-30 rounded-md capitalize ${days === 7 ? 'bg-green text-green ' : 'bg-gray-200 text-gray-100'}`} onClick={() => setDays(7)}>7d</button>
        <button className={` text-sm py-0.5 px-1.5 bg-opacity-30 rounded-md capitalize ${days === 14 ? 'bg-green text-green ' : 'bg-gray-200 text-gray-100'}`} onClick={() => setDays(14)}>14d</button>
        <button className={` text-sm py-0.5 px-1.5 bg-opacity-30 rounded-md capitalize ${days === 30 ? 'bg-green text-green ' : 'bg-gray-200 text-gray-100'}`} onClick={() => setDays(30)}>30d</button>
      </div>
      </div>
    </div>
  )
}

export default Chart