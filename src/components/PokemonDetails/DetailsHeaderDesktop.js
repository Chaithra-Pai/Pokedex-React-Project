import React from 'react'
import { ReactComponent as CloseIcon  } from '../../assets/icons/close_icon.svg'
import './css/DetailsHeader.css'

const DetailsHeaderDesktop = ({ name, id, handleClose }) => {
  return (
    <>
    <div className='desktopHeading'>
        <div className='detailsHeader'>
            <h2 className='headerTitle'>{ name }</h2>
            <div className='idContainer'>
                <div className='verticalLine'></div>
                <div className='headerId'>{ id }</div>
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