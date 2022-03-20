import React from 'react'
import { IconButton, Button, makeStyles, Box, Grid, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Typography} from "@material-ui/core"
import {Close as CloseIcon} from "@material-ui/icons"
const skills = [
  "Javascript",
  "Vue",
  "Node.js",
  "SQL",
  "React",
  "Firebase",
  "MongoDB"
]

const useStyles = makeStyles(theme => ({
  skillChip: {
    fontSize: "14.5px",
    padding: theme.spacing(0.75),
    borderRadius: "5px",
    margin: theme.spacing(0.5),
    fontWeight: 600,
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    cursor: "pointer",

    "&:hover": {
      border: `1px solid ${theme.palette.secondary.main}`,
      color: "#fff",
    }
  }
}))

export default (props) => {
  const classes = useStyles()

  return (
    <Dialog fullWidth >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center" >
          Post Job
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} >
          <Grid item xs={6}>
          <FilledInput disableUnderline placeholder='Job Title *' fullWidth />
          </Grid>
          <Grid item xs={6}>
            <Select
              fullWidth
              disableUnderline
              variant="filled"
              defaultValue="Full Time" >
               
                <MenuItem value="Full Time">Full Time</MenuItem>
                <MenuItem value="Part Time">Part Time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
              
              </Select>
          </Grid>
          <Grid item xs={6}>
          <FilledInput disableUnderline placeholder='Company Name *' fullWidth />
          </Grid>
          <Grid item xs={6}>
          <FilledInput disableUnderline placeholder='Company URL *' fullWidth />
          </Grid>
          <Grid item xs={6}>
          <Select fullWidth disableUnderline variant="filled" defaultValue="Remote" >
            <MenuItem value="Remote">Remote</MenuItem>
            <MenuItem value="In Office">In Office</MenuItem>
          </Select>
          </Grid>
          <Grid item xs={6}>
          <FilledInput disableUnderline placeholder='Job Link *' fullWidth />
          </Grid> 
          <Grid item xs={12}>
            <FilledInput disableUnderline placeholder='Job Description *' fullWidth multiline rows={4}/>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography>Skills</Typography>
          <Box display="flex" >
            {skills.map(skill => (
              <Box className={classes.skillChip} key={skill}>{skill}</Box>
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box color="red" display="flex" alignItems="center" justifyContent="space-between" width="100%" >
          <Typography variant="caption">
            *Required Fields
          </Typography>
          <Button variant="contained" color="primary" disableElevation>Post Job</Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}

