import React from "react"
import { Box, Grid, Typography, Button } from "@material-ui/core"

export default function Header(props) {
  return (
    <Box py={10} bgcolor="secondary.main" color="white" >
      <Grid container justifyContent="center">
        <Grid item xs={10} >
          <Box display="flex" justifyContent="space-between" >
            <Typography variant="h3">Open Job Listing</Typography>
            <Button onClick={props.openPostJobCard} variant="contained" color="primary" >Post a Job</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}