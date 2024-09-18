import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { restaurant } from "./data";
import Card from "./Card";

export default function TopRest() {
  const [slide, setSlide] = useState(0);

  const leftSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
      console.log(slide);
    }
  };

  const rightSlide = () => {
    if (slide < 2) {
      setSlide(slide + 1);
      console.log(slide);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-between">
        <div className="text-[25px] font-bold ml-1 mb-3">
          Top restaurant chains in Kochi
        </div>
        <div className="flex">
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#02060c26] rounded-full mx-1">
            <FaArrowLeft onClick={leftSlide} />
          </div>
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#02060c26] rounded-full mx-1">
            <FaArrowRight onClick={rightSlide} />
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex gap-7 duration-500"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {restaurant.map((rest, id) => (
            <Card {...rest} key={id} />
          ))}
        </div>
      </div>
      <hr className="my-5 border-[1px]"></hr>
    </div>
  );
}
