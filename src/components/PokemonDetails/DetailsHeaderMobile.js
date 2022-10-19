import React from 'react'
import { ReactComponent as CloseIcon  } from '../../assets/icons/close_icon.svg'
import './css/DetailsHeader.css'

const DetailsHeaderMobile = ({ name, id, handleClose }) => {
  return (
    <>
    <div className='mobileHeading'>
        <div className='detailsHeaderMobile'>
            <h2 className='headerTitle'>{ name }</h2>
            <button className='closeButton' onClick={handleClose}>
                <CloseIcon />
            </button>
        </div>
        <div className='headerId'>{ id }</div>            
    </div>
    </>
    
  )
}

export default DetailsHeaderMobile