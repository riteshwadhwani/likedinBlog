import React from 'react'
import { forwardRef } from 'react'

const Input = ({placeholder,type,...props},ref) => {
  return (
    <input className='p-5 border focus:border-2 rounded-xl  border-black focus:outline-none focus:border-blue-600 ' type={type} placeholder={placeholder} {...props} ref={ref}/>
  )
}

export default forwardRef(Input);