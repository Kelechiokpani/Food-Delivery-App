import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "../components/RowContainer";
import { reuseable } from "../utils/Data";
import { useStateValue } from "../context/StateProvider";

const About = () => {
  const [{ foodItems }] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <section className=" about-hero  grid gap-2 w-[100rem]">
        <div className=" py-2 flex-1 flex items-center relative w-full justify-center ">
          <p className="text-[2rem] lg:text-[4.2rem] font-bold tracking-wide text-headingColor ">
            About
            <span
              className="text-orange-600 
                text-[2.5rem] lg:text-[5rem] pl-5"
            >
              Us
            </span>
          </p>
        </div>
      </section>
      {reuseable &&
        reuseable.map((n) => (
          <div className="w-full h-auto flex flex-col items-center justify-center">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-5">
              <div className="py-2 flex-1 flex items-center relative w-full ">
                <img
                  src={n.imgsrc1}
                  alt="her o-bg"
                  className=" h-400 w-full lg:w-auto lg:h-400 rounded-lg  "
                />
              </div>
              <div className="py-2 flex-1 flex flex-col justify-right gap-6">
                <p className="text-[2rem] lg:text-[3rem] font-bold tracking-wide text-headingColor text-center ">
                  {n.pHeader1}
                </p>
                <p className="text-base text-textColor text-center md:text-center md:w-[80%] ml-10 mr-10">
                  {" "}
                  {n.pBody1}
                </p>
              </div>
            </section>

            <section className="w-full my-6">
              <div className="w-full flex items-center justify-between">
                <p
                  className="text-2xl font-semibold capitalize text-headingColor relative
          before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2  before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transistion-all ease-in-out duration-100"
                >
                  Our creamy & Tasty Ice creams
                </p>

                <div className="hidden md:flex gap-3 items-center">
                  <motion.div
                    whileTap={{ scale: 0.75 }}
                    className="w-8 h-8 rounded-lg bg-orange-300 p-2  hover:bg-orange-500 cursor-pointer  flex item-center justify-center"
                    onClick={() => setScrollValue(-200)}
                  >
                    <MdChevronLeft className="text-base text-white" />
                  </motion.div>
                  <motion.div
                    whileTap={{ scale: 0.75 }}
                    className="w-8 h-8 rounded-lg bg-orange-300 p-2  hover:bg-orange-500 cursor-pointer  flex item-center justify-center"
                    onClick={() => setScrollValue(200)}
                  >
                    <MdChevronRight className="text-base text-white" />
                  </motion.div>
                </div>
              </div>
              <RowContainer
                scrollValue={scrollValue}
                flag={true}
                data={foodItems?.filter((n) => n.category === "icecreams")}
              />
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
              <div className="py-2 flex-1 flex flex-col justify-right gap-6">
                <p className="text-[2rem] lg:text-[4.2rem] font-bold tracking-wide text-headingColor ">
                  <span
                    className="text-orange-600 
                text-[2rem] lg:text-[3rem]"
                  >
                    {n.pHeader2}
                  </span>
                </p>

                <p className="text-base text-textColor text-center md:text-center md:w-[80%] ml-10 mr-10">
                  {n.pBody2}
                </p>
              </div>
              <div className="py-2 flex-1 flex items-center relative w-full ">
                <img
                  src={n.imgsrc2}
                  alt="her o-bg"
                  className=" h-400 w-full lg:w-auto lg:h-400 rounded-lg  "
                />
              </div>
            </section>
          </div>
        ))}

      <section
        className=" grid grid-cols-1 md:grid-cols-2  gap-2 w-full"
        id="home"
      >
        <div className="bg-blue-800">hi about page</div>
        <div className="bg-blue-800">hi about page</div>
        <div className="bg-blue-800">hi about page</div>
        <div className="bg-blue-800">hi about page</div>
      </section>
    </div>
  );
};

export default About;
