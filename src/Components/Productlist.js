import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from './Navbar';


const ProductPlaceholder = ({ name, description, price, imageUrl }) => (
  <div className="product">
    <img src={imageUrl} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
    <p>{price}€</p>
  </div>
);

const Productlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("http://localhost:8080/products")
    .then((response) => response.json())
    .then((data) => setProducts(data));
  }

  return (
    <div className="orstore">
      <Navbar />
      <div className="products-grid">
        {products.map((product) => (
          <ProductPlaceholder key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Productlist;