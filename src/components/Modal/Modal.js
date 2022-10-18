import React from 'react'
import { Box, Button, Modal, Typography } from '@mui/material';

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
        <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
        </Box>
        </Modal>
    </div>
  )
}

export default CustomModal