import React, { useState } from "react"
import { withStyles } from "@material-ui/core/styles"
import { Dialog, Typography, Grid } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton"

import MuiDialogTitle from "@material-ui/core/DialogTitle"
import MuiDialogContent from "@material-ui/core/DialogContent"
import MuiDialogActions from "@material-ui/core/DialogActions"

// components
import Button from "./Button"
import Loading from "./Loading"

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  img: {
    margin: "auto",
    display: "block",
    width: 250,
    width: 300
  }
})

const DialogTitle = withStyles(styles)(
  ({ children, classes, onClose, titleClass, ...other }) => {
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography className="modal-title" variant="h4">
          {children}
        </Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    )
  }
)

export default withStyles(styles)(function Modal({
  title,
  handleClick,
  children,
  disabled,
  loading,
  confirmButton
}) {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(!open)

  return (
    <>
      <div>
        <Dialog
          onClose={toggleOpen}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle onClose={toggleOpen}>{title}</DialogTitle>
          <MuiDialogContent>{children}</MuiDialogContent>
          <MuiDialogActions>
            <Button
              classes="modal-confirm-btn"
              disabled={disabled}
              action={handleClick}
            >
              {loading ? (
                <Loading color="default" />
              ) : confirmButton ? (
                confirmButton
              ) : (
                "Confirm"
              )}
            </Button>
          </MuiDialogActions>
        </Dialog>
      </div>
      <Button action={toggleOpen} classes="xl">
        {title}
      </Button>
    </>
  )
})
