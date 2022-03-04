import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/styles';
import theme from './components/styles/Theme';
import Home from './components/Home';
import About from './components/About';
import Python from './components/Python';



export const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Python" element={<Python />}></Route>

        </Routes>
      </ThemeProvider>
      
    </Router>
  );
}
