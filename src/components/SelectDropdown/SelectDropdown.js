import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ReactComponent as ArrowIcon  } from '../../assets/icons/downArrow_icon.svg'
import { updateFilter } from '../../redux/actionContainer/actionCreators/filterActionCreator';
import FilterLabel from './FilterLabel';
import './selectDropdown.css'

const SelectDropdown = ( { label, options, filterState, setFilterState }) => {
    const dispatch = useDispatch();
    const [expanded,setExpanded] = useState(false);

    const customStyle = {
        backgroundColor: expanded ? '#fff' : '#cddce1'
    }
    
    const handleCheckBox = (value) => {

		let filterLocal = { ...filterState };

		if (!filterLocal[label]?.includes(value)) {
			filterLocal[label] = [...filterLocal[label], value];
		} else {
			filterLocal[label] = filterLocal[label].filter((item) => item !== value);
		}
		setFilterState(filterLocal);
	};
    
    return (
        <div className='selectContainer'>
            <div className='selectLabel'><p>{label}</p></div>
            <div 
                style={customStyle} className='selectDropdownContainer'
                onClick={() => {
                    if (expanded) {
					  	dispatch(updateFilter(filterState));
					}
                    setExpanded( !expanded )
                }}
            >
                <div className='customSelectLabel' style={customStyle}>
                    <div className='containerLabel' style={customStyle}>
                        <FilterLabel filterState={filterState} label={label} />
                    </div>
                    <ArrowIcon className='icon'style={customStyle} /> 
                </div>
            </div>

            {   expanded && (
                    <div className='dropdownOptionsContainer'>
                        {
                            options.map((item,index) => (
                                <>
                                <div className='filterLists' key={index}>
                                    <input
                                        type='checkbox'
                                        id={item}
                                        className='filterCheckbox'
                                        checked={filterState[label]?.includes(item)}
                                        onChange={() => handleCheckBox(item)}
                                    />
                                    <label htmlFor={item} className='filterLabel'>
                                        {item?.toUpperCase()}
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