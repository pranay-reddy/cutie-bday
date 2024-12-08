import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navibar';
import Events from './components/Events';
import Body from './components/Body';  
import PicDump from './components/PicDump'; // Assuming you have a PicDump component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />  {/* Home page */}
        <Route path="/events" element={<Events />} />  {/* Events page */}
        <Route path="/pic-dump" element={<PicDump />} />  {/* Pic Dump page */}
      </Routes>
    </Router>
  );
}

export default App;
