import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  let timerRef = useRef(null)

  function startHandler(){
    timerRef.current=setInterval(()=>{
      setTime(time => time+1)
    },1000)
  }
  function stopHandler(){
    clearInterval(timerRef.current);
    timerRef.current=null;
  }
  function resetHandler(){
    stopHandler();
    setTime(0);
  }

  return (
     <div style={{height:"50vh" ,width:"65vw" , borderRadius:"30px" ,background: "#ad5389" , /* fallback for old browsers */
      background: "-webkit-linear-gradient(to right, #3c1053, #ad5389)",  /* Chrome 10-25, Safari 5.1-6 */
      background: "linear-gradient(to right, #3c1053, #ad5389)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      
      }}>
      <h1>Stop Watch</h1>
      <h1 style={{fontSize:"80px"}}>Time is {time} : Seconds</h1>
      <button style={{marginRight:'16px'}} onClick={startHandler}>START</button>
      <button style={{marginRight:'16px'}} onClick={stopHandler}>STOP</button> 
      <button onClick={resetHandler}>RESET</button> 
     </div>
  )
}

export default App
