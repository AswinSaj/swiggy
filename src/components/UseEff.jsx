import React, { useState } from "react";
import { useEffect } from "react";

export default function UseEff() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }, []);

  return (
    <>
      <div className="w-[1200px] m-auto text-center">
        <h1>I have rendered {count} times</h1>
      </div>
    </>
  );
}
