import { Modal } from '@mui/material'
import React from 'react'
import FilterMobileContainer from './FilterMobileContainer'

const FilterModal = (props) => {
    const { open, setOpen } = props;
	const handleClose = () => setOpen(false);

    return (
        <Modal
			sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
			open={Boolean(open)}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			componentsProps={<div style={{ backgroundcolor: 'yellow' }}></div>}
	    >
		    <FilterMobileContainer handleClose={handleClose} />
	    </Modal>
    )
}

export default FilterModal