import { Box, ThemeProvider } from "@material-ui/core"
import theme from "./theme/Themes"
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
     <Header /> 
    </ThemeProvider>
  );
}

export default App;
