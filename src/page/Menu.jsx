import React from "react";
import Dishes from "../components/ReuseableComponent/Hero";
// import Naira from "react-naira";
// import { products } from "../utils/Data";
const Menu = () => {
  return (
    <div>
      <div className="bg-white w-full h-auto flex flex-col items-center justify-center">
        <section className=" menu-hero  grid gap-2 w-[100rem]">
          <div className=" py-2 flex-1 flex items-center relative w-full justify-center ">
            <p className="text-[2rem] lg:text-[4.2rem] font-bold tracking-wide text-headingColor ">
              Our
              <span
                className="text-orange-600 
                text-[2.5rem] lg:text-[5rem] pl-5"
              >
                Menu
              </span>
            </p>
          </div>
        </section>
        <Dishes />
      </div>
    </div>
  );
};

export default Menu;
