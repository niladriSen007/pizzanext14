"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MenuItems from "./MenuItems";

const Menu = () => {
  return (
    <div className="px-64 py-20  overflow-hidden relative">
      <motion.div
        className="overflow-x-hidden text-center"
        initial={{ y: 400,opacity:0 }}
        animate={{ y: 0,opacity:1 }}
        exit={{ y: 400,opacity:0 }}
        // animate="enter"
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 70,
          duration: 2000,
          delay: 1.2,
        }}
      >
        <p className="text-5xl overflow-hidden font-bold leading-snug">
          Check out <br />{" "}
          <span className="text-orange-600 font-black  text-6xl">
            Our Best Sellers
          </span>
        </p>
      </motion.div>
      {/* <div className="absolute top-16 left-64">
        <Image src={"/images/toma.png"} alt="tomato" width={1400} height={1400} className="w-44 h-44 hover:rotate-45 transition-all duration-500" />
      </div> */}
      <motion.div
        className="overflow-x-hidden grid grid-cols-3 gap-y-12 py-10  place-content-center"
        initial={{ y: 400,opacity:0 }}
        animate={{ y: 0,opacity:1 }}
        exit={{ y: 400,opacity:0 }}
        // animate="enter"
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 70,
          duration: 2000,
          delay: 1.8,
        }}
      >
        <MenuItems image={"/images/p3.png"} name={"Papperoni pizza"}/>
        <MenuItems image={"/images/p6.png"} name={"Mix crust pizza"}/>
        <MenuItems image={"/images/p5.png"} name={"Extra cheese pizza"}/>
        <MenuItems image={"/images/p7.png"} name={"Extra spicy pizza"}/>
        <MenuItems image={"/images/p8.png"} name={"Margheritta pizza"}/>
        <MenuItems image={"/images/p9.png"} name={"Mix veg pizza"}/>
        <MenuItems image={"/images/p10.png"} name={"Capsicum chicken pizza"}/>
        {/* <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems /> */}
      </motion.div>
    </div>
  );
};

export default Menu;
