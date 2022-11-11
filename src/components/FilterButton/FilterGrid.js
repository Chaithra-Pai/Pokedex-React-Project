import React, { useState } from 'react'
import { ReactComponent as ExpandIcon } from '../../assets/icons/exapand_icon.svg';
import { ReactComponent as CollapseIcon } from '../../assets/icons/collapse_icon.svg';
import './css/filterGrid.css'
import FilterLabel from '../SelectDropdown/FilterLabel';


const FilterGrid = ( {label, options, filterState, setFilterState }) => {

    const [expanded, setExpanded] = useState(false);
    
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
    <div className="filterMobileRow" id={label}>
        <div className="filterTypeRow">

            <div className="filterName">{label}</div>

            <div className="filterValues">
                <FilterLabel filterState={filterState} label={label} />
            </div>

            {expanded ? 
                ( <CollapseIcon onClick={() => setExpanded(false)} />) 
                : (<ExpandIcon onClick={() => setExpanded(true)} />)
            }

        </div>

        { expanded && (
            <div className='filterMobileGridContent'>
                {
                    options.map((item,index) => (
                    <div className="filterCheckboxRow" key={index}>
                        <input
                            type='checkbox'
                            id={item}
                            className='filterCheckbox'
                            checked={filterState[label]?.includes(item)}
							onChange={() => handleCheckBox(item)}
                        />
                        <label htmlFor={item} className='filterMobileLabel'>
                            {item.toUpperCase()}
                        </label>
                    </div>
                    ))  
                }                        
                </div>
                )
            }
    </div>
  )
}

export default FilterGrid