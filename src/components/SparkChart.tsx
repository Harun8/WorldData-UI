import { useEffect, useState } from "react"
import { Card } from "./ui/Card"
import axios from "axios"
import { Sparklines, SparklinesLine } from 'react-sparklines';


export function SparkChart({data, name, code}: any) {



  return (
    <Card className="mx-auto flex max-w-lg items-center justify-between px-4 py-3.5">
      
      <div className="flex items-center space-x-2.5">
        <p className="font-medium text-gray-700 dark:text-gray-300">        {name}
        </p>
        <span className="text-sm text-gray-500 dark:text-gray-500">
        {code}
        </span>
      </div>

      <Sparklines data={data}  width={150} height={20} margin={1} >
      <SparklinesLine color="purple" />


      </Sparklines>
     

      {/* <div className="flex items-center space-x-2.5">
        <span className="font-medium text-gray-700 dark:text-gray-300">
          179.26
        </span>
        <span className="rounded bg-emerald-500 px-2 py-1 text-sm font-medium text-white">
          +1.70%
        </span>
      </div> */}
    </Card>
  )
}