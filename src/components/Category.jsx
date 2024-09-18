import React, { useState } from "react";
import { images } from "./data";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
export default function Category() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide + 3);
    console.log(images.length);
    console.log(slide);
  };
  const prevSlide = () => {
    setSlide(slide - 3);
  };
  return (
    <>
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex justify-between">
          <div className="text-[25px] font-bold">Whats on your mind</div>
          <div className="flex">
            <div
              className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#02060c26] rounded-full mx-1"
              onClick={slide <= 0 ? null : prevSlide}
            >
              <FaArrowLeft />
            </div>
            <div
              className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#02060c26] rounded-full mx-1"
              onClick={slide + 3 >= images.length - 5 ? null : nextSlide}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="flex   overflow-hidden ">
          {images.map((image, index) => (
            <div
              style={{ transform: `translateX(-${slide * 100}%)` }}
              key={image.id}
              className="w-[200px] flex-shrink-0  duration-500"
            >
              <img src={image.src} alt={image.alt} className="" />
            </div>
          ))}
        </div>
        <hr className="my-5  border-[1px]"></hr>
      </div>
    </>
  );
}
