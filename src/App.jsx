import React, { useEffect, useRef } from "react";
import Logo from "./components/Logo";
import Hero_img from "../src/assets/image/hero_img.png";
import Choose_us_img from "../src/assets/image/choose_us_img.png";
import Arrow from "../src/assets/icon/arrow.svg";
import Wallet from "../src/assets/icon/wallet.svg";
import Car_logo1 from "../src/assets/image/car_logo1.png";
import Car_logo2 from "../src/assets/image/car_logo2.png";
import Car_logo3 from "../src/assets/image/car_logo3.png";
import Car_logo4 from "../src/assets/image/car_logo4.png";
import Car_logo5 from "../src/assets/image/car_logo5.png";
import Car_logo6 from "../src/assets/image/car_logo6.png";
import Car_img from "../src/assets/image/car_img1.png";
import Quote_img from "../src/assets/image/quote_img1.png";
import Quote_img2 from "../src/assets/image/quote_img2.png";
import User_img from "../src/assets/image/user_img.png";
import User_icon from "../src/assets/icon/user_icon.svg";
import Type_icon from "../src/assets/icon/type_icon.svg";
import Conditioner_icon from "../src/assets/icon/conditioner_icon.svg";
import Door_icon from "../src/assets/icon/door_icon.svg";

const App = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const updateContainerHeight = () => {
      const imageHeight = imageRef.current.clientHeight;
      containerRef.current.style.height = `${imageHeight}px`;
    };

    updateContainerHeight();
    window.addEventListener("resize", updateContainerHeight);

    return () => {
      window.removeEventListener("resize", updateContainerHeight);
    };
  }, []);

  const containerRef2 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    const updateContainerHeight = () => {
      const imageHeight2 = imageRef2.current.clientHeight;
      containerRef2.current.style.height = `${imageHeight2}px`;
    };

    updateContainerHeight();
    window.addEventListener("resize", updateContainerHeight);

    return () => {
      window.removeEventListener("resize", updateContainerHeight);
    };
  }, []);

  const containerRef3 = useRef(null);
  const imageRef3 = useRef(null);

  useEffect(() => {
    const updateContainerHeight = () => {
      const imageHeight3 = imageRef3.current.clientHeight;
      containerRef3.current.style.height = `${imageHeight3}px`;
    };

    updateContainerHeight();
    window.addEventListener("resize", updateContainerHeight);

    return () => {
      window.removeEventListener("resize", updateContainerHeight);
    };
  }, []);

  return (
    <div className="relative">
      <div className="">
        <nav className="container 2xl:relative py-10 flex items-center justify-between bg-blue-50">
          <div className=" flex items-center gap-3">
            <Logo />
            <h1 className=" text-base text-[#1572D3] font-semibold">
              Buy Cars
            </h1>
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

        <div
          ref={containerRef}
          className="container 2xl:relative flex items-center justify-start bg-blue-100"
        >
          <div className="flex flex-col justify-center">
            <div className="relative -mt-40 2xl:mb-0">
              <div className=" relative w-fit">
                <h1 className=" text-[48px] font-semibold text-[#242424] leading-[50px]">
                  Find, book and <br /> buy a car{" "}
                  <span className="text-[#1572D3]">Easily</span>
                </h1>
                <img
                  src={Arrow}
                  alt="icon"
                  className=" absolute right-0 bottom-[-15px]"
                />
              </div>
              <p className="text-lg text-[#272727] font-medium leading-6 mt-7">
                Elevate your car buying experience with <br /> seamless
                solutions tailored just for you <br /> find, finance, and drive
                your dream car <br /> effortlessly
              </p>
            </div>
            <img
              ref={imageRef}
              src={Hero_img}
              alt="hero img"
              className="absolute right-0 top-0"
            />
          </div>
        </div>

        <div className="container flex items-center gap-10 overflow-x-auto my-20 bg-blue-200">
          {[
            Car_logo1,
            Car_logo2,
            Car_logo3,
            Car_logo4,
            Car_logo5,
            Car_logo6,
          ].map((e, index) => (
            <div key={index}>
              <img src={e} alt="" />
            </div>
          ))}
        </div>

        <div ref={containerRef2} className="relative bg-blue-300 2xl:container">
          <div className="absolute left-0 top-0">
            <img src={Choose_us_img} alt="hero img" ref={imageRef2} />
          </div>
          <div className="container relative w-fit left-[20%] top-[10%]">
            <span className="py-3 px-6 bg-[#E8F1FB] text-[#1572D3] text-sm font-medium rounded-lg">
              WHY CHOOSE US
            </span>
            <h1 className="text-[38px] font-medium text-[#333333] leading-[45px] mt-8">
              We offer the best experience <br /> with our buying deals
            </h1>
            <div className="mt-5">
              {[0, 1, 2, 3].map((e, index) => (
                <div className="flex items-start gap-3 mb-6">
                  <div className="p-3 bg-[#ECF5FF] rounded-2xl">
                    <img src={Wallet} alt="" />
                  </div>
                  <div>
                    <h1 className="text-xl font-medium text-black">
                      Best price guaranteed
                    </h1>
                    <p className="text-base text-[#6D6D6D] font-normal mt-1">
                      Find a lower price? We’ll refund you 100% of the
                      difference.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" container mt-20">
          <h1 className=" text-[38px] font-medium text-black text-center">
            Most popular cars deals
          </h1>

          <div className="grid grid-cols-4 gap-7 mt-4">
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

          <div className=" flex items-center justify-center mt-12">
            <button className=" border-[1px] border-[#E0E0E0] w-fit px-8 py-2 text-[#4E4E4E] rounded-lg mt-3">
              Show all vehicles
            </button>
          </div>
        </div>

        <div className="bg-[#F7FBFF] mt-10 pb-20">
          <div className="container pt-32 relative">
            <div className=" flex items-center justify-center flex-col">
              <span className="py-3 px-6 bg-[#E8F1FB] text-[#1572D3] text-sm font-medium rounded-lg">
                TESTIMONIALS
              </span>
              <h1 className=" text-[38px] font-medium text-black text-center">
                What peole say about us?
              </h1>
              <div className="absolute left-10 top-20">
                <img src={Quote_img} alt="" />
              </div>
              <div className="absolute top-0 right-10 z-0">
                <img src={Quote_img2} alt="" />
              </div>
            </div>
            <div className="px-52">
              <div
                ref={containerRef3}
                className=" bg-white flex items-start rounded-3xl mt-20 relative z-10"
              >
                <div className="h-full">
                  <img
                    src={User_img}
                    alt=""
                    className="h-full"
                    ref={imageRef3}
                  />
                </div>
                <div className=" ml-7 w-[500px] flex flex-col justify-between h-full">
                  <div>
                    <h1 className=" text-[64px]">
                      5.0 <span className=" text-[24px]">stars</span>
                    </h1>
                    <p className=" text-lg text-[#282828] font-medium">
                      “I feel very secure when using caretall's services. Your
                      customer care team is very enthusiastic and the driver is
                      always on time.”
                    </p>
                  </div>
                  <div className=" flex items-start flex-col pb-6">
                    <span className=" text-[24px] font-medium text-black">
                      Charlie Johnson
                    </span>
                    <span className=" text-sm font-normal text-[#838383]">
                      From New York, US
                    </span>
                  </div>
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default App;
