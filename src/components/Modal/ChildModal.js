import { Backdrop, Box, Button, Modal } from '@mui/material';
import React from 'react'

function ChildModal( { id, description }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    const readTextStyle = {
            background: 'none',
            padding: '0',
            fontFamily: 'Roboto',
            fontSize: '15px',
            textDecoration: 'underline',
            color: '#2e3156',
    }
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '550px',
        height:'400px',
        bgcolor: '#2e3156',
        padding:'20px',
        color: '#fff',
        textAlign: 'justify',
        overflowY: 'scroll',
        fontFamily: 'Roboto'
    };

    return (
        <div>
            <Button style={readTextStyle} onClick={setOpen}>Read more...</Button>
            <Backdrop sx={{ color: '#fff',  zIndex: (theme) => theme.zIndex.drawer + 1 }} open={Boolean(open)} onClick={handleClose}>
                <Modal
                    hideBackdrop
                    open={Boolean(open)}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...style }}>
                        {description}
                    </Box>
                </Modal>
            </Backdrop>
        </div>
    )
}

export default ChildModal