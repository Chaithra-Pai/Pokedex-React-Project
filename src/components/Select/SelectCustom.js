import React from 'react'
import { ReactComponent as ArrowIcon  } from '../../assets/icons/downArrow_icon.svg'
import './SelectCustom.css'
import colourOptions from '../../sampleData.js'


const SelectCustom = (props) => {


    return (
        <div className='filterDesktop'>
            <div className='selectLabel'><p>Type</p></div>
            <div className='selectDropdown'>
                <div className='dropdownLabel'>
                    <input type='checkbox' className='customInput' checked={true} />
                </div>
                <div className='downArrowIcon'>
                    <ArrowIcon className='icon'></ArrowIcon>  
                </div>        
            </div>
        </div>
    )
}

export default SelectCustom