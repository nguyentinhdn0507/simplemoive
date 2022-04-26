import React, { useState, useMemo } from "react";

function startNumber(number) {
  console.log("chay lan dau tien");
  const start = new Date();
  // doi 2s
  while (new Date() - start < 2000)
    console.log("ket thuc", new Date() - start, "ms");
  return number * number;
}
const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(20);
  const number = useMemo(() => {
    return startNumber(num);
  }, [num]);
  // truyền empty [] dependence đoạn code trong useMemo chỉ thực hiện 1 lần duy nhất khi component đc mount
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <p>Number : {number}</p>
    </div>
  );
};
// khi 1 component có sự thay đổi của giá trị props or state thì compnent UseMemo sẽ re-render và code sẽ được thực thi lại
// => useMemo sẽ giúp chúng ta ghi nhớ lại kết quả trả về của function start có cùng 1 đầu vào. sẽ tối ưu về mặt performant

export default UseMemo;
