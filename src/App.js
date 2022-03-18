import { ThemeProvider, Grid } from "@material-ui/core"
import theme from "./theme/Themes"
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/Job/JobCard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header /> 
      <Grid container justify="center">
        <Grid item xs={10}>
          <SearchBar />
          <JobCard />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
