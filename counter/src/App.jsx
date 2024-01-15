import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = () => {
    if(count<20) count++;
    setCount(count);
  }
  
  const removeValue = () => {
    if(count>0) count--;
    setCount(count);
  }

  return (
    <>
      <h1>Abhishek Saikia</h1>
      <h2>Counter = {count}</h2>

      <button onClick={addValue}>Increment</button>
      <br />
      <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
