import React, { useState } from 'react'
import { ReactComponent as ArrowIcon  } from '../../assets/icons/downArrow_icon.svg'
import './selectDropdown.css'

const SelectDropdown = (props) => {
    const options = props.options
    const [expanded,setExpanded] = useState(false);

    const customStyle = {
        backgroundColor: expanded ? '#fff' : '#cddce1'
    }

    return (
        <div className='selectContainer'>
            <div className='selectLabel'><p>{props.label}</p></div>
            <div 
                style={customStyle} className='selectDropdownContainer'
                onClick={() => setExpanded( !expanded )}
            >
                <div className='customSelectLabel' style={customStyle}>
                    <div className='containerLabel' style={customStyle}>Normal</div>
                    <ArrowIcon className='icon'style={customStyle} /> 
                </div>
            </div>

            {   expanded && (
                    <div className='dropdownOptionsContainer'>
                        {
                            options.map((item,index) => (
                                <>
                                <div className='filterLists'>
                                    <input
                                        type='checkbox'
                                        id={item.value}
                                        className='filterCheckbox'
                                    />
                                    <label htmlFor={item.value} className='filterLabel'>
                                        {item.label.toUpperCase()}
                                    </label>
                                </div>
                                <hr className='customHorizontalLine'/>
                                </>
                            ))  
                        }
                        
                </div>
                )
            }
        </div>
    )
}

export default SelectDropdown