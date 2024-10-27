import React from 'react'

const Input = ({
    type,
    placeholder,
    onChange,
    className
}) => <input type={type} placeholder={placeholder} onChange={onChange} className={`${className} border-b-2 border-black outline-none p-2 font-semibold bg-transparent `} required  />

export default Input