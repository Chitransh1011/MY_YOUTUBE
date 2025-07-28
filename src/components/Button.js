import React from 'react'

const Button = ({name}) => {
  return (
    <button className='border border-3 px-5 m-5 bg-slate-300 rounded-lg'>{name}</button>
  )
}

export default Button