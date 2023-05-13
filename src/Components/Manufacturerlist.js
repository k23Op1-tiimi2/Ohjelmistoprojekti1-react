import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "./Navbar";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

const Manufacturers = () => {
  const [manufacturers, setManufacturers] = useState([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [gridApi, setGridApi] = useState(null);

  useEffect(() => {
    fetchManufacturers();
  }, []); 

  const fetchManufacturers = () => {
    fetch("http://localhost:8080/manufacturers")
        .then((response) => response.json())
        .then((data) => setManufacturers(data));
  };

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  useEffect(() => {
    if (gridApi) {
      gridApi.setQuickFilter(selectedManufacturer);
    }
  }, [selectedManufacturer, gridApi]);

  return (
    <div className="orstore">
      <Navbar />
      <div>
        <h1>Manufacturers</h1>
        <select onChange={(e) => setSelectedManufacturer(e.target.value)}>
          <option value="">All</option>
          {manufacturers.map((manufacturer, index) => 
            <option key={index} value={manufacturer.name}>{manufacturer.name}</option>
          )}
        </select>
      </div>
      <div
        className="ag-theme-alpine"
        style={{ height: "500px", width: "100%" }}
      >
        <AgGridReact
          onGridReady={onGridReady}
          columnDefs={[
            {
              headerName: "Manufacturer",
              field: "name",
            }
          ]}
          rowData={manufacturers}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default Manufacturers;
