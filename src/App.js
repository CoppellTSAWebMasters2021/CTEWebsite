import React, { Component } from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Architecture from './components/CTE Paths/Architecture';
import Arts from './components/CTE Paths/Arts';
import Business from './components/CTE Paths/Business';
import Education from './components/CTE Paths/Education';
import Health from './components/CTE Paths/Health';
import STEM from './components/CTE Paths/STEM';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/arts" element={<Arts />} />
            <Route path="/business" element={<Business />} />
            <Route path="/education" element={<Education />} />
            <Route path="/health" element={<Health />} />
            <Route path="/stem" element={<STEM />} />

          </Routes>
        </div>

   
      </BrowserRouter>
    );
  }
}

export default App;
