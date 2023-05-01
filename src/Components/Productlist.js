import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "./Navbar";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

const Productlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const columnDefs = [
    { headerName: "Name", field: "name", filter: "agTextColumnFilter" },
    {
      headerName: "Description",
      field: "description",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Price",
      field: "price",
      filter: "agNumberColumnFilter",
    },
    { headerName: "Image", field: "imageUrl" },
    {headerName: "Manufacturer",
    field: "manufacturer.name",
    filter: "agTextColumnFilter"

    }
  ];

  return (
    <div className="orstore">
      <Navbar />
      <div
        className="ag-theme-alpine"
        style={{ height: "500px", width: "100%" }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={products}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default Productlist;