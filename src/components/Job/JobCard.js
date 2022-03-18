import React from "react"
import { Box, Grid, Typography, Button, makeStyles } from "@material-ui/core"

const skills = ["Javascript", "React.js", "Node.js"]

const useStyles = makeStyles((theme) => ({
  wrapper: {
    border: "1px solid #e8e8e8",
    cursor: "pointer",
  },
  companyName: {
    fontSize: "13.5px",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0.75),
    borderRadius: "5px",
    display: "inline-block",
    fontWeight: 600,
  },
  skillChip: {
    fontSize: "14.5px",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0.75),
    borderRadius: "5px",
    fontWeight: 600,
    margin: theme.spacing(0.5),
    fontWeight: 600,
    backgroundColor: theme.palette.secondary.main,
    color: "#fff"
  }
}))

export default (props) => {
  const classes = useStyles()
  return (
    <Box p={2} className={classes.wrapper} >
      <Grid container alignItems="center" >
        <Grid item xs>
          <Typography variant="subtitle1" >Frontend Dev</Typography>
          <Typography className={classes.companyName} variant="subtitle1" >Google</Typography>
        </Grid>
        <Grid item container xs>
            {
            skills.map(skill =>
              <Grid className={classes.skillChip} key={skill} item={skill}>
                {skill}
              </Grid>)
            }   
        </Grid>
        <Grid item container direction="column" alignItems="flex-end" xs>
          <Grid item>
            <Typography variant="caption" >
              2390 min ago | Full Time | Remote
            </Typography>
          </Grid>
          <Grid item>
            <Box mt={2} >
              <Button variant="outlined" >Apply</Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}



