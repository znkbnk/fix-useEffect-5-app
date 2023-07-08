//incorrect

import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `Count: ${count}`;
    setLoading(true);
  }, [count]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    setLoading(false);
    setCount(data.count);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const renderCounter = () => {
    return (
      <div>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        {loading && <p>Loading...</p>}
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  };

  return <div>{loading ? <p>Loading...</p> : renderCounter()}</div>;
};

export default Counter;
