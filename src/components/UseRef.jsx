import React, { useEffect, useState, useRef } from "react";

export default function UseRef() {
  const [value, setValue] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <div className="w-[1200px] m-auto text-center">
        <button onClick={() => setValue((prev) => prev - 1)}>-1</button>
        <h1>{value}</h1>
        <button onClick={() => setValue((prev) => prev + 1)}>+1</button>
        <h1>Render Count:{count.current}</h1>
      </div>
    </>
  );
}
