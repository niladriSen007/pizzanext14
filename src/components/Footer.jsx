import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white px-64 py-8 relative h-48 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold">PizzaRia</p>
            <p className="mt-2">Delicious pizza delivered to your doorstep.</p>
          </div>
          <div className='relative z-50'>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Menu</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Pizza Place. All rights reserved.</p>
        </div>
         <div className="absolute top-4 right-[840px] z-30">
        <Image src={"/images/p5.png"} alt="tomato" width={1400} height={1400} className="w-40 h-40 rotate-3 transition-all duration-500" />
      </div>
      </div>
    </footer>
  )
}

export default Footer