import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NumberTicker } from './components/ui/number-ticker'
import { DotPattern } from './components/ui/dot-pattern'
import { cn } from './lib/utils'
import { SparkAreaExample } from './components/table'
function App() {


  return (
    <>
      <div className="flex flex-col items-center h-screen w-screen  overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <h1 className=" text-4xl md:text-7xl font-bold font-sans mb-4 font-extrabold	 text-sky-800 ">
        Data from {" "}
         <NumberTicker
       value={265}
       className='whitespace-pre-wrap text-5xl font-medium tracking-tighter font-extrabold  text-sky-800  dark:text-white'
       ></NumberTicker>
          <span> {" "} places around the world</span>
        </h1>

      <DotPattern 
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />


<SparkAreaExample></SparkAreaExample> 

    </div>
      {/* <div className="flex flex-col items-center mt-24 text-center min-h-screen">

      <h1 className=" text-4xl md:text-7xl font-bold font-sans mb-4 font-extrabold	 text-sky-800 ">
        Data from {" "}
         <NumberTicker
       value={265}
       className='whitespace-pre-wrap text-5xl font-medium tracking-tighter font-extrabold  text-sky-800  dark:text-white'
       ></NumberTicker>
          <span> {" "} places around the world</span>
        </h1>
      
      </div> */}
    </>
  )
}

export default App
