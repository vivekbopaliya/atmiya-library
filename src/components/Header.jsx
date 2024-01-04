import React from "react";
import atmiyalogo from "../images/atmiya-biglogo.png";
import "../index.css";

const Header = () => {
  return (
    <main className="px-4 flex shadow  border-b border-black border-opacity-20   justify-between items-center   bg-white">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-4 ">
          <img
            src={atmiyalogo}
            alt="Atmiya Logo"
            className="w-full h-[7.5rem] object-contain"
          />
          {/* <div className="flex flex-col justify-center">
            <h1 className="text-blue-700 font-bold text-xl">
              Atmiya University
            </h1>
            <h1 className="text-slate-800 font-semibold">
              Library & Learning Center
            </h1>
          </div> */}
        </div>

        {/* Social Medias */}

        {/* Navbar */}
        <div className="flex font-semibold   my-2 gap-6 ">
          <a
            href="/"
            className="hover:text-blue-600 translate duration-100 delay-75 ease-in-out"
          >
            About
          </a>
          <a
            href="/"
            className="hover:text-blue-600 translate duration-100 delay-75 ease-in-out"
          >
            Collection
          </a>

          <a
            href="/"
            className="hover:text-blue-600 translate duration-100 delay-75 ease-in-out"
          >
            Services
          </a>
          <a
            href="/"
            className="hover:text-blue-600 translate duration-100 delay-75 ease-in-out"
          >
            Research Support
          </a>

          <a
            href="/"
            className="hover:text-blue-600 translate duration-100 delay-75 ease-in-out"
          >
            Learning Support
          </a>

          <a
            href="/"
            className="hover:text-blue-600 translate duration-100 delay-75 ease-in-out"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
};

export default Header;
