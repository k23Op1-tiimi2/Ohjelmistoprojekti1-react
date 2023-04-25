import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    return (
        <div> <h1>About O&R Store</h1>
            <Link to="/">Home</Link>{' '}
            <Link to="/products">Products</Link>{' '}

            <p>We are Omppu and Rane, two brothers who got an amazing opportunity to do what we really want:
                we want to sell dog clothes! In 2023 we established a store in Helsinki and set up an online
                store.</p>
            <p> R&O Oy<br></br>
                Business ID: 7821669-9<br></br>
                Phone Number: 040 937 4777<br></br>
                Address: Katuosoite 13 B, 00120, Helsinki<br></br>
            </p>
        </div >
    )
}
