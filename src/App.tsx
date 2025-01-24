import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NumberTicker } from './components/ui/number-ticker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <NumberTicker
       value={100}
       className='whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white'
       ></NumberTicker>
      </div>
    </>
  )
}

export default App
