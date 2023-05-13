import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "./Navbar";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Productlist = () => {
  const [products, setProducts] = useState([]);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [reservationDetails, setReservationDetails] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [reservationComplete, setReservationComplete] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const columnDefs = [
    { headerName: "Name", field: "name", filter: "agTextColumnFilter", suppressMovable: true },
    {
      headerName: "Description",
      field: "description",
      filter: "agTextColumnFilter",
      suppressMovable: true,
    },
    {
      headerName: "Price",
      field: "price",
      filter: "agNumberColumnFilter",
      suppressMovable: true,
    },
    {
      headerName: "Manufacturer",
      field: "manufacturer.name",
      filter: "agTextColumnFilter",
      suppressMovable: true,
    },
    {
      headerName: "Actions",
      cellRendererFramework: (params) => (
        <button onClick={() => {
          setSelectedProduct(params.data);
          setReservationModalOpen(true);
        }}>Reserve</button>
      ),
      suppressMovable: true,
    }
  ];

  const handleReservationDetailsChange = (e) => {
    setReservationDetails({
      ...reservationDetails,
      [e.target.name]: e.target.value
    });
  }

  const handleReservationSubmit = () => {
    setReservationComplete(true);
    setReservationModalOpen(false);
  }

  return (
    <div className="orstore">
      <Navbar />
      <div className="ag-theme-alpine" style={{ height: "500px", width: "100%" }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={products}
          pagination={true}
        />
      </div>
      {selectedProduct && (
        <Modal isOpen={reservationModalOpen} onRequestClose={() => setReservationModalOpen(false)}>
          <h2>Reserve {selectedProduct.name}</h2>
          <form onSubmit={handleReservationSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={reservationDetails.name} onChange={handleReservationDetailsChange} required />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={reservationDetails.email} onChange={handleReservationDetailsChange} required />
            <br />
            <label htmlFor="phone">Phone:</label>
            <input type="tel" name="phone" value={reservationDetails.phone} onChange={handleReservationDetailsChange} required />
            <br />
            <button type="submit">Reserve</button>
            <button onClick={() => setReservationModalOpen(false)}>Cancel</button>
          </form>
          {reservationComplete && (
            <p>Reservation complete!</p>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Productlist