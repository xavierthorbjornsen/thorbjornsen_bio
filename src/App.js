import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './components/styles/Theme';
import Header from './components/Header';
 


export const App = () => {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <Header />
        <Routes>
          <Route></Route>
        </Routes>
      </ThemeProvider>

    </Router>
  );
}
