import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Python from './components/Python';
import React from 'react';

export const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Python" element={<Python />}></Route>
      </Routes>
    </Router>
  );
}
