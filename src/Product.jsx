import React from "react";
import "./css/product.css";



const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product-container">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-info">Precio: {product.price}</p>
      <p className="product-info">Stock: {product.stock}</p>
      <p className="product-info">Color: {product.color}</p>
      <p className="product-info">Tamaño: {product.size}</p>
      <p className="product-info">Categoría: {product.category}</p>
      <img className="product-image" src={product.image} alt={product.name} />
      <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>Agregar al carrito </button>
    
    
    
    </div>
  );
};

export default Product;
