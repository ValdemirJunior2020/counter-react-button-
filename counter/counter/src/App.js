import React, { useState } from "react";


function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    
    <div>
      <div>
        <center><button onClick={handleDecrement}>-</button></center>
        <center><h5>Count is {count}</h5></center>
        <center><button onClick={handleIncrement}>+</button></center>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default Counter;