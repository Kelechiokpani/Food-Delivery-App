import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Naira from "react-naira";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  console.log(data);

  const rowContainer = useRef();
  const [Items, setItems] = useState([]);
  const [{ cartItems }, dispatch] = useStateValue();

  const addtocart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: Items,
    });
    localStorage.setItem("cartItems", JSON.stringify(Items));
    // console.log(item);
  };

  useEffect(() => {
    addtocart();
  }, [Items]);

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={rowContainer}
      className={`w-full my-12 items-center gap-3 flex scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none "
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className=" w-300 h-[225px] min-w-[300px] md:w-340 md:min-w-[340px]   py-2 px-6 my-12  bg-cardoverlay rounded-lg  backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative "
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-40 h-40 mt-8 drop-shadow-2xl"
              >
                <img
                  src={item?.imageURL}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end -mt-12 position-absolute">
              <p className="text-text-color font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-md  text-headingColor font-semibold">
                  <span className="text-sm text-red-500">
                    <Naira>{item?.price}</Naira>
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} alt="not Found" className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
