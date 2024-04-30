import React from 'react'
import { forwardRef } from 'react'

const Input = ({placeholder,type,...props},ref) => {
  return (
    <input className='p-3 border ' type={type} placeholder={placeholder} {...props} ref={ref}/>
  )
}

export default forwardRef(Input);