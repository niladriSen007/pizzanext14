"use client";
import Button from "@/common/Button";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import OutlineButton from "@/common/OutlineButton";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/router";

const Register = () => {
  // const router = useRouter()

  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);
    try {
      const res = await fetch(`/api/register`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // console.log(data);
      if (res?.ok) {
        // console.log("Got id");
        setFormData((prev) => ({
          ...prev,
          fullName: "",
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }));
      }
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  // console.log(formData);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 70,
        duration: 2000,
        // delay: 1.8,
      }}
      className="w-screen h-[71vh] flex flex-col items-center justify-center relative z-40"
    >
      {error && (
        <motion.div
          initial={{ y: -600 }}
          animate={{ y: 20 }}
          exit={{ y: -600 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 70,
            duration: 1000,
            // delay: 1.8,
          }}
          className="w-68 border-2 border-red-500 rounded-md p-2 bg-red-200 cursor-pointer "
          onClick={() => {
            setError(!error);
          }}
        >
          <p>Error occured. Please try again</p>
        </motion.div>
      )}
      <p className="font-bold text-orange-600 text-4xl py-8 relative z-50">
        Register{" "}
      </p>
      <form
        className="flex flex-col gap-4 bg-transparent backdrop-blur-sm relative z-40 p-4"
        onSubmit={handleSubmit}
      >
        <input
          value={formData?.fullName}
          onChange={handleChange}
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          className="w-72 px-4 py-2 border-2 border-orange-500 focus:outline-none rounded-md text-orange-700"
        />
        <input
          value={formData?.userName}
          onChange={handleChange}
          type="text"
          name="userName"
          placeholder="Enter your user name"
          className="w-72 px-4 py-2 border-2 border-orange-500 focus:outline-none rounded-md text-orange-700"
        />
        <input
          value={formData?.email}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-72 px-4 py-2 border-2 border-orange-500 focus:outline-none rounded-md text-orange-700"
        />
        <input
          value={formData?.password}
          onChange={handleChange}
          type="text"
          name="password"
          placeholder="Enter your password"
          className="w-72 px-4 py-2 border-2 border-orange-500 focus:outline-none rounded-md text-orange-700"
        />
        <input
          value={formData?.confirmPassword}
          onChange={handleChange}
          type="text"
          name="confirmPassword"
          placeholder="confirm your Password"
          className="w-72 px-4 py-2 border-2 border-orange-500 focus:outline-none rounded-md text-orange-700"
        />
        <Button type="submit" className={"flex justify-center py-2 my-1"}>
          Register
        </Button>
        <OutlineButton className={"py-2 "}>
          <Link href="#">Login with google </Link>
          <p>
            <FaGoogle />
          </p>
        </OutlineButton>
      </form>
      <div className="absolute top-24 left-[640px] z-20">
        <Image
          src={"/images/bro.png"}
          width={400}
          height={400}
          className="w-[300px] h-[300px] -rotate-45"
          alt="register"
        />
      </div>
      <div className="absolute top-[300px] right-[650px] z-20">
        <Image
          src={"/images/toma.png"}
          width={400}
          height={400}
          className="w-[300px] h-[300px] rotate-12"
          alt="register"
        />
      </div>
    </motion.div>
  );
};

export default Register;
