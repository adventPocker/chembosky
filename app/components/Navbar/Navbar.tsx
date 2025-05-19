"use client"; // This is a client component 🖐️
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [sidebar, setSidbar] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [nav, setNav] = useState(false);

  return (
    <div className="flex px-4 md:px-0 justify-between h-[60px]">
      <div className="">
        <Link href={"/"}>
          {" "}
          <img
            className="w-[74px] h-[60px]"
            src="/logo2.svg"
            alt="chembosky"
          />{" "}
        </Link>
      </div>
      <div className="hidden md:flex items-center">
        <ul className="flex gap-10 items-center justify-center group">
          <li className="font-clash-medium  text-white text-base leading-6 letter-spacing-[0.015rem] text-left   hover:cursor-pointer  hover:scale-105 ">
            <Link href={"/"}> Home</Link>
          </li>
          <li className="font-clash-medium  text-white text-base leading-6 letter-spacing-[0.015rem] text-left  hover:cursor-pointer hover:scale-105 ">
            <Link href={"/filmography"}>Filmography</Link>
          </li>
          <li className="font-clash-medium  text-white text-base leading-6 letter-spacing-[0.015rem] text-left  hover:cursor-pointer  hover:scale-105 ">
            <Link href={"/about"}> About Us</Link>
          </li>
          <li className=" text-white  hover:cursor-pointer  hover:scale-105 ">
            <img src="/Icons/Vector.png" alt="no icon" />{" "}
          </li>
        </ul>
      </div>
      <div className="md:hidden absolute top-0 right-0 z-10">
        <button
          className="w-14 h-14 relative focus:outline-none  rounded"
          onClick={() => setToggle(!toggle)}
        >
          <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              className={`block absolute h-0.5 w-7  bg-current transform transition duration-500 ease-in-out ${
                toggle ? "rotate-45 text-black" : " -translate-y-1.5 text-white"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${
                toggle ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out ${
                toggle ? "-rotate-45 text-black" : "translate-y-1.5 text-white"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          toggle
            ? "fixed md:hidden top-0 right-0 w-[300px] h-screen bg-black bg-opacity-95 z-10 duration-300"
            : "fixed md:hidden top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <button
          className="w-14 h-14 relative focus:outline-none  rounded"
          onClick={() => setToggle(!toggle)}
        >
          <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${
                toggle ? "rotate-45" : " -translate-y-1.5"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${
                toggle ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${
                toggle ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>

        <nav>
          <ul className="flex flex-col p-4 text-white">
            <div className=" py-4">
              <li className="font-clash-medium text-xl text-white  leading-6 letter-spacing-[0.015] remtext-xl flex cursor-pointer  w-[50%] rounded-full mx-auto p-2 hover:text-gray-300 hover:bg-black">
                <Link href={"/"}> Home</Link>
              </li>
            </div>
            <div className=" py-4">
              <li className="font-clash-medium  text-white text-base leading-6 letter-spacing-[0.015rem  text-xl flex cursor-pointer  w-[50%] rounded-full mx-auto p-2 hover:text-gray-300 hover:bg-black">
                <Link href={"/filmography"}>Filmography</Link>
              </li>
            </div>
            {/* <div className=" py-4">
                  <li className="font-clash-medium  text-white text-base leading-6 letter-spacing-[0.015rem text-xl flex cursor-pointer  w-[50%] rounded-full mx-auto p-2 hover:text-gray-300 hover:bg-black">
                  Awards
                  </li>
                </div> */}
            <div className=" py-4">
              <li className="font-clash-medium  text-white text-base leading-6 letter-spacing-[0.015rem text-xl flex cursor-pointer  w-[50%] rounded-full mx-auto p-2 hover:text-gray-300 hover:bg-black">
                <Link href={"/about"}> About Us</Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
