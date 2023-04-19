import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Productlist from './Components/Productlistpage';
import HomePage from './Components/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Productlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
