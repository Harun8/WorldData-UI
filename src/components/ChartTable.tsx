
import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { SparkChart } from './SparkChart';

interface Country {
    countryName: string;
    countryCode: string
    value: number; // Adjust the type if needed
  }
  

const ChartTable = () => {

    const [data, setData] = useState<Number[]>()
    const [originalDataSet, setOriginalDataSet] = useState<Country[]>()
  
  
    useEffect(()=> {
  
      const getPopulationTable = async() => {
        const {data} =  await axios.get("http://localhost:8080/api/v1/country/population")
  
        console.log("data", data)
        setOriginalDataSet(data)
        const transformedData = data.slice(0, data.length - 1).map((item: any) => (Number(item.value)));
        console.log("transformed data", transformedData)
        
        setData(transformedData)
      }
  
      getPopulationTable()
    },[])

    if (!data) {
      return <div>Loading...</div>;
    }

  return (
    <>
    <SparkChart data={data} name={originalDataSet != undefined ? originalDataSet[0].countryName : "Null" } code={originalDataSet != undefined ? originalDataSet[0].countryCode : "Null"} ></SparkChart>
    </>
  )
}

export default ChartTable