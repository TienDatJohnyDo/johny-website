import './App.css';
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./Components/Home"; 
import About from "./Components/About"; 
import Resume from "./Components/Resume"; 
import Contact from "./Components/Contact";
import MotivProject from "./Projects/MotivProject"; 
import HRBlockProject from "./Projects/HRBlockProject"; 


function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path = "/" element = {<Home />} />
        <Route path = "/About" element = {<About />} />
        <Route path = "/Resume" element = {<Resume />} />
        <Route path = "/Contact" element = {<Contact />} />
        <Route path = "/MotivProject" element = {<MotivProject />} />
        <Route path = "/HRBlockProject" element = {<HRBlockProject />} />
      </Routes>
    </div>
  );
}

export default App;
