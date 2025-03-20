import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((c) => c + 1);
    console.log(count);
  };
  const reset = () => {
    setCount(count * 0);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p>Simple react counter</p>
      <h1>{count}</h1>
      <button onClick={decrease}>decrease</button>
      <button onClick={increment}>Increase</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default UseStateBasics;
