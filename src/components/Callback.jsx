import React, { useCallback, useState } from "react";
import Head from "./Head";

export default function Callback() {
  const [count, setCount] = useState(0);
  const newFn = useCallback((count) => {}, [count]);
  return (
    <>
      <div className="text-center">
        <Head newFn={newFn} />
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Click Here</button>
      </div>
    </>
  );
}
