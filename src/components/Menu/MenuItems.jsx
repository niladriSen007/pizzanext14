import Button from "@/common/Button";
import Image from "next/image";
import React from "react";

const MenuItems = ({image,name}) => {
  return (
    <section className="w-80 text-center bg-transparent backdrop-blur-lg drop-shadow-2xl py-6 rounded-md  hover:shadow-2xl hover:shadow-orange-200">
      <div className="pb-4">
        <Image
          src={image}
          alt="pizzzahero"
          width={400}
          height={400}
          className="w-[360px] h-[240px] drop-shadow-2xl rounded-full object-contain transition-all duration-700 overflow-hidden cursor-pointer"
        />
      </div>
      <div className=" gap-2 px-10 flex flex-col justify-center items-center ">
        <h1 className="font-black text-lg">{name}</h1>
        <p className="text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate .</p>
        <Button className=" w-40 text-sm font-bold">Add to cart $12</Button>
      </div>
    </section>
  );
};

export default MenuItems;
