"use client"
import React from "react";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <div className="px-64 py-20 text-center overflow-hidden">
      <motion.div
        className="overflow-x-hidden "
        initial={{ y: 400 }}
        animate={{ y: 0 }}
        exit={{ y: 400 }}
        // animate="enter"
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 70,
          duration: 2000,
          delay:1.2
        }}
      >
        <p className="text-5xl overflow-hidden font-bold leading-snug">
          Check out <br /> <span className="text-orange-600 font-black  text-6xl">Our Best Sellers</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Menu;
