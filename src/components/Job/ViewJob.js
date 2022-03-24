import React from 'react'
import {
  IconButton,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core"
import {Close as CloseIcon} from "@material-ui/icons"


export default function ViewJob(props) {
  <Dialog open={!!Object.keys(props.job).length} fullWidth >
    <DialogTitle >
      <Box display="flex" justifyContent="space-between" alignItems="center" >
        Post Job
        <IconButton >
          <CloseIcon />
        </IconButton>
      </Box>
    </DialogTitle>
    <DialogContent></DialogContent>
    <DialogActions></DialogActions>
  </Dialog>
}

