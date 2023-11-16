"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";
import Button from "@/common/Button";
import OutlineButton from "@/common/OutlineButton";

const Hero = () => {
  return (
    <div className="px-64 py-10 relative ">
      <div className="flex items-center justify-between relative z-30 ">
        <motion.div
          className="overflow-x-hidden "
          initial={{ x: -1000, y: 0 }}
          animate={{ x: 0, y: 0 }}
          exit={{ x: -1000, y: 0 }}
          // animate="enter"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 70,
            duration: 2000,
          }}
        >
          <h1 className="font-bold text-6xl w-[500px] leading-tight">
            Everything you need is just a{" "}
            <span className="text-orange-600 text-7xl">pizza</span>
          </h1>
          <p className="w-[800px] py-6 text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            repellendus aliquid dolorum, velit, fugit labore quod amet culpa
            sunt voluptates libero repudiandae ?
          </p>
        </motion.div>
        <motion.div
          className="overflow-hidden "
          initial={{ x: 800, y: 0 }}
          animate={{ x: 100, y: 0 }}
          exit={{ x: 800, y: 0 }}
          // animate="enter"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 70,
            duration: 2000,
          }}
        >
          <Image
            src={"/images/pizzahero.png"}
            alt="pizzzahero"
            width={400}
            height={400}
            className="w-[840px] h-[460px] drop-shadow-2xl rounded-full hover:rotate-90 transition-all duration-700 overflow-hidden cursor-pointer"
          />
        </motion.div>
      </div>
      <motion.div
        className="overflow-x-hidden flex items-center gap-6 relative z-30"
        initial={{ y: 400 }}
        animate={{ y: -60 }}
        exit={{ y: 400 }}
        // animate="enter"
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 90,
          duration: 3000,
        }}
      >
        {/* <button className="flex items-center bg-orange-600 gap-2 text-white px-4 py-1 rounded-md">Order now <FaPlayCircle /></button> */}
        <Button>
          Order now <FaPlayCircle size={22} />
        </Button>
        <OutlineButton>Learn more</OutlineButton>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        // // animate="enter"
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 180,
          duration: 5000,
          delay:.5
        }}
        className="absolute -top-[140px] left-[1040px] rotate-90 z-20  transition-all duration-700 cursor-pointer "
      >
        <Image
          src={"/images/ltc.png"}
          alt="broccoli"
          width={13000}
          height={13000}
          className="w-[800px] h-[800px]"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
