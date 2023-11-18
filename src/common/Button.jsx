import React from 'react'

const Button = ({children,className,onClk}) => {
  return (
    <button className={`px-6  bg-orange-600 text-white rounded-md flex items-center gap-2 border-2 border-orange-600 ${className}`} onClick={onClk}>
        {children}
    </button>
  )
}

export default Button