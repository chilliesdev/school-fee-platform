import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Dialog, Typography, Grid, } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'

import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'

// paystack
import { PaystackConsumer } from 'react-paystack';

// components
import { Button } from '../../../components'

// custom Hooks
import { useThousand } from '../../../../hooks'

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
  img: {
    margin: 'auto',
    display: 'block',
    width: 250,
    width: 300,
  },
})

const DialogTitle = withStyles(styles)(({ 
  children, 
  classes, 
  onClose, 
  ...other }) => {
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h4">{children}</Typography>
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
  allFormData,
  school: {
    name,
    picture,
  },
  fee: {
    name: feeName,
    amount
  }
}) {

  const amountInThounsands = useThousand(amount || "")

  return (
    <div>
      <Dialog onClose={toggleOpen} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle onClose={toggleOpen}>Confrim Your Request</DialogTitle>
        <MuiDialogContent>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <img className={classes.img} alt="complex" src={picture ? picture : 'images/default-school-img.png'} />
            </Grid>
            <Grid item md={6}>
              <Typography gutterBottom variant="subtitle1">{name}</Typography>
              <Typography variant="body2" gutterBottom>No, Street Name. Town, Local Govt, State, Country</Typography>
              <Typography variant="body2" color="textSecondary">(+234) 0801 - 234 -5678</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography variant="subtitle1" gutterBottom>&#8358;{amountInThounsands}</Typography>
              <Typography variant="subtitle1">{feeName}</Typography>
            </Grid>
          </Grid>
        </MuiDialogContent>
        <MuiDialogActions>
          <PaystackConsumer {...allFormData}>
          {({initializePayment}) =>
            <Button 
              id="confirm-card-button" 
              action={() => initializePayment()}>
              Confirm
            </Button>}
          </PaystackConsumer>
        </MuiDialogActions>
      </Dialog>
    </div>
  )
})