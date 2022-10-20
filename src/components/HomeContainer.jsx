import React from "react";
import Delivery from "../img/delivery.png";
// import HeroBg from "../img/heroBg.png";
import Bg from "../img/heroBg.png";
import { heroData } from "../utils/Data";

const HomeContainer = () => {
  // h-[calc(100%-88px)]"
  return (
    <section
      className=" grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 p-2 py-1 rounded-full">
          <p className="text-base text-orange-500 f0nt-semibold">
            Bike Delivery
          </p>
          <div className="w-6 h-6 bg-white rounded-full overflow-hidden drop-shadow-xl ">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
        </div>
        <p className="text-[2rem] lg:text-[4.2rem] font-bold tracking-wide text-headingColor ">
          The Fastest delivery In
          <span
            className="text-orange-600 
                text-[2.5rem] lg:text-[5rem]"
          >
            Your City,
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[65%]">
          Behind every delicious, Soulfully Spiced Chicken meal and at the
          forefront of every great customer experience stands a passionate and
          committed person. This is why “People Capability Always” is a driving
          force within our business and the golden thread that runs through
          everything we do.
        </p>

        <button
          type="button"
          className=" bg-gradient-to-br from-orange-400 to bg-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transistion-all ease-in-out
                duration-100"
        >
          {" "}
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative ">
        <img
          src={Bg}
          alt="her o-bg"
          className="ml-auto h-420 w-full lg:w-auto lg:h-600 rounded-lg  "
        />

        <div className=" w-full h-full absolute top-0 lg:left-[-30px] md:left-0 flex items-center justify-center py-6 gap-6 flex-wrap lg:px-32">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className=" lg:w-190  bg-cardoverlay backdrop-blur-md rounded-3xl p-4 flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  alt="i1"
                  className="w-20 lg:w-40  -mt-10 lg:-mt-20"
                />
                <p className="font-semibold text-textColor lg:mt-4 text-base lg:text-xl">
                  {n.name}
                </p>

                <p className=" text-[12px] lg:text-sm my-1 lg:my-3 text-lighttextGray font-semibold">
                  {n.description}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span>
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
