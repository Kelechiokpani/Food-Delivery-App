import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import Logo from "../img/logo.png";
import Avater from "../img/avatar.png";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  // get firebase and google authentication
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // set user and dispatch value
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  // set Menu to display
  const [isMenu, setIsMenu] = useState(false);

  //fetch user data using firebase auth
  const login = async () => {
    // if user is not logged In allow
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      // store user data in local storage once user is logged In
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };
  // on user log out clear localstorage
  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  return (
    // header section
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/**Desktop  & tablet */}
      <div className="hidden md:flex w-full h-full item-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-10 object-cover" />
          <p className="text-headingColor text-x1 font-bold">Kace Kitchen</p>
        </Link>

        <div className="flex items-center gap-8">
          <ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex  gap-8  items-center"
          >
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100">
              <a href="/"> Home </a>
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100">
              <a href="/page/menu"> Menu</a>
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100">
              <a href="/page/about"> About Us</a>
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100">
              <a href="/page/service"> services </a>
            </li>
          </ul>
          <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-sm text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>

          {/* if user is logged In set user inmage else set Avatar image */}
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avater}
              alt="userprofile"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              onClick={login}
            />
            {/* if only there is a menu then render */}
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top -right-0 "
              >
                {/* render add item button only if it an admin email  */}
                {user && user.email === "mremmatex@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transistion-all duration-100 ease-in-out text-textColor text-base">
                      New item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex items-center gap-31cursor-pointer hover:bg-slate-100 transistion-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Log-out <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/** Mobile */}
      <div className="flex md:hidden w-full h-full items-center justify-between ">
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket
            onClick={showCart}
            className="text-textColor text-2xl cursor-pointer"
          />
          {cartItems && cartItems.length > 0 && (
            <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-sm text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-x1 font-bold">Kace </p>
        </Link>
        {/* if user is logged In set user inmage else set Avatar image */}
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avater}
            alt="userprofile"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            onClick={login}
          />
          {/* if only there is a menu then render */}
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top -right-0 "
            >
              {/* render add item button only if it an admin email  */}
              {user && user.email === "mremmatex@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transistion-all duration-100 ease-in-out text-textColor text-base">
                    New item <MdAdd />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col ">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Home
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Service
                </li>
              </ul>
              <p
                className="m-2 p-2 rounded-md shadow-lg flex items-center justify-center  gap-3 cursor-pointer bg-gray-200 hover:bg-gray-300 transistion-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Log-out <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
