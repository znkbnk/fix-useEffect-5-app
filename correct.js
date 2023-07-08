//correct

import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.example.com/count");
      const data = await response.json();
      setCount(data.count);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const renderCounter = () => {
    return (
      <div>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    );
  };

  return <div>{loading ? <p>Loading...</p> : renderCounter()}</div>;
};

export default Counter;
