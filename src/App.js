import { Box, ThemeProvider, Grid, CircularProgress, Button } from "@material-ui/core"
import theme from "./theme/Themes"
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/Job/JobCard";
import PostJob from "./components/Job/PostJob";
import JobDetail from "./components/Job/JobDetail";
import React, { useState, useEffect } from "react"
import {Close as CloseIcon} from "@material-ui/icons"
import {
  getDocs,
  colRef,
  addDoc
} from "./firebase/config"
import { serverTimestamp } from "firebase/firestore";


function App() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [customSearch, setCustomSearch] = useState(false)
  const [postJobCard, setPostJobCard] = useState(false)
  const [viewJob, setViewJob] = useState({})


  const jobPost = (jobDetails) => {
     addDoc(colRef, ({
      ...jobDetails,
      postedOn: serverTimestamp()
    }))
    fetchJobs()
  }

  const fetchJobs = () => {
    setCustomSearch(false)
    setLoading(false)
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
  }

  useEffect(() => {
    fetchJobs()
    
  }, [])

  const fetchCustomJob = async (jobSearch) => {
    setCustomSearch(true)
    setLoading(true)
    // setJobs(querySnapshot)
    setLoading(false)
  } 
  
  return (
    <ThemeProvider theme={theme}>
      <Header
        openPostJobCard={() => setPostJobCard(true)}
      /> 
      <PostJob
        closePostJobCard={() => setPostJobCard(false)}
        postJobCard={postJobCard}
        jobPost={jobPost}
      />
      <JobDetail job={viewJob}  closePostJobCard={() => setViewJob({})} />
      <Box mb={3} >
          <Grid container justifyContent="center">
            <Grid item xs={10}>
              <SearchBar job={viewJob} fetchCustomJob={fetchCustomJob} />

            {loading ? (
              <Box display="flex" justifyContent="center">
                <CircularProgress />
              </Box>
                  
            ) : (
              <>
                {customSearch && (
                  <Box my={2} display="flex" justifyContent="flex-end" >
                    <Button onClick={fetchJobs} >
                      <CloseIcon size={20} />
                      Custom Search
                    </Button>
                  </Box>
                )}
                {jobs.map(job => (
                  <JobCard open={() => setViewJob(job)} key={job.id} {...job} />
                ))}
              </>
            )}
            </Grid>
            </Grid>
        </Box>
    </ThemeProvider>
  );
}

export default App;
