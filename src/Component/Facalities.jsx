import React from 'react'

const Facalities = ({icon,title}) => {
  return (
    <div className='flex gap-2 items-center'>
          <span>{icon}</span>
          <p className='text-lg font-semibold text-gray-600'>{title}</p>
        </div>
  )
}

export default Facalities