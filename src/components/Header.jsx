import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoIosHelpBuoy } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    console.log("hi");
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <CiSearch />,
      name: "Search",
    },
    {
      icon: <RiDiscountPercentLine />,
      name: "Offers",
      sup: "New",
    },
    {
      icon: <IoIosHelpBuoy />,
      name: "Help",
    },
    {
      icon: <CiUser />,
      name: "User",
    },
    {
      icon: <IoBagOutline />,
      name: "Cart",
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500 "
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] h-full bg-white absolute duration-300"
          style={{ left: toggle ? "0%" : "-100%" }}
        ></div>
      </div>
      <header className="p-3 shadow-xl sticky top-0 bg-white z-50">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img src="images/logo.png" alt="" className="w-full" />{" "}
            {/*w-full of parent that is 100px of div*/}
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-[black]">
              Kuriachira{" "}
            </span>
            Thrissur, Kerala, India{" "}
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className="font-bold inline text-[0.9rem] text-[#fc8019] "
            />
            {/*icon svg so use inline*/}
          </div>
          <nav className=" hidden md:flex list-none gap-10 ml-auto text-[18px] font-semibold">
            {links.map((link, index) => (
              <li key={index} className="flex items-center gap-2">
                {link.icon}
                {link.name}
                <sup>{link.sup}</sup>
              </li>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
