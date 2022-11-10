import React, { useState } from 'react'
import { ReactComponent as ExpandIcon } from '../../assets/icons/exapand_icon.svg';
import { ReactComponent as CollapseIcon } from '../../assets/icons/collapse_icon.svg';
import './css/filterGrid.css'


const FilterGrid = (props) => {
  const options = props.options;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="filterMobileRow">
        <div className="filterTypeRow">
            <div className="filterName">{props.label}</div>
            <div className="filterValues">Normal</div>
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
                            id={item.value}
                            className='filterCheckbox'
                        />
                        <label htmlFor={item.value} className='filterMobileLabel'>
                            {item.label.toUpperCase()}
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