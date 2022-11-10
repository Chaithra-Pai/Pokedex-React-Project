import { Box } from '@mui/system'
import React from 'react'
import { ReactComponent as CloseIcon  } from '../../assets/icons/close_icon.svg'
import './css/filterMobileContainer.css'
import FilterGrid from './FilterGrid'
import colourOptions from '../../sampleData'

const FilterMobileContainer = ({ handleClose }) => {

    const materialBoxStyle = {
		display: 'flex',
		flexDirection: 'column',
		bgcolor: '#FFFFFF',
		height: '90%',
		boxShadow: 24,
		alignItems: 'center',
		width: '90%',
		alignSelf: 'center',
		borderRadius: '8px',
		overflow: 'auto',
		overflowX: 'hidden',
	};

  return (
    <Box sx={materialBoxStyle}>
        <div className="filterMobileContainerHeading">
			<h2>Filters</h2>
			<button onClick={handleClose}>
				<CloseIcon />
			</button>
		</div>
        <hr />
        <div className="filterMobileGridContainer">
            <FilterGrid options={colourOptions} label='Type'/> 
            <FilterGrid options={colourOptions} label='Gender'/>  
            <FilterGrid options={colourOptions} label='Stat'/>  
        </div>

        <div className="filterMobileButtonsContainer">
				<button className="filterButton">RESET</button>
				<button	className="filterButton apply">APPLY</button>
			</div>
    </Box>
  )
}

export default FilterMobileContainer