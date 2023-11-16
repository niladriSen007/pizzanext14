import React from 'react'

const Button = ({children}) => {
  return (
    <button className='px-6 py-2 bg-orange-600 text-white rounded-md flex items-center gap-2'>
        {children}
    </button>
  )
}

export default Button