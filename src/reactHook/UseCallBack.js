import React, { useCallback, useState } from "react";
import HackerNews from "../hackerNewAPI/HackerNews";

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const handleIncre = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <HackerNews onInCrease={handleIncre}></HackerNews>
    </div>
  );
};

export default UseCallBack;
