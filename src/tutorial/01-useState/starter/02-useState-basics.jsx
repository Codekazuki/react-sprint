import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p>Simple react counter</p>
      <h1>{count}</h1>
      <button onClick={increment}>Increase</button>
    </>
  );
};

export default UseStateBasics;
