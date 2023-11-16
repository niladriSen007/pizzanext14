import React from 'react'
import { FaRobot } from "react-icons/fa";

const ChatBot = () => {
  return (
    <div className='bg-orange-600 rounded-full p-2 flex items-center justify-center relative'>
        <FaRobot size={40} color='white'/>
        <div className='absolute -top-8 -right-48 rounded-md bg-orange-600 text-white w-52 p-2'>
            Hi, how can I help you?
        </div>
    </div>
  )
}

export default ChatBot