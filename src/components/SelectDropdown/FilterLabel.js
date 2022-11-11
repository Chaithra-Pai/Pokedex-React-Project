import React from 'react'

const FilterLabel = ({ filterState, label }) => {

    let firstCheckbox = (filterState[label] && filterState[label][0]) || '';

    if (filterState[label]?.length === 0) return <p className="containerLabel">Pokemon Stats</p>;
    
    if (filterState[label]?.length === 1)
		return <p className="containerLabel">{firstCheckbox}</p>;
    
    else {
        if (filterState[label]?.length > 1) {
                return (
                    <div className="containerLabel">
                        {firstCheckbox} + {' '}
                        <span style={{ fontWeight: '600' }}>{filterState[label]?.length - 1} More</span>
                    </div>
                );
            } else return null;
        }
    }

export default FilterLabel
