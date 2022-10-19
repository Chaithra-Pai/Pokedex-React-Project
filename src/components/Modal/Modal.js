import React from 'react'
import { Box, Button, Modal, Typography } from '@mui/material';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

const CustomModal = (props) => {
  const { open, setOpen } = props;
  
  const handleClose = () => setOpen(false);

  const style = {
    display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					alignSelf: 'center',
  };

  return (
    <div>
        <Modal
            open={Boolean(open)}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={style}
        >
          <PokemonDetails handleClose={handleClose} id={open}/>
        </Modal>
    </div>
  )
}

export default CustomModal