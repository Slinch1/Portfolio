import './App.css';

import Projects from "./Projects";
import SocialMedia from "./SocialMedia";
import AboutMeSection from "./AboutMe";
import {AppBar, Toolbar} from "@mui/material";

import Typography from "@mui/material/Typography";

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Your-Desired-Font, sans-serif',
    },
});
function App() {
  return (
    <div className="App">
        <AppBar position="static" sx={{ backgroundColor: '#333' }}>
            <Toolbar sx={{ justifyContent: 'center' }}>
                <Typography variant="h1" component="div" sx={{ color: '#fff', textAlign: 'center', padding: '1rem' }}>
                    Portfolio
                </Typography>
            </Toolbar>
        </AppBar>

      <AboutMeSection/>

      <div id="portfolio">
        <h2>Portfolio</h2>
        <Projects/>
      </div>

    <footer>
        <p>&copy; 2023 Timo Petzold</p>
        <SocialMedia/>
    </footer>
    </div>
  );
}

export default App;


