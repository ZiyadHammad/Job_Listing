import React from 'react'
import {
  IconButton,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  makeStyles,
  Grid,
  Button
} from "@material-ui/core"
import {Close as CloseIcon} from "@material-ui/icons"
import { format } from "date-fns"

const useStyles = makeStyles((theme) => ({
  info: {
    "& > *": {
      margin: "4px",
    },
  },
    skillChip: {
      fontSize: "14.5px",
      padding: theme.spacing(0.75),
      borderRadius: "5px",
      fontWeight: 600,
      margin: theme.spacing(0.5),
      backgroundColor: theme.palette.secondary.main,
      color: "#fff"
    }
}
))



export default function JobDetail(props) {
const classes = useStyles()
  return (
  <Dialog open={!!Object.keys(props.job).length} fullWidth >
    <DialogTitle >
      <Box display="flex" justifyContent="space-between" alignItems="center" >
        {props.job.title} @ {props.job.companyName}
        <IconButton onClick={props.closePostJobCard} >
          <CloseIcon />
        </IconButton>
      </Box>
    </DialogTitle>
    <DialogContent>
      <Box>
        <Box className={classes.info} display="flex" >
          <Typography variant="caption" >Posted On</Typography>
          <Typography variant="body2" >{props.job.postedOn && format(props.job.postedOn, "dd/MMM/yyyy HH:MM")}</Typography>
          </Box> 
          <Box className={classes.info} display="flex" >
          <Typography variant="caption" >Job Type</Typography>
          <Typography variant="body2" >{props.job.type}</Typography>
          </Box> 
          <Box className={classes.info} display="flex" >
          <Typography variant="caption" >Job Location</Typography>
          <Typography variant="body2" >{props.job.location}</Typography>
          </Box> 
          <Box className={classes.info} display="flex" >
          <Typography variant="caption" >Job Description</Typography>
          <Typography variant="body2" >{props.job.description}</Typography>
          </Box> 
          <Box className={classes.info} display="flex" >
          <Typography variant="caption" >Company Website</Typography>
          <Typography variant="body2" >{props.job.companyUrl}</Typography>
          </Box> 
          <Box ml={.5} >
          <Typography variant="caption" >Skills</Typography>
            <Grid container alignItems="center" >
              {props.job.skills && 
                props.job.skills.map((skill) => (
                  <Grid item key={skill} className={classes.skillChip} >
                  {skill}
                </Grid>
              ))}
          </Grid>
          </Box> 
          
      </Box>
    </DialogContent>
      <DialogActions>
        
        <Button variant="outlined" component="a" href={props.job.link} target="_blank">
           Apply
          </Button>
         
    </DialogActions>
  </Dialog>
  )}