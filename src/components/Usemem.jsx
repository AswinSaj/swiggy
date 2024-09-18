import React, { useMemo, useState } from "react";

export default function Usemem() {
  const [cube, setCube] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("success");
    return Math.pow(num, 3);
  }
  const result = useMemo(() => cubeNum(cube), [cube]);

  return (
    <>
      <div>
        <input
          type="text"
          value={cube}
          onChange={(e) => {
            setCube(e.target.value);
          }}
          className="border"
        />
        <h1>cube of number is {result}</h1>
        <button onClick={() => setCounter(counter + 1)}>Counter++</button>
        <h1>Counter:{counter}</h1>
      </div>
    </>
  );
}
