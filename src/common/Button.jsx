import React from 'react'

const Button = ({children,className}) => {
  return (
    <button className={`px-6 py-2 bg-orange-600 text-white rounded-md flex items-center gap-2 border-2 border-orange-600 ${className}`}>
        {children}
    </button>
  )
}

export default Button