import { Box, ThemeProvider, Grid, CircularProgress, Button } from "@material-ui/core"
import theme from "./theme/Themes"
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/Job/JobCard";
import PostJob from "./components/Job/PostJob";
import React, { useState, useEffect } from "react"
import {Close as CloseIcon} from "@material-ui/icons"
import {
  getDocs,
  colRef,
  addDoc,
  query,
  where,
  collection,
  db
} from "./firebase/config"
import { serverTimestamp, onSnapshot } from "firebase/firestore";
import ViewJob from "./components/Job/ViewJob";

function App(props) {
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
    const q = query(colRef, where("location", "==", jobSearch.location))
    let tempJobs = onSnapshot(q, (snapshot) => {
    snapshot.docs.forEach(job => ({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate()
    }))
    })
    setJobs(tempJobs)
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
      {/* <ViewJob job={viewJob} closePostJobCard={setViewJob({})} /> */}
      <Box mb={3} >
          <Grid container justifyContent="center">
            <Grid item xs={10}>
              <SearchBar fetchCustomJob={fetchCustomJob} />

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
