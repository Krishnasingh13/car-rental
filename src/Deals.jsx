import React from "react";
import Logo from "./components/Logo";

const Deals = () => {
  return (
    <div>
      <nav className="container 2xl:relative py-10 flex items-center justify-between">
        <div className=" flex items-center gap-3">
          <Logo />
          <h1 className=" text-base text-[#1572D3] font-semibold">Buy Cars</h1>
        </div>

        <div className=" space-x-10">
          {["Become a dealer", "Deals", "How it work", "Why choose us"].map(
            (info, index) => (
              <button
                key={index}
                className=" text-base font-medium text-[#484848]"
              >
                {info}
              </button>
            )
          )}
        </div>
        <div className=" space-x-4">
          <button className="py-2 px-6 text-base font-medium text-black">
            Sign In
          </button>
          <button className="py-2 px-6 text-base font-medium text-white bg-[#1572D3] rounded-lg">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Deals;
