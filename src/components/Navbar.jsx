import Button from "@/common/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-64 w-screen drop-shadow-xl ">
      <div>
        <Image
          src={"/images/logo.webp"}
          width={72}
          height={24}
          alt="pizza"
          className="w-16 h-16 rounded-full drop-shadow-xl"
        />
      </div>
      <div className="flex items-center justify-between gap-8 text-orange-600 font-bold text-lg">
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>Menu</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Contact</Link>
      </div>
      <div className="flex items-center gap-6">
        <Image src={"/images/user.jpg"} width={192} height={192} className="w-12 h-12 object-fill border-2 border-orange-500 rounded-full" alt="user" />
        {/* <button className="px-4 py-1 rounded-md bg-orange-500 text-white font-bold hover:bg-orange-700 transition-all duration-300">Log in</button> */}
       <Button>
         Login
       </Button>
      </div>
    </nav>
  );
};

export default Navbar;
