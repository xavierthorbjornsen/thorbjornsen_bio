import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import React from 'react';
import Footer from "./components/Footer";

export const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
      <Footer /> 
    </Router>
  );
}
