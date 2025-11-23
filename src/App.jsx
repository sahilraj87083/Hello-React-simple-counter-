import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let val = 10;
  let [value, setValue] = useState(10);
  

  let IncreaseVal = () =>{
    setValue(value + 1 > 20 ? 20 : value + 1);
  }
  let DeccreaseVal = () =>{
    setValue(value - 1 < 0 ? 0 : value - 1);
  }

  return (
    <>
      <h1>Value : {value}</h1>
      <button onClick={IncreaseVal}>Inc</button>
      <button onClick={DeccreaseVal}>Dec</button>
    </>
  )
}

export default App
