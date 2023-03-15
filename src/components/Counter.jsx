import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => {
    console.log("salem", count);
        return count + 1
    });
  };
  return (
    <>
      <h2>My Counter</h2>
      <h4>{count}</h4>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Counter;
