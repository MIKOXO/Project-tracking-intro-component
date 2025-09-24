import React from "react";
import illustrationDevices from "../assets/illustration-devices.svg";

const Hero = () => {
  return (
    <section className="overflow-x-hidden relative 2xl:mx-auto 2xl:container">
      <div className="max-w-7x flex flex-col-reverse sm:flex-row items-center justify-between">
        {/* Hero Text Section */}
        <div className="mx-auto container mt-14 px-4 lg:px-20">
          <div className="flex flex-row items-center gap-4 uppercase font-BarlowCondensed">
            <span className="rounded-full px-3 bg-black text-white font-bold">
              New
            </span>
            <h3 className="text-Blue950 opacity-50 font-medium tracking-[3px]">
              Monograph dashboard
            </h3>
          </div>
          <div className="pt-5 pb-10 font-Barlow text-Blue950">
            <h1 className="text-Blue950 font-extrabold text-[28px] lg:text-[52px] uppercase lg:w-[50%]">
              Powerful insights into your team
            </h1>
            <p className="pt-5 text-[18px] lg:w-[25%] opacity-80 font-normal">
              Project planning and time tracking for agile teams
            </p>
          </div>
          <div className="pb-5 flex flex-col lg:flex-row lg:items-center max-sm:justify-between gap-7 font-BarlowCondensed">
            <button className="px-8 py-3 text-white bg-Red400 font-semibold rounded-lg shadow-sm uppercase text-[18px] hover:bg-opacity-75 ease-in-out duration-300">
              Schedule a demo
            </button>
            <a
              href="#"
              className="text-Blue950 opacity-50 tracking-[4px] uppercase"
            >
              To see a preview
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative lg:absolute lg:pt-16 lg:-right-0 flex justify-center lg:justify-end">
          <img
            src={illustrationDevices}
            alt="Dashboard Illustration"
            className="lg:max-w-2xl h-auto sm:-mr-[66px] 2xl:-mr-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
