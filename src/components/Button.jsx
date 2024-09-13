import React from 'react'

const Button = ({title,btnClass}) => {
  return (
    <button className={btnClass}>{title}</button>
  )
}

export default Button