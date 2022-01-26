
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';

function App() {
  const history = useHistory();
  const [mode, setMode] = useState("dark");
const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
});
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={1} style={{borderRadius:"0px",minHeight:"100vh", margin:"0px"}}>
    <div className="App">
    
     <AppBar position="static">
       <Toolbar>
       <Button varient="text" color="success" ><ParkOutlinedIcon/> NATURE</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/")}>Home</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/addmovies")}>AddMovies</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/movielist")}>Movielist</Button>
       
       <Button varient="text" color="inherit" style={{marginLeft:"auto"}} onClick={()=>setMode(mode==="light"? "dark":"light")}> {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} {mode==="light"? "Dark":"Light"}Mode</Button>
       </Toolbar>
       </AppBar>

  < Home/>


  <Footer/>
    </div>
   
    </Paper>
    </ThemeProvider>
   
  );
}
export default App;

function Home(){
  return(
    <div>
      <Header/>
    <h1 className="welcome">Welcome to Nature in Mind</h1>
    <h3 className="welcome1">We help people improve their health and well-being through mindful engagement with nature</h3>
    <p className="welcome2">Nature in mind is an educational organization that aims to help people improve their health and well-being through mindfully connecting with the natural world. We run workshops, courses, tours, and retreats in which we use a mindfulness-based approach to explore the beauty of the natural world.</p>
    
    
    </div>
  );
}

function Header(){
  return(
    <div className='header-design'></div>
  );
}



function Footer(){
  return(
    <div className='footer-design'>
      <h1 className='copyright'>Copyright © 2022</h1>
    </div>
  );
}