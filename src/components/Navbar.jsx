import React, { useState } from "react";
import logo from "../assets/logo.svg";
import clsx from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="absolute top-0 right-0 w-1/2 bg-Blue100 h-[60%] rounded-bl-[100px]"></div>

      <header className="mx-auto container py-10 px-4 lg:px-20 relative w-full z-30">
        <nav className="flex flex-row items-center justify-between">
          <div>
            <img src={logo} alt="Logo" />
          </div>

          <div className="hidden sm:flex sm:flex-row items-center gap-8">
            <a href="#" className="nav-link">
              Product
            </a>
            <a href="#" className="nav-link">
              Features
            </a>
            <a href="#" className="nav-link">
              Pricing
            </a>
            <div className="opacity-30 text-[28px]">•</div>
            <a href="#" className="nav-link opacity-30 ml-4">
              Login
            </a>
          </div>

          {/* Mobile Nav */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-8 h-[21px] flex flex-col justify-between items-center group"
            >
              <div
                className={clsx(
                  "w-8 h-[2px] bg-black transform transition duration-300 ease-in-out overflow-y-auto",
                  isOpen ? "rotate-45 translate-y-[10px]" : ""
                )}
              />
              <div
                className={clsx(
                  "w-8 h-[2px] bg-black transition duration-300 ease-in-out",
                  isOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <div
                className={clsx(
                  "w-8 h-[2px] bg-black transform transition duration-300 ease-in-out",
                  isOpen ? "-rotate-45 -translate-y-[10px]" : ""
                )}
              />
            </button>
            <div
              className={clsx(
                "bg-white shadow-xl rounded-xl w-full absolute px-6 py-4 top-28 right-0 items-center justify-center z-10 overflow-hidden",
                isOpen ? "flex" : "hidden"
              )}
            >
              <div className="flex flex-col items-center gap-6">
                <a href="#" className="nav-link">
                  Product
                </a>
                <a href="#" className="nav-link">
                  Features
                </a>
                <a href="#" className="nav-link">
                  Pricing
                </a>
                <div className="flex px-8">
                  <span className="h-[0.5px] w-[250px] bg-gray-600 opacity-25"></span>
                </div>
                <a href="#" className="nav-link opacity-30 ">
                  Login
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
