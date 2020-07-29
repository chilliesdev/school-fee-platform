import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Dialog, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'

import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions'

import { Button } from '../../../components'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  confirmButton: {
    width: '100%',
    // fontFamily: 'Montserrat'
  }
});

const DialogTitle = withStyles(styles)(({ children, classes, onClose, ...other }) => {
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h3">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

export default withStyles(styles)(function ConfirmDialog({ 
  classes, 
  open, 
  toggleOpen, 
  onConfirm 
}) {
  return (
    <div>
      <Dialog onClose={toggleOpen} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle onClose={toggleOpen}>
          Confrim Your Request
        </DialogTitle>
        <MuiDialogContent>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </Typography>
        </MuiDialogContent>
        <MuiDialogActions>
          <Button className={classes.confirmButton} action={onConfirm}>
            Confirm
          </Button>
        </MuiDialogActions>
      </Dialog>
    </div>
  )
})