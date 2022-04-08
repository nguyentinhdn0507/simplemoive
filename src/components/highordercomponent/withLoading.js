import { Component, useState } from "react";

function withLoading(Component) {
  return (props) => {
    const [data, setData] = useState([1, 2, 3, 4, 5]);
    if (!data || data.length === 0) return <div>Loading....</div>;
    return <Component data={data} {...props}></Component>;
  };
}
export default withLoading;


