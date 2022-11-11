import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as CloseIcon  } from '../../assets/icons/close_icon.svg'
import './css/filterMobileContainer.css'
import FilterGrid from './FilterGrid'
import { getFilterObject } from '../../redux/selector/filterSelector'
import { stat } from '../../constants/constants'
import {
	resetFilter,
	updateFilter,
} from '../../redux/actionContainer/actionCreators/filterActionCreator'

const FilterMobileContainer = ({ handleClose }) => {

	const dispatch = useDispatch();
	const [filterState, setFilterState] = useState({});
	const { filterList, completeList } = useSelector(getFilterObject);

	const filterArray = [
		['Type', [...completeList?.Type]],
		['Gender', [...completeList?.Gender]],
		['Stat', [...stat]],
	];

    const style = {
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

	useEffect(() => {
		setFilterState(filterList);
	}, [filterList]);

  	return (
    <Box sx={style}>
        <div className="filterMobileContainerHeading">
			<h2>Filters</h2>
			<button onClick={handleClose}>
				<CloseIcon />
			</button>
		</div>
        <hr />
        <div className="filterMobileGridContainer">
			{
				filterArray.map((item,index) => {
					return (
						<div style={{ padding: '10px', alignSelf: 'center' }} key={item[0]}>
							<FilterGrid
								label={item[0]}
								options={item[1]}
								filterState={filterState}
								setFilterState={setFilterState}
							/>
						</div>
					)
				})
			}
        </div>

        <div className="filterMobileButtonsContainer">
				<button className="filterButton" onClick={() => { dispatch(resetFilter()) }}>
					RESET
				</button>
				
				<button	className="filterButton apply" onClick={() => { dispatch(updateFilter(filterState)); handleClose(); }}>
					APPLY
				</button>
			</div>
    </Box>
  	)
}

export default FilterMobileContainer