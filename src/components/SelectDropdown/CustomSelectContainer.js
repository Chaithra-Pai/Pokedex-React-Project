import React, { useEffect, useState } from 'react'
import SelectCustom from './SelectDropdown'
import colourOptions from '../../sampleData.js'
import './customSelectContainer.css'
import { getFilterObject } from '../../redux/selector/filterSelector'
import { useSelector } from 'react-redux'
import { stat } from '../../constants/constants'

const CustomSelectContainer = () => {

  const [filterState, setFilterState ] = useState({});
  const { filterList, completeList } = useSelector(getFilterObject);

  const filterArray = [
		['Type', [...completeList?.Type]],
		['Gender', [...completeList?.Gender]],
		['Stat', [...stat]],
	];
  
  useEffect( () => {
     setFilterState(filterList);
  },[filterList]);

  return (
    <div className='div-filter'>
      <div className='filterButtonDesktop'>
      {
          filterArray.map((item,index) => {
            return (
              <SelectCustom 
                label={item[0]}
                options={item[1]}
                filterState={filterState}
                setFilterState={setFilterState}
                key={item[0]}
              />
            )
          })
      }
      </div>
    </div>
  )
}

export default CustomSelectContainer