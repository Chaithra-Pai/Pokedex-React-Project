import React from 'react'
import './Box.css'

const Box = ({ content , style }) => {
  return (
    <div className='box' style={style}>
        { content }
    </div>
  )
}

export default Box