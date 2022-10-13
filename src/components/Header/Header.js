import React from 'react'
import './header.css'

const Header = () => {
  return (
        <div className='div-header'>
            <h1 className='heading'>Pokèdex</h1>
            <div className='headingLine'></div>
            <p className='subHeading'>Search for any pokemon that exists on the planet</p>          
        </div>
  )
}

export default Header