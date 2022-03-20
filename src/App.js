import { ThemeProvider, Grid } from "@material-ui/core"
import theme from "./theme/Themes"
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/Job/JobCard";
import PostJob from "./components/Job/PostJob";
import jobData from "./JobData"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header /> 
      <PostJob />
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <SearchBar />

         {jobData.map(job => <JobCard key={job.id} {...job} />)}
          
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
