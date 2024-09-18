import React, { useState } from "react";

export default function Testing() {
  const [click, setClick] = useState(0);

  const buttonClick = () => {
    setClick((prev) => prev + 1);
    setClick((prev) => prev + 1);
    setClick((prev) => prev + 1);
    setClick((prev) => prev + 1);
  };
  const [car, setCar] = useState({
    brand: "ferrari",
    model: "rome",
    year: "2022",
  });
  const changeName = () => {
    setCar((prev) => {
      return { ...prev, brand: "Maruti" };
    });
  };
  return (
    <>
      <div className="w-[1200px] m-auto text-center">
        <h1>Click count is {click}</h1>
        <button className="border border-gray-500 p-5" onClick={buttonClick}>
          CLICK
        </button>
        <h1>the car name is {car.brand}</h1>
        <h2>model name is {car.model}</h2>
        <h2>year is {car.year}</h2>
        <button className="border border-gray-500 p-5" onClick={changeName}>
          click here to change name
        </button>
      </div>
    </>
  );
}
