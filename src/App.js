import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import NavBar from "./NavBar";
import Product from "./Product";
import products from "./ProductsData";
import Cart from "./Cart";
import "./App.css";
import "./css/cart.css";
import Home from "./Home";
import Categories from './Categories';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setCartCount(cartCount + 1);
    Swal.fire('¡Producto agregado!', 'El producto se ha añadido al carrito correctamente', 'success'); 
  };

  const handleCheckout = () => {
    const confirmation = new Promise((resolve, reject) => {
      Swal.fire({
        title: 'Confirmar pago',
        text: '¿Deseas proceder con el pago?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          resolve(true);
        } else {
          reject(false);
        }
      });
    });

    confirmation
      .then(() => {
        setCartItems([]);
        setCartCount(0);
        Swal.fire('¡Pago exitoso!', 'El pago se ha realizado con éxito', 'success'); 
      })
      .catch(() => {
        
      });
  };



  return (
    <Router>
      <div>
        <NavBar cartCount={cartCount} />
        <Categories handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<div>
            <div className="product-container">
              {products.map((product) => (
                <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </div>} />
          <Route path="/cart" element={<Cart cartItems={cartItems} onCheckout={handleCheckout} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
