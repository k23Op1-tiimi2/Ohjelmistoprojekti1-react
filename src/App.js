import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Productlist from './Components/Productlist';
import HomePage from './Components/Homepage';
import About from './Components/About';
import Manufacturerlist from './Components/Manufacturerlist';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Productlist />} />
          <Route path="/about" element={<About />} />    
          <Route path="/manufacturers" element={<Manufacturerlist />} />      
        </Routes>
      </Router>
    </div>
  );
}
export default App;
