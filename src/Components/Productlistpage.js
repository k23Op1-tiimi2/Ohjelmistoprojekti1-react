import React, { useState } from "react";
import "../App.css";
import Navbar from './Navbar';
import {Link} from 'react-router-dom';

const ProductPlaceholder = ({ title, description, price, imageUrl }) => (
  <div className="product">
    <img src={imageUrl} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <p>{price}€</p>
  </div>
);

const Productlist = () => {
  const [products] = useState([
    {
        title: "Product 1",
        description: "Product 1 description",
        price: 24.99,
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        title: "Product 2",
        description: "Product 2 description",
        price: 24.99,
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        title: "Product 3",
        description: "Product 3 description",
        price: 24.99,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        title: "Product 4",
        description: "Product 2 description",
        price: 24.99,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        title: "Product 5",
        description: "Product 2 description",
        price: 24.99,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        title: "Product 6",
        description: "Product 2 description",
        price: 24.99,
        imageUrl: "https://via.placeholder.com/150",
      },
  ]);

  return (
    <div className="orstore">
      <Navbar />
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductPlaceholder key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Productlist;