import { Box, ThemeProvider, Grid, CircularProgress } from "@material-ui/core"
import theme from "./theme/Themes"
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/Job/JobCard";
import PostJob from "./components/Job/PostJob";
import React, { useState, useEffect } from "react"
import {getDocs, colRef} from "./firebase/config"

function App() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getDocs(colRef)
    .then((snapshot) => {
      const tempJobs = snapshot.docs.map((doc) =>
      ({
        ...doc.data(),
        id: doc.id,
        postedOn: doc.data().postedOn.toDate()
      }))
      setJobs(tempJobs)
      setLoading(false)
    })
      .catch(err => {
      console.log(err.message)
      })
    
  }, [])
  

  return (
    <ThemeProvider theme={theme}>
      <Header /> 
      <PostJob />
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <SearchBar />

          {
            loading ? <Box display="flex" justifyContent="center"><CircularProgress /></Box>
              
              : jobs.map(job => <JobCard key={job.id} {...job} />)
          }

    
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
