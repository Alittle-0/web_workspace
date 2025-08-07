import React from "react";
import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const handleChange = (e, state) => {
    e.preventDefault();
    if (state === "increment") {
      setCount(count + 1);
    } else if (state === "decrement") {
      setCount(count - 1);
    } else setCount(0);
  };

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <div className="button">
        <button onClick={(e) => handleChange(e, "increment")}>Increment</button>
        <button onClick={(e) => handleChange(e, "decrement")}>Decrement</button>
        <button onClick={(e) => handleChange(e, "reset")}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
