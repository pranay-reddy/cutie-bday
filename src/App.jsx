import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navibar';
import Events from './components/Events';
import Body from './components/BDay';
import PicDump from './components/PicDump'; // Assuming you have a PicDump component
import Home from './components/Home';
import DChristmas from './components/DChristmas';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page */}
        <Route path="/events" element={<Events />} />  {/* Events page */}
        <Route path="/pic-dump" element={<PicDump />} />  {/* Pic Dump page */}
        <Route path="/BDay" element={<Body />} />  {/* Pic Dump page */}
        <Route path="/Christmas" element={<DChristmas />} />  {/* Events page */}
      </Routes>
    </Router>
  );
}

export default App;
