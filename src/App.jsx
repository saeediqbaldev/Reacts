import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


   const incValu = () =>{

    console.log("clicked");
   if(count <20){

    setCount(count+1);
   }

   else{

    setCount(count);
   }
   }

   const decValue = () =>{

    if(count >0 ){

      setCount(count-1);
    }

    else{
      setCount(count)
    }
    console.log("clicked");
   }
  return (
    <>
      <h1> Learning React Js</h1>
      <h2>Counter Value : {count} </h2>

      <div>

        <button onClick={incValu}>PLUS</button>
        <br/>
        <button onClick={decValue}>MINUS</button>
      </div>
    </>
  )
}

export default App
