import React from 'react'
import './Box.css'

const Box = ({ content , backgroundColor }) => {
  return (
    <div className='box' style={{backgroundColor: backgroundColor}}>
        { content }
    </div>
  )
}

export default Box