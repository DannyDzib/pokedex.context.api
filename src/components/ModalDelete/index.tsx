import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import * as constants from '@constants/home'

const ModalDelete: React.FC<any> = (props) => {
    const { open, handleClose, handleClick, title } = props
    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogActions>
                <Button onClick={handleClose} > {constants.HOME_MODAL_CLOSE} </Button>
                {handleClick && <Button onClick={() => handleClick()} >{constants.HOME_MODAL_ACEPT}</Button>}
            </DialogActions>
        </Dialog>
    );
}

export default ModalDelete