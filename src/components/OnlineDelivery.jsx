import React, { useEffect, useRef, useState } from "react";
import { restaurant } from "./data";
import Card from "./Card";

export default function OnlineDelivery() {
  const filterRef = useRef(null);
  const markerRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the marker is in the viewport
        setIsAtTop(entry.boundingClientRect.top < 0);
      },
      {
        threshold: [0], // Trigger when the marker leaves the viewport
      }
    );

    if (markerRef.current) {
      observer.observe(markerRef.current);
    }

    return () => {
      if (markerRef.current) {
        observer.unobserve(markerRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto mb-[100px] ">
      <div className="flex items-center justify-between">
        <div className="text-[25px] font-bold">
          Restaurants with online food delivery in Kochi
        </div>
      </div>
      <div ref={markerRef}></div> {/* Marker element to detect when to unfix */}
      <div
        ref={filterRef}
        className={`transition-all duration-300 ${
          isAtTop
            ? "fixed top-0 z-[9999] bg-white w-full max-w-[1200px] h-[120px] "
            : ""
        }`}
      >
        <ul className="flex gap-5 m-5 text-sm ">
          <li className="border border-black p-2 rounded-2xl ">Filter</li>
          <li className="border border-black p-2 rounded-2xl">Sort by</li>
          <li className="border border-black p-2 rounded-2xl">Fast Delivery</li>
          <li className="border border-black p-2 rounded-2xl">New on swiggy</li>
        </ul>
      </div>
      <div className=" grid grid-cols-2 md:grid grid-cols-4 gap-4 overflow-hidden">
        {restaurant.map((rest, id) => (
          <Card {...rest} key={id} />
        ))}
      </div>
    </div>
  );
}
