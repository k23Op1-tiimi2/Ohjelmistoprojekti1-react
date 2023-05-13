import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "./Navbar";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Productlist = () => {
  const [products, setProducts] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
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
    fetchManufacturers();
  }, []);

  useEffect(() => {
    if (reservationComplete) {
      alert("Reservation successful!");
    }
  }, [reservationComplete]);

  const fetchProducts = () => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const fetchManufacturers = () => {
    fetch("http://localhost:8080/manufacturers")
      .then((response) => response.json())
      .then((data) => setManufacturers(data));
  };

  const handleReservationDetailsChange = (e) => {
    setReservationDetails({
      ...reservationDetails,
      [e.target.name]: e.target.value
    });
  }

  const handleReservationSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product_id: selectedProduct.id,
        custName: reservationDetails.name,
        email: reservationDetails.email,
        phone: reservationDetails.phone
      })
    })
      .then((response) => {
        if (response.ok) {
          setReservationComplete(true);
          setReservationDetails({
            name: "",
            email: "",
            phone: ""
          });
          setReservationModalOpen(false); // close the modal
        } else {
          throw new Error("Failed to create reservation.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleReservationCancel = () => {
    setReservationModalOpen(false); // close the modal without saving anything
  }

  const filteredProducts = selectedManufacturer 
    ? products.filter(product => product.manufacturer.name === selectedManufacturer) 
    : products;

    return (
      <div className="orstore">
        <Navbar />
        <div>
          <h1>Products</h1>
          <label>
            Manufacturer:
            <select value={selectedManufacturer} onChange={(e) => setSelectedManufacturer(e.target.value)}>
              <option value="">All</option>
              {manufacturers.map((manufacturer, index) => 
                <option key={index} value={manufacturer.name}>{manufacturer.name}</option>
              )}
            </select>
          </label>
        </div>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p><b>Manufacturer:</b> {product.manufacturer.name}</p>
              <p><b>Price:</b> {product.price}€</p>
              <button onClick={() => {
                setSelectedProduct(product);
                setReservationModalOpen(true);
              }}>Reserve</button>
            </div>
          ))}
        </div>
        {selectedProduct && (
          <Modal isOpen={reservationModalOpen} onRequestClose={() => setReservationModalOpen(false)}>
            <h2>Reserve {selectedProduct.name}</h2>
            <form onSubmit={handleReservationSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={reservationDetails.name}
                  onChange={handleReservationDetailsChange}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={reservationDetails.email}
                  onChange={handleReservationDetailsChange}
                  required
                />
              </div>
              <div>
                <label>Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={reservationDetails.phone}
                  onChange={handleReservationDetailsChange}
                  required
                />
              </div>
              <button type="submit">Reserve</button>
              <button type="button" onClick={handleReservationCancel}>Cancel</button>
              
            </form>
          </Modal>
        )}
      </div>
    );};  

export default Productlist;