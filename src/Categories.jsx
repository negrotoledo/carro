import React, { useState } from "react";
import "./css/categorias.css"; 

const Categories = ({ products, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="categories-container">
      <h2 className="categories-title">Categorías</h2>
      <ul className="categories-list">
        <li
          onClick={() => handleCategoryChange("Más Vendidos")}
          className={selectedCategory === "Más Vendidos" ? "selected-category" : "category"}
        >
          Más Vendidos
        </li>
        <li
          onClick={() => handleCategoryChange("Nuevos")}
          className={selectedCategory === "Nuevos" ? "selected-category" : "category"}
        >
          Nuevos
        </li>
      
      </ul>

      {Array.isArray(products) &&
        selectedCategory && (
          <div className="products-preview-container">
            <h3>Productos de {selectedCategory}</h3>
            <ul className="products-preview-list">
              {products
                .filter((product) => product.category === selectedCategory)
                .map((product) => (
                  <li key={product.id} className="product-preview">
                    <h4>{product.name}</h4>
                    <p>Precio: {product.price}</p>
                    <button onClick={() => onAddToCart(product)}>Agregar al carrito</button>
                  </li>
                ))}
            </ul> 
          </div>
        )}
    </div>
  );
};

export default Categories;




