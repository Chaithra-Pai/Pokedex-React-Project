import React from 'react'
import { ReactComponent as CloseIcon  } from '../../assets/icons/close_icon.svg'
import './css/DetailsHeader.css'

const DetailsHeaderDesktop = ({ handleClose }) => {
  return (
    <>
    <div className='desktopHeading'>
        <div className='detailsHeader'>
            <h2 className='headerTitle'>BULBASAUR</h2>
            <div className='idContainer'>
                <div className='verticalLine'></div>
                <div className='headerId'>001</div>
                <div className='verticalLine'></div>
            </div>
            <div>
                <button className='closeButton' onClick={handleClose}>
                    <CloseIcon />
                </button>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default DetailsHeaderDesktop