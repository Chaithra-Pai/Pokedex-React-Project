import React from 'react'
import SelectCustom from './SelectCustom'
import colourOptions from '../../sampleData.js'

const CustomSelectContainer = () => {
  return (
    <div>
        <SelectCustom options={colourOptions}/>
        
    </div>
  )
}

export default CustomSelectContainer