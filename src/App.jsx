import React, { useEffect, useRef, useState } from 'react'
import './App.css';

const App = () => {
  let input = useRef(null);
  const [count, setCount] = useState(1);
  let newCount = 0;

  const increment = () => {
    if (Number(input.current.value)) {
      newCount = count + Number(input.current.value);
    } else {
      newCount = count + 1;
    }
    setCount(newCount);
    localStorage.setItem('count', JSON.stringify(newCount));
  }

  const decrement = () => {
    if (Number(input.current.value)) {
      newCount = count > 1 ? count - Number(input.current.value) : 1;
    } else {
      newCount = count - 1;
    }
    setCount(newCount);
    localStorage.setItem('count', JSON.stringify(newCount));
  }

  // ✅ Reset Logic
  const reset = () => {
    setCount(1);
    localStorage.setItem('count', JSON.stringify(1));
    input.current.value = ""; // clear input
  }

  useEffect(() => {
    let oldCount = JSON.parse(localStorage.getItem('count')) || 1;
    setCount(oldCount);
  }, [])

  return (
    <div className="container">
      <h2>Counter App</h2>

      <input 
        type="number" 
        className="input-box"
        placeholder="Enter Number" 
        ref={input} 
      />

      <div>
        <button 
          className="button decrement" 
          onClick={decrement}
        >
          −
        </button>

        <span className="count">{count}</span>

        <button 
          className="button increment" 
          onClick={increment}
        >
          +
        </button>
      </div>

      {/* ✅ Reset Button */}
      <button 
        className="button reset" 
        onClick={reset}
      >
        Reset
      </button>
    </div>
  )
}

export default App;