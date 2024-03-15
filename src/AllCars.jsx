import React from "react";
import Logo from "./components/Logo";
import User_icon from "../src/assets/icon/user_icon.svg";
import Type_icon from "../src/assets/icon/type_icon.svg";
import Conditioner_icon from "../src/assets/icon/conditioner_icon.svg";
import Door_icon from "../src/assets/icon/door_icon.svg";
import Car_img from "../src/assets/image/car_img1.png";

const AllCars = () => {
  return (
    <div className="relative">
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

      <div className=" container">
        {/* <h1 className=" text-[38px] font-medium text-black text-center">
          Most popular cars deals
        </h1> */}

        <div className="flex items-start justify-between gap-5">
          <div className=" bg-black w-[30%] h-screen">
            
          </div>
          <div className="">
            <div className="grid grid-cols-3 gap-7 mt-4">
              {[0, 1, 2, 3].map(() => (
                <div className=" bg-white shadow-xl p-5 rounded-xl">
                  <div className=" flex items-center justify-center">
                    <img
                      src={Car_img}
                      alt=""
                      className="aspect-auto w-full h-full "
                    />
                  </div>
                  <h1 className=" text-lg font-semibold text-black mt-2">
                    Jaguar XE L P250
                  </h1>
                  <p className=" text-sm font-semibold mt-1 -ml-1">
                    ⭐ 4.8{" "}
                    <span className="text-[#808080] font-medium">
                      (2.436 reviews){" "}
                    </span>
                  </p>
                  <div className=" grid grid-cols-2 gap-x-14 mt-3 border-b-[1px] border-[#E0E0E0] pb-2">
                    {[
                      {
                        icon: User_icon,
                        content: "4 Passagers",
                      },
                      {
                        icon: Type_icon,
                        content: "Auto",
                      },
                      {
                        icon: Conditioner_icon,
                        content: "Air Conditioning",
                      },
                      {
                        icon: Door_icon,
                        content: "4 Doors",
                      },
                    ].map((info, index) => (
                      <div className=" flex items-center gap-2 mb-3">
                        <img src={info.icon} alt="" />
                        <span className=" text-sm font-normal text-[#959595] text-nowrap">
                          {info.content}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className=" flex items-center justify-between mt-3">
                    <span className=" text-sm text-[#595959] font-medium">
                      Price
                    </span>
                    <span className=" text-base font-semibold">₹ 5,00,000</span>
                  </div>

                  <button className="bg-[#1572D3] w-full py-2 text-white rounded-lg mt-3">
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center mt-12">
          <button className=" border-[1px] border-[#E0E0E0] w-fit px-8 py-2 text-[#4E4E4E] rounded-lg mt-3">
            Show all vehicles
          </button>
        </div>
      </div>

      <section class="relative overflow-hidden py-10 bg-[#051C34] text-white">
        <div class="relative z-10 container px-4">
          <div class="-m-6 flex flex-wrap">
            <div class="w-full p-6 md:w-1/2 lg:w-5/12">
              <div class="flex h-full flex-col justify-between">
                <div className=" flex items-center gap-3">
                  <Logo />
                  <h1 className=" text-base text-[#1572D3] font-semibold">
                    Buy Cars
                  </h1>
                </div>
                <div>
                  <p class="mb-4  text-base font-medium">
                    The Tailwind CSS Component library
                  </p>
                  <p class="text-sm text-gray-600">
                    © Copyright 2022. All Rights Reserved by DevUI.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full p-6 md:w-1/2 lg:w-2/12">
              <div class="h-full">
                <h3 class="tracking-px mb-5  text-lg font-semibold uppercase text-white">
                  Company
                </h3>
                <ul>
                  <li class="mb-4">
                    <a class=" text-base font-medium text-[#D6D6D6]" href="#">
                      Features
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class=" text-base font-medium text-[#D6D6D6]" href="#">
                      Pricing
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class=" text-base font-medium text-[#D6D6D6]" href="#">
                      Affiliate Program
                    </a>
                  </li>
                  <li>
                    <a class=" text-base font-medium text-[#D6D6D6]" href="#">
                      Press Kit
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full p-6 md:w-1/2 lg:w-2/12">
              <div class="h-full">
                <h3 class="tracking-px mb-5  text-lg font-semibold uppercase text-white">
                  Support
                </h3>
                <ul>
                  <li class="mb-4">
                    <a class=" text-base font-medium text-[#D6D6D6]" href="#">
                      Account
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class=" text-base font-medium text-[#D6D6D6]" href="#">
                      Help
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class=" text-base font-medium text-[#D6D6D6]" href="#">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a class=" text-base font-medium text-[#D6D6D6]" href="#">
                      Customer Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full p-6 md:w-1/2 lg:w-3/12">
              <div class="h-full">
                <h3 class="tracking-px mb-5  text-lg font-semibold uppercase text-white">
                  Legals
                </h3>
                <ul>
                  <li class="mb-4">
                    <a class=" text-base font-medium text-[#D6D6D6]" href="#">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class=" text-base font-medium text-[#D6D6D6]" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a class=" text-base font-medium text-[#D6D6D6]" href="#">
                      Licensing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllCars;
