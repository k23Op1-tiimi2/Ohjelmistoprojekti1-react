import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "./Navbar";

const Manufacturers = () => {
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    fetchManufacturers();
  }, []); 

  const fetchManufacturers = () => {
    fetch("http://localhost:8080/manufacturers")
        .then((response) => response.json())
        .then((data) => setManufacturers(data));
  };

  return (
    <div className="orstore">
      <Navbar />
      <div className="manufacturer-list">
        <h1>Manufacturers</h1>
        <div className="manufacturer-grid">
          {manufacturers.map((manufacturer, index) => (
            <div key={index} className="manufacturer-card">
              <h2>{manufacturer.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manufacturers;
