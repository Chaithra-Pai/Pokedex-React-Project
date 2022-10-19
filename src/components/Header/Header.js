import React from 'react'
import './header.css'
import { ConstantText } from '../../constants/constants'

const Header = () => {
  return (
        <div className='div-header'>
            <h1 className='heading'>{ConstantText.Heading}</h1>
            <div className='headingLine'></div>
            <p className='subHeading'>{ConstantText.SubHeading}</p>          
        </div>
  )
}

export default Header